import { NextRequest, NextResponse } from "next/server";
import type { Article } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER DATA
// Replace this with your real database calls (Prisma, Supabase, etc.)
// This keeps the shape identical to what Base44 was returning so the
// front-end components work without any further changes.
// ─────────────────────────────────────────────────────────────────────────────
const PLACEHOLDER_ARTICLES: Article[] = [
	{
		id: "1",
		title: "Understanding Corporate Governance in Nigeria: A Foundational Guide",
		excerpt:
			"Corporate governance frameworks in Nigeria are evolving. Here is what every business owner needs to understand before making strategic decisions.",
		cover_image:
			"https://plus.unsplash.com/premium_photo-1742842721075-55df896c09eb?w=600&q=80",
		category: "Corporate Law",
		created_date: new Date(
			Date.now() - 7 * 24 * 60 * 60 * 1000,
		).toISOString(),
		published: true,
		slug: "understanding-corporate-governance-nigeria",
	},
	{
		id: "2",
		title: "CAC Registration in 2025: What Has Changed and What to Expect",
		excerpt:
			"The Corporate Affairs Commission has updated its registration procedures. Genesis Legal walks you through every step of the new process.",
		cover_image:
			"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
		category: "Business Registration",
		created_date: new Date(
			Date.now() - 14 * 24 * 60 * 60 * 1000,
		).toISOString(),
		published: true,
		slug: "cac-registration-2025-changes",
	},
	{
		id: "3",
		title: "Contract Drafting Fundamentals: Protecting Your Business Interests",
		excerpt:
			"A well-drafted contract is your first line of legal defence. We examine the clauses that matter most in commercial agreements.",
		cover_image:
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
		category: "Contract Law",
		created_date: new Date(
			Date.now() - 21 * 24 * 60 * 60 * 1000,
		).toISOString(),
		published: true,
		slug: "contract-drafting-fundamentals",
	},
];

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);

	const published = searchParams.get("published");
	const limit = searchParams.get("limit");
	const sort = searchParams.get("sort");

	let articles = [...PLACEHOLDER_ARTICLES];

	// Filter by published status
	if (published === "true") {
		articles = articles.filter((a) => a.published);
	}

	// Sort — supports '-created_date' (desc) and 'created_date' (asc)
	if (sort) {
		const desc = sort.startsWith("-");
		const field = sort.replace("-", "") as keyof Article;
		articles.sort((a, b) => {
			const aVal = String(a[field] ?? "");
			const bVal = String(b[field] ?? "");
			return desc ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
		});
	}

	// Limit
	if (limit) {
		articles = articles.slice(0, parseInt(limit, 10));
	}

	return NextResponse.json(articles);
}
