"use client";

import React, { useEffect } from "react";
import NoProject from "@/components/versionTwo/sections/projectDetails/NoProject";
import ProjectDetails from "@/components/versionTwo/sections/projectDetails/ProjectDetail";
import { useParams } from "next/navigation";
import Navbar from "@/components/versionTwo/layouts/Header/Navbar";
import Footer from "@/components/versionTwo/layouts/Footer";
import { Box } from "@chakra-ui/react";
import { fetchProjects } from "@/services/projects";
import LoadingDetail from "@/components/versionTwo/sections/projectDetails/Loading";

type ProjectDetailSchema = {
	title: string;
	type: string;
	shortDescription: string;
	image: string;
	liveUrl: string;
	objectives: string[];
	includes: string[];
	whyItWorks: string[];
	role: string[];
	closingLine: string;
};

type ProjectsSchema = {
	"dglides-apartments": ProjectDetailSchema;
	"royal-durim-press": ProjectDetailSchema;
	"3h-foundation": ProjectDetailSchema;
};
type ProjectTitlesSchema = keyof ProjectsSchema;

export default function ProjectDetailsPage() {
	const urlParams: any = useParams();
	const projectId: ProjectTitlesSchema =
		urlParams["id"] || "dglides-apartments";

	const [project, setProject] = React.useState<any>(null);
	const [isLoading, setLoading] = React.useState(true);
	const [error, setError] = React.useState<string | null>(null);

	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = async () => {
		setLoading(true);
		try {
			const fetchedProjects: any = await fetchProjects("obj");

			const project: any = fetchedProjects?.data[projectId];
			setProject(project);
		} catch (err) {
			setError("Failed to fetch projects");
		} finally {
			setLoading(false);
		}
	};

	if (isLoading) {
		return <LoadingDetail />;
	}

	return (
		<Box className="min-h-screen bg-[#F5F7FA] font-inter">
			<Navbar />

			{!project || error ? (
				<NoProject project={project} />
			) : (
				<ProjectDetails project={project} />
			)}

			{/* Footer */}
			<Footer />
		</Box>
	);
}
