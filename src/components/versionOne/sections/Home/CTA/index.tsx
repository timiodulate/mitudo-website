// components/CTA.tsx
// This component is the Call to Action section at the bottom of the page.

import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";

const CTA = () => {
	return (
		<Box
			as="section"
			id={`cta`}
			bg={"cta.bg"}
			py={{ base: 12, md: 20 }}
			px={{ base: 4, md: 8 }}
			textAlign="center"
			//
			//   initial={{ opacity: 0, y: 50 }}
			//   whileInView={{ opacity: 1, y: 0 }}
			//   viewport={{ once: true }}
			//   transition={{ duration: 0.8 }}
		>
			<Heading
				as="h2"
				fontSize={{ base: "3xl", md: "4xl" }}
				fontWeight="bold"
				mb={4}
				color={"cta.text"}

				// initial={{ opacity: 0, y: 20 }}
				// whileInView={{ opacity: 1, y: 0 }}
				// viewport={{ once: true }}
				// transition={{ duration: 0.6, delay: 0.2 }}
			>
				Let's build something lively.
			</Heading>
			<Text
				fontSize={{ base: "lg", md: "xl" }}
				maxW="2xl"
				mx="auto"
				mb={8}
				color={"cta.text"}

				// initial={{ opacity: 0, y: 20 }}
				// whileInView={{ opacity: 1, y: 0 }}
				// viewport={{ once: true }}
				// transition={{ duration: 0.6, delay: 0.4 }}
			>
				Ready for your next big digital transformation?
			</Text>

			<Link href="https://wa.me/message/ZLLYAMBC6FPBN1" target="_blank">
				<Button
					bg={{
						base: "cta.button.bg",
						_hover: "cta.button.bg-hover",
					}}
					color={"cta.button.text"}
					borderRadius="full"
					size="lg"
					px={8}
					py={6}

					// initial={{ opacity: 0, y: 20 }}
					// whileInView={{ opacity: 1, y: 0 }}
					// viewport={{ once: true }}
					// transition={{ duration: 0.6, delay: 0.6 }}
				>
					Start a new project
				</Button>
			</Link>
		</Box>
	);
};

export default CTA;
