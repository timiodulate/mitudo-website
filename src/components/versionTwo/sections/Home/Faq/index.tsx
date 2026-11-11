"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { generalFaqs } from "@/data/services";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";
import SectionIntro from "@/components/versionTwo/shared/SectionIntro";
import FaqList from "@/components/versionTwo/shared/FaqList";

export default function Faq() {
	return (
		<Box as="section" id="faq" py={{ base: 20, md: 28 }} bg="white">
			<SectionContainer narrow="4xl">
				<SectionIntro eyebrow="FAQ" title="Questions people ask before they start" mb={10} />
				<FaqList faqs={generalFaqs} itemBg="#F5F7FA" />
			</SectionContainer>
		</Box>
	);
}
