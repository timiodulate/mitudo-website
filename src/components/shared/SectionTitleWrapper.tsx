import { Box, Heading } from "@chakra-ui/react";

const SectionTitleWrapper = ({ title }: { title: string }) => {
	return (
		<Box textAlign="center" mb={12}>
			<Heading
				as="h2"
				fontSize={{
					base: "lg",
					//  md: "4xl"
				}}
				fontWeight="bold"
				textAlign="center"
				color="services.section-title"
				// size="2xl" color="brand.gray.darkGray"

				// initial={{ y: -50, opacity: 0 }}
				// whileInView={{ y: 0, opacity: 1 }}
				// viewport={{ once: true }}
				// transition={{ duration: 0.6 }}
			>
				{/* Our  */}
				{title}
			</Heading>

			{/* <Text fontSize="lg" color="brand.gray.mediumGray">
					We offer a wide range of development services.
				</Text> */}
		</Box>
	);
};
export default SectionTitleWrapper;
