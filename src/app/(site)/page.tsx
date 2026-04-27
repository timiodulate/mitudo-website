// "use client";
import React from "react";
import VersionTwoHome from "@/components/versionTwo/sections/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mitudo Agency | Set up right. Look Legit. Get found by your customer.",
	description:
		"Mitudo Agency is a Nigeria-based tech solutions agency that helps businesses look credible and get found online — from brand identity and registration to websites, SEO, and professional social media presence.",
};

export default function Home() {
	return <VersionTwoHome />;
}
