"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import PageHero from "@/components/versionTwo/shared/PageHero";

export default function HeroSection() {
	return (
		<PageHero
			eyebrow="Our Work"
			title={
				<>
					Work we&apos;ve
					<br />
					<Box as="span" color="#00C2CB">
						delivered.
					</Box>
				</>
			}
			intro="Real client projects and concept designs. Filter by brand or by service to find work like yours."
		/>
	);
}
