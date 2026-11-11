"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import { Box, Heading, Text } from "@chakra-ui/react";

/** The eyebrow, heading and intro line that open a section. */
export default function SectionIntro({
	eyebrow,
	title,
	intro,
	center = true,
	dark = false,
	mb = 14,
}: {
	eyebrow: string;
	title: React.ReactNode;
	intro?: React.ReactNode;
	center?: boolean;
	dark?: boolean;
	mb?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			<Box textAlign={center ? "center" : "left"} mb={mb}>
				<Text
					fontSize="sm"
					fontWeight="medium"
					letterSpacing="wider"
					textTransform="uppercase"
					color={dark ? "#00C2CB" : "#0077FF"}
				>
					{eyebrow}
				</Text>
				<Heading
					as="h2"
					fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
					fontWeight="bold"
					color={dark ? "white" : "#0D1B2A"}
					mt={4}
					fontFamily="poppins"
				>
					{title}
				</Heading>
				{intro && (
					<Text
						color={dark ? "whiteAlpha.800" : "#4A5568"}
						maxW="3xl"
						mx={center ? "auto" : undefined}
						mt={4}
					>
						{intro}
					</Text>
				)}
			</Box>
		</motion.div>
	);
}
