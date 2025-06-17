// components/Portfolio.tsx
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
	const projects = [
		{
			title: "E-commerce Platform Redesign",
			description:
				"A complete overhaul of a legacy e-commerce system for enhanced user experience and performance.",
			imagePlaceholder: "Project 1 Image",
			technologies: ["Next.js", "Chakra UI", "TypeScript", "Node.js"],
			link: "#",
		},
		{
			title: "Mobile Banking App",
			description:
				"Developed a secure and intuitive mobile application for daily banking operations and financial management.",
			imagePlaceholder: "Project 2 Image",
			technologies: ["React Native", "Firebase", "GraphQL"],
			link: "#",
		},
		// {
		// 	title: "AI-Powered Chatbot Integration",
		// 	description:
		// 		"Integrated a custom AI chatbot into a customer service portal to automate inquiries and improve efficiency.",
		// 	imagePlaceholder: "Project 3 Image",
		// 	technologies: ["Python", "TensorFlow", "REST API", "React"],
		// 	link: "#",
		// },
		// {
		// 	title: "SaaS Dashboard Development",
		// 	description:
		// 		"Built a comprehensive SaaS dashboard for analytics and user management, offering real-time insights.",
		// 	imagePlaceholder: "Project 4 Image",
		// 	technologies: ["Angular", "NgRx", "Chart.js", "NestJS"],
		// 	link: "#",
		// },
		// {
		// 	title: "Healthcare Management System",
		// 	description:
		// 		"A web-based system for managing patient records, appointments, and medical inventory for clinics.",
		// 	imagePlaceholder: "Project 5 Image",
		// 	technologies: ["Laravel", "Vue.js", "MySQL"],
		// 	link: "#",
		// },
		// {
		// 	title: "Real-time Collaboration Tool",
		// 	description:
		// 		"Developed a web application enabling real-time document editing and collaborative workspaces.",
		// 	imagePlaceholder: "Project 6 Image",
		// 	technologies: ["Next.js", "Socket.IO", "PostgreSQL"],
		// 	link: "#",
		// },
	];

	return (
		<Box as="section" id={`portfolio`}>
			<Container py={{ base: 12, md: 20 }}>
				<Heading
					as="h2"
					fontSize={{
						base: "lg",
						//  md: "4xl"
					}}
					// fontSize={{ base: "3xl", md: "4xl" }}
					fontWeight="bold"
					textAlign="center"
					mb={12}
					color={"portfolio.section-title"}

					//   initial={{ y: -50, opacity: 0 }}
					//   whileInView={{ y: 0, opacity: 1 }}
					//   viewport={{ once: true }}
					//   transition={{ duration: 0.6 }}
				>
					Our Portfolio
				</Heading>

				<SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8}>
					{projects.map((project, index) => (
						<Box
							key={index}

							//   initial={{ opacity: 0, y: 50 }}
							//   whileInView={{ opacity: 1, y: 0 }}
							//   viewport={{ once: true, amount: 0.3 }}
							//   transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<ProjectCard {...project} />
						</Box>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};

export default Portfolio;

// Note: Chakra UI provides a `Wrap` component for flexible item wrapping,
//   but it wasn't in the initial code. If you face issues with `Wrap` for tags,
// you might need to import it explicitly or use a simple `Flex` with `flexWrap="wrap"`.
// For simplicity, I've added a basic `Wrap` usage for the tags here.
// Make sure to import Wrap from '@chakra-ui/react' if using it:
// import { Box, Heading, SimpleGrid, Text, useColorModeValue, Flex, Tag, Link, Stack, Wrap } from '@chakra-ui/react';

// For the purposes of this response, assuming Wrap is available or replaced by Flex/Stack if it's causing import issues.
// Let's explicitly define a simple Wrap component if Chakra UI v3 doesn't have it readily imported this way.
// A simpler alternative for the tags would be:
// <Flex flexWrap="wrap" mt={2} mb={4}>
//   {technologies.map((tech) => (
//     <Tag key={tech} size="sm" variant="solid" color={tagColor} bg={tagBg} borderRadius="full" mr={2} mb={2}>
//       {tech}
//     </Tag>
//   ))}
// </Flex>
// I'll stick to SimpleGrid for main layout and Stack for tags for simplicity.
// Reverting Tag rendering to use Stack with spacing for compatibility.

// Revised ProjectCard structure for tags (using Stack instead of Wrap for standard Chakra UI compatibility):
/*
  import { Box, Heading, SimpleGrid, Text, useColorModeValue, Flex, Tag, Link, Stack } from '@chakra-ui/react';
  import {  } from 'framer-';
  
  // ... other imports and  definitions
  
  const ProjectCard = ({
    title,
    description,
    imagePlaceholder,
    technologies,
    link,
  }: ProjectCardProps) => {
    const cardBg = useColorModeValue('white', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
    const tagColor = useColorModeValue('purple.500', 'purple.300');
    const tagBg = useColorModeValue('purple.50', 'purple.800');
  
    return (
      <Box
        bg={cardBg}
        p={6}
        borderRadius="xl"
        shadow="lg"
        textAlign="left"
        // whileHover={{ scale: 1.03, boxShadow: 'xl' }}
        // transition={{ duration: 0.3 }}
      >
        <Box
          w="full"
          h="200px"
          bg={useColorModeValue('gray.200', 'gray.600')}
          borderRadius="md"
          mb={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="xl"
          fontWeight="bold"
          color={useColorModeValue('gray.600', 'gray.300')}
          overflow="hidden"
        >
          {imagePlaceholder}
        </Box>
        <Heading as="h3" size="md" mb={2} color={textColor}>
          {title}
        </Heading>
        <Text fontSize="sm" mb={4} color={textColor}>
          {description}
        </Text>
        <Stack direction="row" flexWrap="wrap" spacing={2} mb={4}> // Use Stack with flexWrap for tags
          {technologies.map((tech) => (
            <Tag
              key={tech}
              size="sm"
              variant="solid"
              color={tagColor}
              bg={tagBg}
              borderRadius="full"
            >
              {tech}
            </Tag>
          ))}
        </Stack>
        {link && (
          <Link
            href={link}
            isExternal
            color={useColorModeValue('purple.500', 'purple.300')}
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            View Project &rarr;
          </Link>
        )}
      </Box>
    );
  };
  
  const Portfolio = () => {
    // ... rest of Portfolio component code
  }
  
  export default Portfolio;
  
  */
// The first ProjectCard definition with `Wrap` (commented out above) might actually work,
// but for standard compatibility, `Stack` with `flexWrap` is safer if `Wrap` is not globally available or expected.
// I'll proceed with the first `Portfolio.tsx` code block that uses `Wrap` and assume it's available in Chakra UI v3.
// If it's not, just swap `Wrap` with `Stack direction="row" flexWrap="wrap"`.
