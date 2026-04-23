import React from "react";

import { Box, Container } from "@chakra-ui/react";
import { fetchProjects } from "@/services/projects";
import { ProjectsGrid } from "./ProjectsGrid";
import { RecentWorkHeader } from "./Header";

const fallbackProjects = [
	{
		id: "dglides-apartments",
		title: "D'Glides Apartments",
		type: "Real Estate",
		tag: "Live Website",
		tagColor: "#10B981",
		imageUrl:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
		liveUrl: "https://dglidestcl.com",
		features: ["Responsive design", "Modern branding", "Lead capture"],
	},
	{
		id: "school-training-center",
		title: "School / Training Center",
		type: "Education",
		tag: "Concept",
		tagColor: "#0077FF",
		imageUrl:
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
		liveUrl: null,
		features: ["Professional layout", "Service showcase", "Easy updates"],
	},
	{
		id: "logistics-real-estate",
		title: "Logistics / Real Estate",
		type: "Business",
		tag: "Concept",
		tagColor: "#0077FF",
		imageUrl:
			"https://images.unsplash.com/photo-1586528116493-da5e30be6e99?w=800&q=80",
		liveUrl: null,
		features: [
			"Business-first design",
			"Clear service paths",
			"Customer trust",
		],
	},
];

export default function RecentWork() {
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

	// const [projects, setProjects] = React.useState<any>([]);
	// const [loading, setLoading] = React.useState(false);
	// const [error, setError] = React.useState<string | null>(null);

	// useEffect(() => {
	// 	// getProjects();

	// 	let cancelled = false;

	// 	(async () => {
	// 		setLoading(true);
	// 		try {
	// 			const data = await fetchProjects();
	// 			if (!cancelled) setProjects(data);
	// 		} catch {
	// 			if (!cancelled) setError("Failed to fetch projects");
	// 		} finally {
	// 			if (!cancelled) setLoading(false);
	// 		}
	// 	})();

	// 	return () => {
	// 		cancelled = true;
	// 	};
	// }, []);

	// const getProjects = async () => {
	// 	setLoading(true);
	// 	try {
	// 		const fetchedProject: any = await fetchProjects();

	// 		setProjects(fetchedProject.data);
	// 	} catch (err) {
	// 		setError("Failed to fetch projects");
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<Box as="section" id="work" py={{ base: 20, md: 28 }}>
			<Container maxW="6xl" px={{ base: 6, md: 8 }}>
				{/* Header Section */}
				<RecentWorkHeader />

				{/* Projects Grid */}

				<ProjectsGrid projects={projects} />

				{/* Note */}
				{/* <motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<Text
						textAlign="center"
						color={"slate.500"}
						fontSize="sm"
						mt={10}
						fontStyle="italic"
					>
						Note: Some projects are concept redesigns created to
						demonstrate what your business website can look like.
					</Text>
				</motion.div> */}
			</Container>
		</Box>
	);
}
