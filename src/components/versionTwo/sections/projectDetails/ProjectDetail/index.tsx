"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import ProjectImage from "./ProjectImage";
import BusinessObjective from "./BusinessObjective";
import WhatsIncluded from "./WhatsIncluded";
import WhyIWorks from "./WhyItWorks";
import Closing from "./Closing";

import type { CaseStudy } from "@/data/portfolio";

export default function ProjectDetails({ project }: { project: CaseStudy }) {
	return (
		<Box as="div">
			{/* Hero Section */}
			<Hero project={project} />

			{/* Project Image */}
			{project.imageUrl && <ProjectImage project={project} />}

			{/* Business Objectives */}
			{project.objectives.length > 0 && <BusinessObjective project={project} />}

			{/* What's Included */}
			{project.includes.length > 0 && <WhatsIncluded project={project} />}

			{/* Why It Works */}
			{project.whyItWorks.length > 0 && <WhyIWorks project={project} />}

			{/* Closing */}
			<Closing project={project} />
		</Box>
	);
}
