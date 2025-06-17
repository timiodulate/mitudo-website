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
} from "@chakra-ui/react";

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
		<Box
			bg={"portfolio.card.bg"}
			p={6}
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
				w="full"
				h="300px"
				bg={"portfolio.card.banner.bg"}
				borderRadius="md"
				mb={4}
				display="flex"
				alignItems="center"
				justifyContent="center"
				fontSize="xl"
				fontWeight="bold"
				color={"portfolio.card.banner.text"}
				overflow="hidden" // Ensure placeholder text doesn't overflow
			>
				{imagePlaceholder}
			</Box>

			<Heading
				as="h3"
				size="md"
				fontWeight={"bold"}
				mb={2}
				color={"portfolio.card.text"}
			>
				{title}
			</Heading>

			<Text fontSize="sm" mb={4} color={"portfolio.card.text"}>
				{description}
			</Text>

			<Wrap gap={2} mb={4}>
				{" "}
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

			{link && (
				<Link
					href={link}
					// isExternal
					color={"portfolio.card.link.text"}
					fontWeight="bold"
					_hover={{ textDecoration: "underline" }}
				>
					View Project &rarr;
				</Link>
			)}
		</Box>
	);
};

export default ProjectCard;
