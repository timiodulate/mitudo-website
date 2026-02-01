"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import Navbar from "../../layouts/Header/Navbar";
import RecentWork from "./RecentWork";
import WhatsIncluded from "./WhatsIncluded";
import Footer from "../../layouts/Footer";
import Pricing from "./Pricing";
import WebsiteRefresh from "./WebsiteRefresh";
import Maintenance from "./Maintenance";
import Contact from "./Contact";

export default function VersionTwoHome() {
	return (
		<Box minH="screen" bg="#F5F7FA" fontFamily="inter">
			<Navbar />

			{/* Hero Section */}
			<Hero />

			{/* Recent Work Section */}
			<RecentWork />

			{/* What's Included Section */}
			<WhatsIncluded />

			{/* Pricing Section */}
			<Pricing />

			{/* Website Refresh Section */}
			<WebsiteRefresh />

			{/* Maintenance Section */}
			<Maintenance />

			{/* Contact Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</Box>
	);
}
