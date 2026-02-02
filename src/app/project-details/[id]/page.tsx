"use client";

import React from "react";
import NoProject from "@/components/versionTwo/sections/projectDetails/NoProject";
import ProjectDetails from "@/components/versionTwo/sections/projectDetails/ProjectDetail";
import { useParams } from "next/navigation";
import Navbar from "@/components/versionTwo/layouts/Header/Navbar";
import Footer from "@/components/versionTwo/layouts/Footer";
import { Box } from "@chakra-ui/react";

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
	"school-training-center": ProjectDetailSchema;
	"logistics-real-estate": ProjectDetailSchema;
};
type ProjectTitlesSchema = keyof ProjectsSchema;

const projects = {
	"dglides-apartments": {
		title: "D'Glides Apartments",
		type: "Real Estate Business Website",
		shortDescription:
			"A professional real estate website built to help D'Glides Apartments present its properties clearly, build trust with potential clients, and make it easy for interested customers to make enquiries.",
		image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
		liveUrl: "https://dglidestcl.com",
		objectives: [
			"Establish a credible and professional online presence",
			"Clearly showcase available apartments",
			"Build confidence with potential clients before first contact",
			"Increase enquiries through simple and direct contact options",
		],
		includes: [
			"A clear homepage that explains the business immediately",
			"An apartment listing section to showcase available properties",
			"An About section to build trust and legitimacy",
			"A contact page with direct enquiry options",
			"A clean layout that works well on mobile and desktop",
		],
		whyItWorks: [
			"Appear established and trustworthy",
			"Attract serious clients instead of casual browsers",
			"Communicate value without lengthy explanations",
			"Make it easy for potential clients to take the next step",
		],
		role: [
			"Planned the website structure around the business goals",
			"Designed a clean, professional layout",
			"Built the website to focus on clarity, trust, and enquiries",
		],
		closingLine:
			"This project reflects the type of professional business websites I build for real estate and service-based businesses.",
	},
	"school-training-center": {
		title: "School / Training Center",
		type: "Business Website",
		shortDescription:
			"A professional website designed for educational institutions to present their programs clearly and make it easy for parents and students to find information.",
		image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
		liveUrl: null,
		objectives: [
			"Create a professional online presence for the institution",
			"Showcase programs and courses clearly",
			"Make navigation easy for parents and students",
			"Encourage enrollment enquiries",
		],
		includes: [
			"Homepage with clear value proposition",
			"About page building trust and credibility",
			"Programs/courses section with details",
			"Easy-to-use contact and enquiry forms",
			"Mobile-friendly responsive design",
		],
		whyItWorks: [
			"Builds trust with parents and prospective students",
			"Presents information in an organized manner",
			"Professional appearance reflects quality of education",
			"Simple navigation reduces confusion",
		],
		role: [
			"Designed the website structure for educational context",
			"Created a clean, trustworthy layout",
			"Focused on ease of navigation and clarity",
		],
		closingLine:
			"This concept demonstrates how I approach websites for schools and training centers.",
	},
	"logistics-real-estate": {
		title: "Logistics / Real Estate",
		type: "Concept Design",
		shortDescription:
			"A modern business website concept designed to establish credibility and drive customer action for logistics and real estate businesses.",
		image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
		liveUrl: null,
		objectives: [
			"Create a strong first impression",
			"Establish business credibility quickly",
			"Guide visitors toward taking action",
			"Present services in a clear, professional manner",
		],
		includes: [
			"Bold homepage with clear business positioning",
			"Services section with compelling descriptions",
			"Trust-building elements and testimonials",
			"Strong call-to-action throughout",
			"Responsive design for all devices",
		],
		whyItWorks: [
			"Modern design builds immediate trust",
			"Clear messaging reduces confusion",
			"Strategic CTAs increase conversions",
			"Professional look attracts serious clients",
		],
		role: [
			"Created the concept design and layout",
			"Focused on credibility and conversion",
			"Designed for modern business standards",
		],
		closingLine:
			"This concept showcases the type of premium business websites I create for service-based companies.",
	},
};

export default function ProjectDetailsPage() {
	const urlParams: any = useParams();
	const projectId: ProjectTitlesSchema =
		urlParams["id"] || "dglides-apartments";
	const project: any = projects[projectId];

	return (
		<Box className="min-h-screen bg-[#F5F7FA] font-inter">
			<Navbar />

			{!project ? (
				<NoProject project={project} />
			) : (
				<ProjectDetails project={project} />
			)}

			{/* Footer */}
			<Footer />
		</Box>
	);
}
