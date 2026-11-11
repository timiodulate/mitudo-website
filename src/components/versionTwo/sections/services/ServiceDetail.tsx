"use client";
import React from "react";
import NextLink from "next/link";
import { ArrowLeft, CalendarClock, CheckCircle2, FolderOpen, MessageCircle, Star, Wallet } from "lucide-react";
import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Link as ChakraLink,
	Text,
	VStack,
} from "@chakra-ui/react";
import Navbar from "../../layouts/Header/Navbar";
import Footer from "../../layouts/Footer";
import ContactCTA from "../../shared/ContactCTA";
import ServiceCard, { KindBadge } from "./ServiceCard";
import { getCategory, getService, getSharedFaqs, paymentShort, Service } from "@/data/services";
import FaqList from "@/components/versionTwo/shared/FaqList";
import { getServiceRoute, ROUTES } from "@/data/routes";
import { type Testimonial, testimonialByline } from "@/data/testimonials";
import { businessWABaseLink } from "@/data";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";

const sectionHeading = (text: string) => (
	<Heading
		as="h2"
		fontSize={{ base: "xl", md: "2xl" }}
		fontFamily="poppins"
		color="#0D1B2A"
		mb={6}
	>
		{text}
	</Heading>
);

const toServices = (slugs?: string[]) =>
	(slugs ?? []).map((slug) => getService(slug)).filter((s): s is Service => Boolean(s));

