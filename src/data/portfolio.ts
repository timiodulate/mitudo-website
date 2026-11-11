import { fallbackProjects } from "@/data";
import { getService } from "@/data/services";

/** A portfolio item, as the portfolio page shows and filters it. */
export interface PortfolioProject {
	id: string;
	title: string;
	/** The brand or client it was for; concept work is grouped under CONCEPT_CLIENT. */
	client: string;
	/** Industry, e.g. "Real Estate". */
	type: string;
	description: string;
	features: string[];
	imageUrl: string;
	liveUrl: string | null;
	/** Service slugs from the catalog (src/data/services.ts). */
	services: string[];
}

export const CONCEPT_CLIENT = "Concept designs";

/**
 * Brand and services for each project, by id. Add a project's services here
 * (catalog slugs) so it shows up under the right filters.
 */
const projectDetails: Record<string, { client: string; services: string[] }> = {
	"dglides-apartments": { client: "D'Glides Apartments", services: ["business-website"] },
	"school-training-center": { client: CONCEPT_CLIENT, services: ["business-website"] },
	"logistics-real-estate": { client: CONCEPT_CLIENT, services: ["business-website"] },
};

/** Turns a project from the projects API (or the fallback list) into a PortfolioProject. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toPortfolioProject(raw: any): PortfolioProject {
	const known = projectDetails[raw.id];
	const services: string[] = (raw.services ?? known?.services ?? []).filter((slug: string) =>
		Boolean(getService(slug)),
	);
	return {
		id: String(raw.id),
		title: raw.title ?? "",
		client: raw.client ?? known?.client ?? (raw.liveUrl ? raw.title : CONCEPT_CLIENT),
		type: raw.type ?? "",
		description: raw.description ?? raw.shortDescription ?? "",
		features: raw.features ?? raw.highlights ?? [],
		imageUrl: raw.imageUrl ?? raw.image ?? "",
		liveUrl: raw.liveUrl ?? null,
		services,
	};
}

export const portfolioFallback: PortfolioProject[] = fallbackProjects.map(toPortfolioProject);

/** What a case study page shows. */
export interface CaseStudy {
	id: string;
	title: string;
	type: string;
	shortDescription: string;
	imageUrl: string;
	liveUrl: string | null;
	objectives: string[];
	includes: string[];
	whyItWorks: string[];
	closingLine: string;
}

/**
 * Case studies kept on the site, used when the projects API has nothing for an id
 * (or can't be reached). Keep the ids in step with fallbackProjects.
 */
const localCaseStudies: Record<string, Omit<CaseStudy, "id" | "title" | "type" | "imageUrl" | "liveUrl">> = {
	"dglides-apartments": {
		shortDescription:
			"A professional real estate website built to help D'Glides Apartments present its properties clearly, build trust with potential clients, and make enquiries easy.",
		objectives: [
			"Present the apartments clearly, with photos and details in one place",
			"Look established enough that a first-time visitor trusts the business",
			"Make it easy to enquire, from any phone",
		],
		includes: [
			"Responsive design that works on phone, tablet and desktop",
			"Branding carried through the whole site",
			"Enquiry and contact options on every page",
		],
		whyItWorks: [
			"Visitors see the properties and the business before they're asked to get in touch",
			"A consistent, professional look answers \"is this real?\" without a word",
			"Enquiring takes one tap, so interest turns into conversations",
		],
		closingLine: "Want a website that does the same for your business?",
	},
	"school-training-center": {
		shortDescription:
			"A concept website for schools and training centres, built to present programmes clearly and make it easy for parents and students to find information and enrol.",
		objectives: [
			"Present programmes, fees and schedules clearly",
			"Answer parents' and students' common questions before they call",
			"Turn interest into enrolment enquiries",
		],
		includes: [
			"Homepage, About and Programmes pages",
			"Simple navigation for parents and students",
			"Enrolment enquiry form",
			"A layout that's easy to keep up to date",
		],
		whyItWorks: [
			"Parents find what they need in a few taps",
			"A professional site builds confidence before the first visit",
			"Enquiries arrive with the details you need to reply",
		],
		closingLine: "Run a school or training centre? Let's build yours.",
	},
	"logistics-real-estate": {
		shortDescription:
			"A concept website for logistics and real estate businesses, built to establish credibility quickly and lead visitors to get in touch.",
		objectives: [
			"Say clearly what the business does and where it operates",
			"Build trust with new customers before the first conversation",
			"Lead every visitor to a clear next step",
		],
		includes: [
			"A bold homepage with clear positioning",
			"A services section with a page for each service",
			"Trust-building elements: reviews, credentials and contact details",
			"Calls to action on every page",
		],
		whyItWorks: [
			"Visitors understand the offer within seconds",
			"Clear paths take each kind of customer to what they need",
			"Credibility comes first, so enquiries come from people ready to buy",
		],
		closingLine: "Want a website that brings in customers like this?",
	},
};

/** Turns a project (from the API or the fallback list) into a case study, with every list present. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toCaseStudy(raw: any): CaseStudy {
	const local = localCaseStudies[raw.id];
	const list = (value: unknown, fallback: string[] = []) =>
		Array.isArray(value) && value.length > 0 ? (value as string[]) : fallback;
	return {
		id: String(raw.id),
		title: raw.title ?? "",
		type: raw.type ?? "",
		shortDescription: raw.shortDescription ?? local?.shortDescription ?? raw.description ?? "",
		imageUrl: raw.imageUrl ?? raw.image ?? "",
		liveUrl: raw.liveUrl ?? null,
		objectives: list(raw.objectives, local?.objectives),
		includes: list(raw.includes, local?.includes ?? raw.features),
		whyItWorks: list(raw.whyItWorks, local?.whyItWorks),
		closingLine: raw.closingLine ?? local?.closingLine ?? "Want something like this for your business?",
	};
}

export const getLocalCaseStudy = (id: string): CaseStudy | null => {
	const project = fallbackProjects.find((p) => p.id === id);
	return project ? toCaseStudy(project) : null;
};
