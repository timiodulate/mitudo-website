"use client";
import React, { useMemo, useState } from "react";
import { X } from "lucide-react";
import { Box, Flex, Grid, Heading, Text, chakra } from "@chakra-ui/react";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";
import MultiSelect, { type MultiSelectGroup } from "@/components/versionTwo/shared/MultiSelect";
import ProjectCard from "./ProjectCard";
import { CONCEPT_CLIENT, type PortfolioProject } from "@/data/portfolio";
import { getService, getServicesByCategory, serviceCategories, services as allServices } from "@/data/services";

type GroupBy = "none" | "brand" | "service";

const groupByOptions: { value: GroupBy; label: string }[] = [
	{ value: "none", label: "No grouping" },
	{ value: "brand", label: "Brand / client" },
	{ value: "service", label: "Service" },
];

const matchesBrands = (project: PortfolioProject, brands: string[]) =>
	brands.length === 0 || brands.includes(project.client);

const matchesServices = (project: PortfolioProject, services: string[]) =>
	services.length === 0 || project.services.some((slug) => services.includes(slug));

/** Brands in order: real clients A to Z, concept work last. */
const sortBrands = (brands: string[]) =>
	[...brands].sort((a, b) =>
		a === CONCEPT_CLIENT ? 1 : b === CONCEPT_CLIENT ? -1 : a.localeCompare(b),
	);

