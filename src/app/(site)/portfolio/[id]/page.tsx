import React, { Suspense } from "react";
import Navbar from "@/components/versionTwo/layouts/Header/Navbar";
import Footer from "@/components/versionTwo/layouts/Footer";
import { Box } from "@chakra-ui/react";
import { fetchProjects } from "@/services/projects";
import { ProjectDetailsPage as ProjectDetailsSection } from "@/components/versionTwo/sections/projectDetails";
import HydrateFallback from "./loading";

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
	const projects = fetchProjects("obj");

	// console.log(projects);

	// useEffect(() => {
	// 	projects.then((data) => {
	// 		// setProject(data?.[projectId]);
	// 		console.log(data);
	// 		setLoading(false);
	// 	});
	// }, [projectId]);

	return (
		<Box className="min-h-screen bg-[#F5F7FA] font-inter">
			<Navbar bold />
			{/* 
			<div className="flex">
				<p className="text-black flex justify-center items-center bg-amber-500">
					Brosososososososso
				</p> */}

			<Suspense fallback={<HydrateFallback />}>
				<ProjectDetailsSection projects={projects} />
			</Suspense>
			{/* </div> */}
			{/* Footer */}
			<Footer />
		</Box>
	);
}
