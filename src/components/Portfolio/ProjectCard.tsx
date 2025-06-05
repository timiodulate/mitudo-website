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
			borderRadius="xl"
			shadow="lg"
			textAlign="left"
			//
			// whileHover={{ scale: 1.03, boxShadow: 'xl' }}
			// transition={{ duration: 0.3 }}
		>
			<Box
				w="full"
				h="200px"
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

			<Heading as="h3" size="md" mb={2} color={"portfolio.card.text"}>
				{title}
			</Heading>

			<Text fontSize="sm" mb={4} color={"portfolio.card.text"}>
				{description}
			</Text>

			<Wrap gap={2} mb={4}>
				{" "}
				{/* Using Wrap for tags for better responsiveness */}
				{/* {technologies.map((tech) => (
					<Tag
						key={tech}
						size="sm"
						variant="solid"
						color={'portfolio.tag.text'}
						bg={'portfolio.tag.bg'}
						borderRadius="full"
					>
						{tech}
					</Tag>
				))} */}
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
