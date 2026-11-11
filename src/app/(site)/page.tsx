// "use client";
import React from "react";
import VersionTwoHome from "@/components/versionTwo/sections/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mitudo Agency | Business Registration, Branding, Websites & Custom Software in Nigeria",
	description:
		"Mitudo Agency handles the work behind Nigerian businesses, organisations and personal brands: CAC registration and filings, brand identity, websites and online stores, Google and social media, and custom software. Just starting or already running, you focus on delivering and selling.",
};

export default function Home() {
	return <VersionTwoHome />;
}
