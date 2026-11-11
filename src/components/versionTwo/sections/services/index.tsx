"use client";
import React from "react";
import NextLink from "next/link";
import { Box, Container, Flex, Grid, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Navbar from "../../layouts/Header/Navbar";
import Footer from "../../layouts/Footer";
import PageHero from "../../shared/PageHero";
import ContactCTA from "../../shared/ContactCTA";
import ServiceCard from "./ServiceCard";
import { serviceCategories, getServicesByCategory } from "@/data/services";

export default function ServicesView() {
	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Navbar />

			<PageHero
				eyebrow="Services"
				title="What we do for you"
				intro="Everything a business needs to be set up right, look legit and get found. Buy any service on its own, or take a package and save. Every engagement starts with Brand Documentation, free."
			>
				<Flex wrap="wrap" gap={2} mt={8}>
					{serviceCategories.map((category) => (
						<ChakraLink
							key={category.id}
							as={NextLink}
							href={`#${category.id}`}
							px={3}
							py={1.5}
							borderRadius="full"
							border="1px solid"
							borderColor="slate.200"
							fontSize="sm"
							color="#0D1B2A"
							bg="#F5F7FA"
							_hover={{ borderColor: "#0077FF", color: "#0077FF", textDecoration: "none" }}
						>
							{category.title}
						</ChakraLink>
					))}
				</Flex>
			</PageHero>

			{serviceCategories.map((category, index) => (
				<Box
					key={category.id}
					as="section"
					id={category.id}
					scrollMarginTop="6rem"
					py={{ base: 12, md: 16 }}
					bg={index % 2 === 0 ? "#F5F7FA" : "white"}
				>
					<Container maxW="6xl" px={{ base: 6, md: 8 }}>
						<Heading
							as="h2"
							fontSize={{ base: "xl", md: "2xl" }}
							fontFamily="poppins"
							color="#0D1B2A"
						>
							{category.title}
						</Heading>
						<Text color="#4A5568" mt={2} mb={8}>
							{category.blurb}
						</Text>
						<Grid
							templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
							gap={5}
						>
							{getServicesByCategory(category.id).map((service) => (
								<ServiceCard
									key={service.slug}
									service={service}
									bg={index % 2 === 0 ? "white" : "#F5F7FA"}
								/>
							))}
						</Grid>
					</Container>
				</Box>
			))}

			<Box as="section" py={10} bg="white" borderTop="1px solid" borderColor="slate.100">
				<Container maxW="4xl" px={{ base: 6, md: 8 }} textAlign="center">
					<Text color="#4A5568" fontSize="sm">
						<Text as="span" fontWeight="semibold" color="#0D1B2A">
							Bundle & Save:
						</Text>{" "}
						Buy 3 or more services together and get 10 to 15% off the
						total. A package counts as one service.
					</Text>
				</Container>
			</Box>

			<ContactCTA title="Not sure what you need?" intro="Tell us about your business and we'll recommend the right starting point, or start with an Online Presence Audit." />

			<Footer />
		</Box>
	);
}
