import React from "react";
import { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/versionTwo/layouts/Header/Navbar";
import Footer from "@/components/versionTwo/layouts/Footer";
import { fetchProjects } from "@/services/projects";
import { getLocalCaseStudy, toCaseStudy, type CaseStudy } from "@/data/portfolio";
import { ProjectDetailsPage as ProjectDetailsSection } from "@/components/versionTwo/sections/projectDetails";

type Params = Promise<{ id: string }>;

/** The case study from the projects API, or the one kept on the site if the API can't help. */
async function getCaseStudy(id: string): Promise<CaseStudy | null> {
	try {
		const data = await fetchProjects("obj");
		const fromApi = Array.isArray(data)
			? data.find((item) => item?.id === id || item?.slug === id || item?.projectId === id)
			: (data as Record<string, unknown>)?.[id];
		if (fromApi && typeof fromApi === "object") return toCaseStudy({ id, ...fromApi });
	} catch {
		// The API is down or unreachable: fall through to the site's own copy.
	}
	return getLocalCaseStudy(id);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const { id } = await params;
	const project = await getCaseStudy(id);
	return project
		? { title: `${project.title} | Our Work | Mitudo Agency`, description: project.shortDescription }
		: { title: "Project not found | Mitudo Agency" };
}

export default async function ProjectDetailsPage({ params }: { params: Params }) {
	const { id } = await params;
	const project = await getCaseStudy(id);

	return (
		<Box className="min-h-screen bg-[#F5F7FA] font-inter">
			<Navbar bold />
			<ProjectDetailsSection project={project} />
			<Footer />
		</Box>
	);
}
