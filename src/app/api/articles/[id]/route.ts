import { NextRequest, NextResponse } from "next/server";

// Re-import placeholder — in production, query your DB here
const PLACEHOLDER_ARTICLES = [
	{
		id: "1",
		title: "Understanding Corporate Governance in Nigeria: A Foundational Guide",
		excerpt: "Corporate governance frameworks in Nigeria are evolving.",
		cover_image:
			"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
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
			"The Corporate Affairs Commission has updated its registration procedures.",
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
		excerpt: "A well-drafted contract is your first line of legal defence.",
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

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const article = PLACEHOLDER_ARTICLES.find((a) => a.id === id);

	console.log("article", article);

	if (!article) {
		return NextResponse.json(
			{ error: "Article not found" },
			{ status: 404 },
		);
	}

	return NextResponse.json(article);
}
