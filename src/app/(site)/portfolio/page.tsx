import React from "react";
import { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/versionTwo/layouts/Header/Navbar";
import Footer from "@/components/versionTwo/layouts/Footer";
import { fetchProjects } from "@/services/projects";
import { portfolioFallback, toPortfolioProject, type PortfolioProject } from "@/data/portfolio";
import HeroSection from "@/components/versionTwo/sections/portfolio/Hero";
import ServicesSection from "@/components/versionTwo/sections/portfolio/Services";
import CTA from "@/components/versionTwo/sections/portfolio/CTA";
import ProjectsSection from "@/components/versionTwo/sections/portfolio/Projects";

export const metadata: Metadata = {
	title: "Our Work | Mitudo Agency",
	description:
		"Websites and brands Mitudo Agency has built for Nigerian businesses, and concept designs showing what yours could look like.",
};

async function getProjects(): Promise<PortfolioProject[]> {
	try {
		const result = await fetchProjects();
		const list = Array.isArray(result) ? result : result?.projects;
		return Array.isArray(list) && list.length > 0 ? list.map(toPortfolioProject) : portfolioFallback;
	} catch {
		return portfolioFallback;
	}
}

export default async function PortfolioPage() {
	const projects = await getProjects();

	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Navbar />
			<HeroSection />
			<ProjectsSection projects={projects} />
			<ServicesSection />
			<CTA />
			<Footer />
		</Box>
	);
}
