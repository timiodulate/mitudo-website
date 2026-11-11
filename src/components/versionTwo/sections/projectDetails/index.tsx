"use client";
import React from "react";
import NoProject from "./NoProject";
import ProjectDetails from "./ProjectDetail";
import type { CaseStudy } from "@/data/portfolio";

export const ProjectDetailsPage = ({ project }: { project: CaseStudy | null }) =>
	project ? <ProjectDetails project={project} /> : <NoProject />;
