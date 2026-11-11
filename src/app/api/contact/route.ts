import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { emailServiceEmailAddress, businessEmail } from "@/data";
import type { ContactMessage } from "@/types";

const escape = (value: string) =>
	value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER: Replace with your real database / email service integration
// Options:
//   - Prisma + Postgres:  await db.contactMessage.create({ data: body })
//   - Resend:             await resend.emails.send({ to, subject, html })
//   - Nodemailer:         await transporter.sendMail({ ... })
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
	try {
		const body = (await request.json()) as ContactMessage;
		const { name, email, message, business, service } = body;

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
			replyTo: email,
			subject: `New enquiry from ${name}${service ? `: ${service}` : ""}`,
			html: [
				["Name", name],
				["Email", email],
				["Business", business || "Not given"],
				["Needs help with", service || "Not sure yet / several things"],
				["Message", message],
			]
				.map(([label, value]) => `<p><strong>${label}:</strong> ${escape(String(value)).replace(/\n/g, "<br>")}</p>`)
				.join(""),
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
