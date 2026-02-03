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
	"royal-durim-press": ProjectDetailSchema;
	"3h-foundation": ProjectDetailSchema;
};
type ProjectTitlesSchema = keyof ProjectsSchema;

const projects = {
	"dglides-apartments": {
		title: "D'Glides Apartments",
		type: "Real Estate Business Website",
		shortDescription:
			"A professional real estate website built to help D'Glides Apartments present its properties clearly, build trust with potential clients, and make it easy for interested customers to make enquiries.",
		// image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
		image: "/assets/images/dGlides.png",
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
	"royal-durim-press": {
		title: "Royal Durim Press Investment Ltd",
		type: "Printing & Packaging Business Website",
		shortDescription:
			"A professionally designed business website created to help Royal Durim Press Investment Ltd present its services clearly, establish credibility, and make it easy for customers to request quotes and get in touch.",
		// image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
		image: "/assets/images/royalDurim.png",
		liveUrl: "https://durimpress.vercel.app/?utm_source=chatgpt.com",
		objectives: [
			"Establish a professional and trustworthy online presence",
			"Clearly communicate service offerings and product categories",
			"Show business strength and experience at a glance",
			"Make it simple for customers to contact the company and request quotes",
		],
		includes: [
			"A clean homepage that communicates business identity immediately",
			"Services section showing printing and packaging solutions",
			"Contact information that’s easy to find and use",
			"Clear navigation so visitors can explore services confidently",
			"Layout that works well on phones and computers alike",
		],
		whyItWorks: [
			"Builds trust and confidence in the brand",
			"Clarifies what the business offers",
			"Reduces hesitation by making contact simple",
			"Helps convert site visitors into real enquiries and customers",
		],
		role: [
			"Structured the content to highlight business strengths",
			"Designed the layout with a business-first mindset",
			"Built the website focused on clarity, credibility, and customer connection",
		],
		closingLine:
			"This project reflects the professional business websites I create for service-oriented companies and established brands.",
	},
	"3h-foundation": {
		title: "HeadHeartHand (3H) Foundation",
		type: "Nonprofit Organization Website",
		shortDescription:
			"A modern nonprofit website that helps the foundation communicate its mission, showcase community programs, and make it easy for visitors to engage, support, or donate.",
		// image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
		image: "/assets/images/hhhFoundation.png",
		liveUrl: "https://3hfoundation.netlify.app",
		objectives: [
			"Establish a credible and trustworthy online presence",
			"Clearly communicate its mission and core focus areas",
			"Showcase volunteer and support opportunities",
			"Make it easy for visitors to donate, connect, or get involved",
		],
		includes: [
			"A welcoming homepage that communicates purpose immediately",
			"Sections for program information and community impact",
			"Clear navigation so visitors can find ways to help or connect",
			"Prominent call‑to‑action areas for donating and volunteering",
			"Layout optimized for both mobile and desktop experiences",
		],
		whyItWorks: [
			"Build trust and credibility with supporters",
			"Share its values and programs clearly",
			"Encourage donations and community participation",
			"Provide a central hub for events and volunteer opportunities",
		],
		role: [
			"Organized the content to highlight mission and key programs",
			"Designed a clean layout with clear calls to action",
			"Built the site to focus on clarity, trust, and engagement",
		],
		closingLine:
			"This project reflects the professional organization websites I build for mission‑driven organizations and service‑focused businesses.",
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
