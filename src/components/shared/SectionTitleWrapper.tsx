import { Box, Heading } from "@chakra-ui/react";

const SectionTitleWrapper = ({
	title,
	md,
}: {
	title: string;
	md?: string | number | { [x: string]: string | number };
}) => {
	return (
		<Box textAlign="center" mb={md ?? 12}>
			<Heading
				as="h2"
				fontSize={{
					base: "md",
					//  md: "4xl"
				}}
				fontWeight="bold"
				textAlign="center"
				color="services.section-title"
				// color={"header.text"}

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
