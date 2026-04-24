"use client";
import React from "react";
import {
	Box,
	Button,
	Container,
	Link as ChakraLink,
	Stack,
	Text,
} from "@chakra-ui/react";
import { ProjectsGrid2 } from "../Home/RecentWork/ProjectsGrid";

export default function ProjectsSection({
	projects,
}: {
	projects: Promise<any[] | any>;
}) {
	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Box as="section" py={{ base: 16, md: 24 }} px={6}>
				<Container maxW="7xl">
					<ProjectsGrid2 projects={projects} />

					{/* <motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<Text
							color="slate.500"
							fontSize="sm"
							textAlign="center"
							mt={10}
							fontStyle="italic"
						>
							Some projects are concept designs to demonstrate
							what your website can look like. More case studies
							coming soon.
						</Text>
					</motion.p> */}
				</Container>
			</Box>
		</Box>
	);
}
