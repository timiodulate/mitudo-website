import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { emailServiceEmailAddress, businessEmail } from "@/data";
export interface ContactMessage {
	name: string;
	email: string;
	message: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER — Replace with your real database / email service integration
// Options:
//   - Prisma + Postgres:  await db.contactMessage.create({ data: body })
//   - Resend:             await resend.emails.send({ to, subject, html })
//   - Nodemailer:         await transporter.sendMail({ ... })
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
	try {
		const body = (await request.json()) as ContactMessage;
		const { name, email, message } = body;

		// Basic validation
		if (!name?.trim() || !email?.trim() || !message?.trim()) {
			return NextResponse.json(
				{ error: "All fields are required." },
				{ status: 400 },
			);
		}

		if (!email.includes("@")) {
			return NextResponse.json(
				{ error: "A valid email address is required." },
				{ status: 400 },
			);
		}

		// TODO: save to DB or send email notification
		// e.g. await db.contactMessage.create({ data: { name, email, message } });

		const resend = new Resend(process.env.RESEND_API_KEY);
		await resend.emails.send({
			from: emailServiceEmailAddress,
			to: [businessEmail],
			subject: `New enquiry from ${name}`,
			html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
		});

		// console.log("[Contact] New enquiry:", { name, email, message });

		return NextResponse.json(
			{
				message:
					"Your enquiry has been received. We will be in touch shortly.",
			},
			{ status: 201 },
		);
	} catch {
		return NextResponse.json(
			{ error: "Something went wrong. Please try again." },
			{ status: 500 },
		);
	}
}
