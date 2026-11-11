"use client";
import React from "react";
import NextLink from "next/link";
import { Box, Flex, Grid, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Navbar from "../../layouts/Header/Navbar";
import Footer from "../../layouts/Footer";
import PageHero from "../../shared/PageHero";
import ContactCTA from "../../shared/ContactCTA";
import ServiceCard from "./ServiceCard";
import { getCategoriesByStage, getServicesByCategory, services, stages } from "@/data/services";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";

const packages = services.filter((service) => service.kind === "package");

const chip = {
	px: 3,
	py: 1.5,
	borderRadius: "full",
	border: "1px solid",
	borderColor: "slate.200",
	fontSize: "sm",
	color: "#0D1B2A",
	bg: "#F5F7FA",
	_hover: { borderColor: "#0077FF", color: "#0077FF", textDecoration: "none" },
};

export default function ServicesView() {
	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Navbar />

			<PageHero
				eyebrow="Services"
				title="What we do for you"
				intro="Everything your business needs to set up right, stand out and run smoothly. Buy any service on its own, or take a package and save. Every engagement starts with Brand Documentation, free."
			>
				<Flex direction="column" gap={3} mt={8}>
					<Flex wrap="wrap" gap={2} align="center">
						<ChakraLink as={NextLink} href="#packages" {...chip}>
							Packages
						</ChakraLink>
						{getCategoriesByStage("start").map((category) => (
							<ChakraLink key={category.id} as={NextLink} href={`#${category.id}`} {...chip}>
								{category.title}
							</ChakraLink>
						))}
					</Flex>
					{stages.slice(1).map((stage) => (
						<Flex key={stage.id} wrap="wrap" gap={2} align="center">
							<Text fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" color="#4A5568" minW={{ md: "110px" }}>
								{stage.title}
							</Text>
							{getCategoriesByStage(stage.id).map((category) => (
								<ChakraLink key={category.id} as={NextLink} href={`#${category.id}`} {...chip}>
									{category.title}
								</ChakraLink>
							))}
						</Flex>
					))}
				</Flex>
			</PageHero>

			{/* Packages first */}
			<Box as="section" id="packages" scrollMarginTop="6rem" py={{ base: 12, md: 16 }} bg="white">
				<SectionContainer>
					<Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} fontFamily="poppins" color="#0D1B2A">
						Packages
					</Heading>
					<Text color="#4A5568" mt={2} mb={8}>
						Related services together, for less than buying them one by one. A
						package counts as one service toward the bundle discount.
					</Text>
					<Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={5}>
						{packages.map((service) => (
							<ServiceCard key={service.slug} service={service} bg="#F5F7FA" />
						))}
					</Grid>
				</SectionContainer>
			</Box>

			{stages.map((stage) => (
				<React.Fragment key={stage.id}>
					{stage.id !== "start" && (
						<Box bg="#0D1B2A" py={{ base: 8, md: 10 }}>
							<SectionContainer>
								<Text fontSize="sm" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" color="#00C2CB">
									Stage {stages.indexOf(stage)}
								</Text>
								<Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontFamily="poppins" color="white" mt={1}>
									{stage.title}
								</Heading>
								<Text color="whiteAlpha.800" mt={2}>
									{stage.blurb}
								</Text>
							</SectionContainer>
						</Box>
					)}
					{getCategoriesByStage(stage.id).map((category, index) => (
						<Box
							key={category.id}
							as="section"
							id={category.id}
							scrollMarginTop="6rem"
							py={{ base: 12, md: 16 }}
							bg={index % 2 === 0 ? "#F5F7FA" : "white"}
						>
							<SectionContainer>
								<Heading as={stage.id === "start" ? "h2" : "h3"} fontSize={{ base: "xl", md: "2xl" }} fontFamily="poppins" color="#0D1B2A">
									{category.title}
								</Heading>
								<Text color="#4A5568" mt={2} mb={8}>
									{category.blurb}
								</Text>
								<Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={5}>
									{getServicesByCategory(category.id)
										.filter((service) => service.kind !== "package")
										.map((service) => (
											<ServiceCard key={service.slug} service={service} bg={index % 2 === 0 ? "white" : "#F5F7FA"} />
										))}
								</Grid>
							</SectionContainer>
						</Box>
					))}
				</React.Fragment>
			))}

			<Box as="section" py={10} bg="white" borderTop="1px solid" borderColor="slate.100">
				<SectionContainer narrow="4xl" center>
					<Text color="#4A5568" fontSize="sm">
						<Text as="span" fontWeight="semibold" color="#0D1B2A">
							Bundle & save:
						</Text>{" "}
						buy 3 or more services together and get 10 to 15% off. A package counts
						as one service.
					</Text>
				</SectionContainer>
			</Box>

			<ContactCTA
				title="Not sure what you need?"
				intro="Tell us about your business and we'll recommend where to start, or begin with an Online Presence Audit."
			/>

			<Footer />
		</Box>
	);
}
