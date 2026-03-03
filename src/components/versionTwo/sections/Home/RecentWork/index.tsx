import React from "react";

import { Box, Container, Link as ChakraLink } from "@chakra-ui/react";
import { fetchProjects } from "@/services/projects";
import { ProjectsGrid } from "./ProjectsGrid";
import { RecentWorkHeader } from "./Header";

export default function RecentWork() {
	const projects = fetchProjects();
	// const projectsData = fetchProjects();
	// const projects = Promise.resolve(projectsData).then((data) =>
	// 	Array.isArray(data) ? data : data.projects || [],
	// );

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
		<Box as="section" id="work" py={{ base: 20, md: 28 }} px={6}>
			<Container maxW="6xl">
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
