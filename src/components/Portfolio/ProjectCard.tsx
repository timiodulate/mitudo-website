import { ecommBanner } from "@/images";
import {
	Box,
	Heading,
	SimpleGrid,
	Text,
	Flex,
	Tag,
	Link,
	Stack,
	Wrap,
	Button,
} from "@chakra-ui/react";
import Image from "next/image";

interface ProjectCardProps {
	title: string;
	description: string;
	imagePlaceholder: string;
	technologies: string[];
	link?: string;
}

const ProjectCard = ({
	title,
	description,
	imagePlaceholder,
	technologies,
	link,
}: ProjectCardProps) => {
	return (
		<Flex
			bg={"portfolio.card.bg"}
			// p={6}
			flexDirection={{ base: "column" }}
			textAlign="left"
			cursor={"pointer"}
			//
			borderRadius="xl"
			shadow="lg"
			_hover={{
				animation: "servicesCard",
			}}
		>
			<Box
				position={{ base: "relative" }}
				flex={{ base: "1 300px" }}
				aspectRatio={"square"}
				borderRadius="xl"
				bg={"portfolio.card.banner.bg"}
				color={"portfolio.card.banner.text"}
				//
				display="flex"
				alignItems="center"
				justifyContent="center"
				overflow="hidden" // Ensure placeholder text doesn't overflow
			>
				<Image
					src={ecommBanner}
					alt="hero illustration"
					fill
					objectFit="cover"
					objectPosition="-5rem 0rem"
				/>
			</Box>

			<Flex
				p={{ base: 6 }}
				justifyContent={{ base: "space-between" }}
				alignItems={{ base: "center" }}
			>
				<Flex flexDirection={{ base: "column" }} gap={{ base: 2 }}>
					<Heading
						as="h3"
						size="md"
						fontWeight={"bold"}
						color={"portfolio.card.text"}
					>
						{title}
					</Heading>

					<Wrap gap={2}>
						{/* Using Wrap for tags for better responsiveness */}
						{technologies.map((tech) => (
							<Tag.Root
								key={tech}
								size="sm"
								color={"portfolio.tag.text"}
								bg={"portfolio.tag.bg"}
								borderRadius="full"
								variant="solid"
							>
								<Tag.Label>{tech}</Tag.Label>
							</Tag.Root>
						))}
					</Wrap>
				</Flex>

				{link && (
					<Link
						href={link}
						// isExternal
						h={{ base: "full" }}
					>
						<Button
							// color={"portfolio.card.link.text"}
							fontWeight="bold"
							// _hover={{ textDecoration: "underline" }}
							// bg={"header.button-bg"}
							color={"header.button-text"}
							// _hover={{
							// 	bg: "header.button-bg-hover",
							// }}
							borderRadius="full"
							px={2}
							py={2}
							h={{ base: "full" }}
							// colorScheme="teal" variant="solid"
						>
							{/* View Project  */}
							&rarr;
						</Button>
					</Link>
				)}
			</Flex>
		</Flex>
	);
};

export default ProjectCard;
