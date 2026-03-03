"use client";
import { useParams } from "next/navigation";
import NoProject from "./NoProject";
import ProjectDetails from "./ProjectDetail";
import React, { use } from "react";

export const ProjectDetailsPage = ({
	projects,
}: {
	projects: Promise<any>;
}) => {
	const urlParams = useParams();
	const projectIdParam = urlParams?.id;
	const projectId = Array.isArray(projectIdParam)
		? projectIdParam[0]
		: projectIdParam || "dglides-apartments";
	const projectsData = use(projects);

	let project: any = null;

	if (Array.isArray(projectsData)) {
		project =
			projectsData.find(
				(item: any) =>
					item?.id === projectId ||
					item?.slug === projectId ||
					item?.projectId === projectId,
			) || null;
	} else if (projectsData && typeof projectsData === "object") {
		project = projectsData[projectId];
	}

	return (
		<>
			{!project ? <NoProject project={project} /> : <ProjectDetails project={project} />}
		</>
	);
};