export default function ProjectsSection({ projects }: { projects: PortfolioProject[] }) {
	const [brands, setBrands] = useState<string[]>([]);
	const [services, setServices] = useState<string[]>([]);
	const [groupBy, setGroupBy] = useState<GroupBy>("none");

	const allBrands = useMemo(() => sortBrands([...new Set(projects.map((p) => p.client))]), [projects]);

	// Each filter's counts take the other filter into account.
	const brandGroups: MultiSelectGroup[] = [
		{
			options: allBrands.map((brand) => ({
				value: brand,
				label: brand,
				count: projects.filter((p) => p.client === brand && matchesServices(p, services)).length,
			})),
		},
	];

	const serviceGroups: MultiSelectGroup[] = serviceCategories.map((category) => ({
		label: category.title,
		options: getServicesByCategory(category.id).map((service) => ({
			value: service.slug,
			label: service.name,
			count: projects.filter((p) => p.services.includes(service.slug) && matchesBrands(p, brands)).length,
		})),
	}));

	const shown = projects.filter((p) => matchesBrands(p, brands) && matchesServices(p, services));

	const groups: { key: string; title: string; items: PortfolioProject[] }[] = (() => {
		if (groupBy === "brand") {
			return sortBrands([...new Set(shown.map((p) => p.client))]).map((brand) => ({
				key: brand,
				title: brand,
				items: shown.filter((p) => p.client === brand),
			}));
		}
		if (groupBy === "service") {
			// In catalog order; with a service filter on, only the chosen services.
			const slugs = allServices
				.map((s) => s.slug)
				.filter((slug) => (services.length === 0 || services.includes(slug)) && shown.some((p) => p.services.includes(slug)));
			const result = slugs.map((slug) => ({
				key: slug,
				title: getService(slug)?.name ?? slug,
				items: shown.filter((p) => p.services.includes(slug)),
			}));
			const other = shown.filter((p) => p.services.length === 0);
			return other.length > 0 ? [...result, { key: "other", title: "Other work", items: other }] : result;
		}
		return [{ key: "all", title: "", items: shown }];
	})();

	const activeChips = [
		...brands.map((brand) => ({ key: `b-${brand}`, label: brand, remove: () => setBrands(brands.filter((b) => b !== brand)) })),
		...services.map((slug) => ({
			key: `s-${slug}`,
			label: getService(slug)?.name ?? slug,
			remove: () => setServices(services.filter((s) => s !== slug)),
		})),
	];

	return (
		<Box as="section" py={{ base: 12, md: 16 }} bg="#F5F7FA">
			<SectionContainer>
				{/* Filters */}
				<Box bg="white" border="1px solid" borderColor="slate.200" borderRadius="2xl" p={{ base: 4, md: 5 }} mb={8}>
					<Flex gap={3} direction={{ base: "column", md: "row" }} align={{ base: "stretch", md: "center" }} wrap="wrap">
						<MultiSelect label="Brand" groups={brandGroups} selected={brands} onChange={setBrands} />
						<MultiSelect label="Service" groups={serviceGroups} selected={services} onChange={setServices} />

						<Flex align="center" gap={2} ml={{ md: "auto" }} wrap="wrap">
							<Text fontSize="sm" color="#4A5568">
								Group by
							</Text>
							<Flex bg="#F5F7FA" borderRadius="xl" p={1} gap={1} role="radiogroup" aria-label="Group by">
								{groupByOptions.map((option) => (
									<chakra.button
										key={option.value}
										type="button"
										role="radio"
										aria-checked={groupBy === option.value}
										onClick={() => setGroupBy(option.value)}
										px={3}
										py={1.5}
										borderRadius="lg"
										fontSize="sm"
										fontWeight={groupBy === option.value ? "semibold" : "normal"}
										bg={groupBy === option.value ? "white" : "transparent"}
										color={groupBy === option.value ? "#0077FF" : "#4A5568"}
										boxShadow={groupBy === option.value ? "sm" : "none"}
										cursor="pointer"
									>
										{option.label}
									</chakra.button>
								))}
							</Flex>
						</Flex>
					</Flex>

					{activeChips.length > 0 && (
						<Flex gap={2} wrap="wrap" align="center" mt={4} pt={4} borderTop="1px solid" borderColor="slate.100">
							{activeChips.map((chip) => (
								<chakra.button
									key={chip.key}
									type="button"
									onClick={chip.remove}
									aria-label={`Remove filter ${chip.label}`}
									display="inline-flex"
									alignItems="center"
									gap={1.5}
									px={3}
									py={1}
									borderRadius="full"
									bg="rgba(0, 119, 255, 0.08)"
									color="#0077FF"
									fontSize="xs"
									fontWeight="medium"
									cursor="pointer"
									_hover={{ bg: "rgba(0, 119, 255, 0.15)" }}
								>
									{chip.label}
									<X size={12} />
								</chakra.button>
							))}
							<chakra.button
								type="button"
								onClick={() => {
									setBrands([]);
									setServices([]);
								}}
								fontSize="xs"
								color="#4A5568"
								textDecoration="underline"
								cursor="pointer"
								ml={1}
							>
								Clear all
							</chakra.button>
						</Flex>
					)}
				</Box>

				<Text fontSize="sm" color="#4A5568" mb={6}>
					{shown.length === projects.length
						? `${projects.length} project${projects.length === 1 ? "" : "s"}`
						: `${shown.length} of ${projects.length} projects`}
				</Text>

				{shown.length === 0 ? (
					<Box textAlign="center" py={16} bg="white" borderRadius="2xl" border="1px dashed" borderColor="slate.300">
						<Text fontWeight="semibold" color="#0D1B2A">
							No projects match these filters yet.
						</Text>
						<Text fontSize="sm" color="#4A5568" mt={1}>
							Try removing a filter, or ask us about the work you have in mind.
						</Text>
					</Box>
				) : (
					groups.map((group) => (
						<Box key={group.key} mb={groupBy === "none" ? 0 : 12}>
							{group.title && (
								<Flex align="baseline" gap={3} mb={5}>
									<Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} fontFamily="poppins" color="#0D1B2A">
										{group.title}
									</Heading>
									<Text fontSize="sm" color="#4A5568">
										{group.items.length}
									</Text>
								</Flex>
							)}
							<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
								{group.items.map((project) => (
									<ProjectCard key={`${group.key}-${project.id}`} project={project} />
								))}
							</Grid>
						</Box>
					))
				)}
			</SectionContainer>
		</Box>
	);
}
