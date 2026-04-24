import React from "react";
import {
	Box,
	Button,
	Container,
	Link as ChakraLink,
	Stack,
	Text,
} from "@chakra-ui/react";
import Navbar from "@/components/versionTwo/layouts/Header/Navbar";
import Footer from "@/components/versionTwo/layouts/Footer";
import { fetchProjects } from "@/services/projects";
import { fallbackProjects } from "@/data";
import HeroSection from "@/components/versionTwo/sections/portfolio/Hero";
import ServicesSection from "@/components/versionTwo/sections/portfolio/Services";
import CTA from "@/components/versionTwo/sections/portfolio/CTA";
import ProjectsSection from "@/components/versionTwo/sections/portfolio/Projects";

export default function PortfolioPage() {
	const projects = (async () => {
		try {
			const result = await fetchProjects();
			if (Array.isArray(result)) return result;
			if (result?.projects && Array.isArray(result.projects))
				return result.projects;
			return fallbackProjects;
		} catch {
			return fallbackProjects;
		}
	})();

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
