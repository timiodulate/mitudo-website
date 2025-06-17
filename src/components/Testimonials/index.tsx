"use client";
import { SimpleGrid, Box, Container } from "@chakra-ui/react";
import { TestimonyCard } from "./TestimonyCard";
import SectionTitle from "../shared/SectionTitle";

export const Testimonials = () => {
	const testimonies = [
		{
			message:
				"“Seamless experience—our app launched on time and exceeded expectations.”",

			name: "C. Ogunlana",
			title: "Visioneer",
		},
		{
			message:
				"“Our new website brought in more leads in just one month.”",

			name: "B. Adeyemi",
			title: "Entrepreneur",
		},
		{
			message: "“Professional, attentive, and results-driven team.”",

			name: "I. Oyeleke",
			title: "Business Owner",
		},
	];

	return (
		<Box as="section" id="services">
			<Container pb={{ base: 12, md: 20 }}>
				<SectionTitle title="What Clients Say" />

				<SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
					{testimonies.map((testimony, index) => (
						<TestimonyCard
							key={index}
							index={index}
							{...testimony}
						/>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};