export default function ServiceDetailView({
	slug,
	testimonials,
}: {
	slug: string;
	testimonials: Testimonial[];
}) {
	const service = getService(slug);
	if (!service) return null;

	const contains = toServices(service.contains);
	const partOf = toServices(service.partOf);
	const related = toServices(service.related);
	const own = testimonials.filter((t) => t.service_slug === service.slug);
	const shownTestimonials = (own.length > 0 ? own : testimonials).slice(0, 3);
	const faqs = [...(service.faqs ?? []), ...getSharedFaqs(service)];
	const category = getCategory(service.category);
	const facts = [
		{ icon: Wallet, label: "How you pay", value: paymentShort[service.payment] },
		{ icon: CalendarClock, label: "Timeline", value: service.timeline ?? "Confirmed in your quote" },
		...(category ? [{ icon: FolderOpen, label: "Group", value: category.title, href: `${ROUTES.services}#${category.id}` }] : []),
	];
	const waLink = `${businessWABaseLink}?text=${encodeURIComponent(
		`Hello Mitudo Agency, I'm interested in ${service.name}.`,
	)}`;

	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Navbar bold />

			{/* Hero */}
			<Box
				as="section"
				bg="white"
				borderBottom="1px solid"
				borderColor="slate.100"
				pt={{ base: 28, md: 36 }}
				pb={{ base: 12, md: 16 }}
			>
				<SectionContainer narrow="4xl">
					<ChakraLink
						as={NextLink}
						href={ROUTES.services}
						display="inline-flex"
						alignItems="center"
						gap={2}
						fontSize="sm"
						color="#4A5568"
						mb={6}
						_hover={{ color: "#0077FF", textDecoration: "none" }}
					>
						<ArrowLeft size={14} /> All services
					</ChakraLink>
					<Box mb={3}>
						<KindBadge kind={service.kind} />
					</Box>
					<Heading
						as="h1"
						fontSize={{ base: "3xl", md: "5xl" }}
						fontWeight="bold"
						lineHeight="shorter"
						fontFamily="poppins"
						color="#0D1B2A"
						mb={5}
					>
						{service.name}
					</Heading>
					<Text fontSize={{ base: "md", md: "lg" }} color="#4A5568" maxW="3xl">
						{service.summary}
					</Text>
					<Flex gap={3} mt={8} direction={{ base: "column", sm: "row" }}>
						<ChakraLink href={waLink} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
							<Button
								w={{ base: "full", sm: "auto" }}
								size="lg"
								bg="#0077FF"
								color="white"
								borderRadius="full"
								px={8}
								_hover={{ bg: "#0066DD" }}
							>
								<MessageCircle size={16} />
								Ask about this service
							</Button>
						</ChakraLink>
						<ChakraLink as={NextLink} href="#faq" _hover={{ textDecoration: "none" }}>
							<Button
								w={{ base: "full", sm: "auto" }}
								size="lg"
								variant="outline"
								color="#0D1B2A"
								borderColor="slate.300"
								borderRadius="full"
								px={8}
								_hover={{ bg: "#F5F7FA" }}
							>
								Read the FAQ
							</Button>
						</ChakraLink>
					</Flex>

					<Grid
						templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
						gap={4}
						mt={10}
						pt={8}
						borderTop="1px solid"
						borderColor="slate.100"
					>
						{facts.map((fact) => (
							<Flex key={fact.label} gap={3} align="flex-start">
								<Box color="#00C2CB" mt={0.5} flexShrink={0}>
									<fact.icon size={18} />
								</Box>
								<Box>
									<Text fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" color="#4A5568">
										{fact.label}
									</Text>
									{"href" in fact && fact.href ? (
										<ChakraLink as={NextLink} href={fact.href} fontSize="sm" color="#0077FF" fontWeight="medium">
											{fact.value}
										</ChakraLink>
									) : (
										<Text fontSize="sm" color="#0D1B2A" fontWeight="medium">
											{fact.value}
										</Text>
									)}
								</Box>
							</Flex>
						))}
					</Grid>
				</SectionContainer>
			</Box>

			{/* Service description */}
			<Box as="section" id="description" py={{ base: 14, md: 20 }} bg="#F5F7FA">
				<SectionContainer narrow="4xl">
					{sectionHeading("About this service")}
					<VStack align="stretch" gap={4} mb={10}>
						{service.description.map((paragraph) => (
							<Text key={paragraph} color="#4A5568" lineHeight="tall">
								{paragraph}
							</Text>
						))}
					</VStack>

					<Grid
						templateColumns={{ base: "1fr", md: service.youProvide ? "3fr 2fr" : "1fr" }}
						gap={6}
					>
						<Box bg="white" borderRadius="2xl" p={6} border="1px solid" borderColor="slate.200">
							<Heading as="h3" fontSize="md" fontFamily="poppins" color="#0D1B2A" mb={4}>
								{service.kind === "add-on" ? "Options" : "What's included"}
							</Heading>
							<VStack align="stretch" gap={3}>
								{service.includes.map((item) => (
									<Flex key={item} gap={3} align="flex-start">
										<Box color="#10B981" mt={0.5} flexShrink={0}>
											<CheckCircle2 size={18} />
										</Box>
										<Text color="#4A5568" fontSize="sm">
											{item}
										</Text>
									</Flex>
								))}
							</VStack>
						</Box>
						{service.youProvide && (
							<Box bg="white" borderRadius="2xl" p={6} border="1px solid" borderColor="slate.200">
								<Heading as="h3" fontSize="md" fontFamily="poppins" color="#0D1B2A" mb={4}>
									What we'll need from you
								</Heading>
								<VStack align="stretch" gap={3}>
									{service.youProvide.map((item) => (
										<Text key={item} color="#4A5568" fontSize="sm">
											• {item}
										</Text>
									))}
								</VStack>
							</Box>
						)}
					</Grid>

					{contains.length > 0 && (
						<Box mt={12}>
							<Heading as="h3" fontSize="lg" fontFamily="poppins" color="#0D1B2A" mb={2}>
								What's in this package
							</Heading>
							<Text color="#4A5568" fontSize="sm" mb={5}>
								Each of these can also be bought on its own.
							</Text>
							<Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap={4}>
								{contains.map((item) => (
									<ServiceCard key={item.slug} service={item} />
								))}
							</Grid>
						</Box>
					)}

					{partOf.length > 0 && (
						<Box mt={10} p={5} bg="rgba(0, 194, 203, 0.08)" borderRadius="2xl" border="1px solid" borderColor="rgba(0, 194, 203, 0.3)">
							<Text color="#0D1B2A" fontSize="sm">
								Also available as part of{" "}
								{partOf.map((pkg, index) => (
									<React.Fragment key={pkg.slug}>
										{index > 0 && ", "}
										<ChakraLink as={NextLink} href={getServiceRoute(pkg.slug)} color="#0077FF" fontWeight="semibold">
											{pkg.name}
										</ChakraLink>
									</React.Fragment>
								))}
								, together with related services for less.
							</Text>
						</Box>
					)}
				</SectionContainer>
			</Box>

			{/* Testimonials */}
			{shownTestimonials.length > 0 && (
			<Box as="section" id="testimonials" py={{ base: 14, md: 20 }} bg="white">
				<SectionContainer narrow="4xl">
					{sectionHeading(own.length > 0 ? "What clients say" : "What clients say about working with us")}
					<VStack align="stretch" gap={5}>
						{shownTestimonials.map((testimonial) => (
							<Box
								key={testimonial.id ?? testimonial.name}
								bg="#F5F7FA"
								borderRadius="2xl"
								p={{ base: 6, md: 8 }}
								border="1px solid"
								borderColor="slate.200"
							>
								<Flex gap={1} mb={4} color="#00C2CB">
									{Array.from({ length: testimonial.rating ?? 5 }).map((_, index) => (
										<Star key={index} size={16} fill="currentColor" />
									))}
								</Flex>
								<Text color="#4A5568" lineHeight="tall" mb={5}>
									&ldquo;{testimonial.text}&rdquo;
								</Text>
								<Text fontWeight="semibold" color="#0D1B2A" fontSize="sm">
									{testimonial.name}
								</Text>
								<Text color="#4A5568" fontSize="sm">
									{testimonialByline(testimonial)}
								</Text>
							</Box>
						))}
					</VStack>
				</SectionContainer>
			</Box>

			)}

			{/* FAQ */}
			<Box as="section" id="faq" scrollMarginTop="6rem" py={{ base: 14, md: 20 }} bg="#F5F7FA">
				<SectionContainer narrow="4xl">
					{sectionHeading("Frequently asked questions")}
					<FaqList faqs={faqs} />
				</SectionContainer>
			</Box>

			{/* Contact */}
			<ContactCTA
				serviceName={service.name}
				serviceSlug={service.slug}
				title={`Interested in ${service.name}?`}
				intro="Message us with a little about your business. We'll ask a few quick questions and send you a clear quote."
			/>

			{related.length > 0 && (
				<Box as="section" py={{ base: 14, md: 20 }} bg="white">
					<SectionContainer>
						{sectionHeading("Goes well with")}
						<Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={5}>
							{related.slice(0, 3).map((item) => (
								<ServiceCard key={item.slug} service={item} bg="#F5F7FA" />
							))}
						</Grid>
					</SectionContainer>
				</Box>
			)}

			<Footer />
		</Box>
	);
}
