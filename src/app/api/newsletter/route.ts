import { emailServiceEmailAddress, businessEmail } from "@/data";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER — Replace with your real database / email service integration
// Options: Prisma + Postgres, Supabase, Mailchimp API, Resend, etc.
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { email } = body as { email: string };

		if (!email || !email.includes("@")) {
			return NextResponse.json(
				{ error: "A valid email address is required." },
				{ status: 400 },
			);
		}

		// TODO: persist `email` to your database or send to your email service
		// e.g. await db.newsletterSubscriber.create({ data: { email } });
		// e.g. await mailchimp.lists.addListMember(LIST_ID, { email_address: email, status: 'subscribed' });

		const resend = new Resend(process.env.RESEND_API_KEY);
		await resend.emails.send({
			from: emailServiceEmailAddress,
			to: [businessEmail],
			subject: `New subscriber ${email}`,
			html: `<p><strong>Email:</strong> ${email}</p>`,
		});

		// console.log(`[Newsletter] New subscriber: ${email}`);

		return NextResponse.json(
			{ message: "You are now subscribed to our legal insights." },
			{ status: 201 },
		);
	} catch (err) {
		return NextResponse.json(
			{ error: "Something went wrong. Please try again.:" + err },
			{ status: 500 },
		);
	}
}
