"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import ProjectImage from "./ProjectImage";
import BusinessObjective from "./BusinessObjective";
import WhatsIncluded from "./WhatsIncluded";
import WhyIWorks from "./WhyItWorks";
import Closing from "./Closing";

export default function ProjectDetails({ project }: { project: any }) {
	return (
		<Box as="div">
			{/* Hero Section */}
			<Hero project={project} />

			{/* Project Image */}
			<ProjectImage project={project} />

			{/* Business Objectives */}
			<BusinessObjective project={project} />

			{/* What's Included */}
			<WhatsIncluded project={project} />

			{/* Why It Works */}
			<WhyIWorks project={project} />

			{/* Closing */}
			<Closing project={project} />
		</Box>
	);
}
