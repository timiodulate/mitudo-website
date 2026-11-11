import { NextRequest, NextResponse } from "next/server";
import { INTERNALS_API_URL } from "@/services/testimonials";

// Forwards the public testimonial form to Mitudo Internals, where it waits for review.
export async function POST(request: NextRequest) {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ message: "Invalid request." }, { status: 400 });
	}

	try {
		const forwardedFor = request.headers.get("x-forwarded-for");
		const res = await fetch(`${INTERNALS_API_URL}/api/public/testimonials`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				...(forwardedFor ? { "X-Forwarded-For": forwardedFor } : {}),
			},
			body: JSON.stringify(body),
			cache: "no-store",
		});
		const data = await res.json().catch(() => ({}));
		return NextResponse.json(data, { status: res.status });
	} catch {
		return NextResponse.json(
			{ message: "We couldn't send your testimonial right now. Please try again shortly." },
			{ status: 502 },
		);
	}
}
