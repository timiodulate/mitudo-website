import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function Maintenance() {
	return (
		<Box as="section" py={{ base: 20, md: 28 }} px={6} bg="#F5F7FA">
			<Container maxW="4xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Flex
						gap={8}
						flexDirection={{ base: "column", md: "row" }}
						alignItems={{
							base: "flex-start",
							md: "center",
						}}
						justifyContent="space-between"
						bg="white"
						borderRadius="3xl"
						p={{ base: 8, md: 12 }}
						boxShadow="lg"
						border="1px solid"
						borderColor="slate.200"
					>
						<Box flex={1}>
							<Text
								color="#0077FF"
								fontWeight="medium"
								fontSize="sm"
								letterSpacing="wider"
								textTransform="uppercase"
							>
								Optional Add-on
							</Text>
							<Heading
								as="h2"
								fontSize={{
									base: "xl",
									md: "2xl",
									lg: "3xl",
								}}
								fontWeight="bold"
								color="#0D1B2A"
								mt={3}
								mb={4}
								fontFamily="poppins"
							>
								Website Maintenance
							</Heading>
							<Text color="slate.600" mb={6}>
								I also offer monthly website maintenance which
								covers:
							</Text>

							{/* ul  */}
							<VStack align="flex-start" gap={3}>
								{[
									"Updates",
									"Minor changes",
									"Technical support",
								].map((item, i) => (
									<Flex
										key={i}
										align="center"
										gap={3}
										color="slate.700"
									>
										<CheckCircle className="w-5 h-5 text-[#00C2CB]" />
										<Text>{item}</Text>
									</Flex>
								))}
							</VStack>
							<Text color="slate.500" mt={6} fontSize="sm">
								This keeps your website running smoothly without
								stress.
							</Text>
						</Box>
						<Box textAlign={{ base: "left", md: "right" }}>
							<Text
								color="#0077FF"
								fontWeight="medium"
								fontSize="sm"
								mb={1}
							>
								Monthly
							</Text>
							<Heading
								as="h3"
								fontSize={{
									base: "2xl",
									md: "3xl",
									lg: "4xl",
								}}
								fontWeight="bold"
								color="#0D1B2A"
								fontFamily="poppins"
							>
								₦20,000 – ₦40,000
							</Heading>
							<Text color="slate.500" fontSize="sm" mt={2}>
								per month
							</Text>
						</Box>
					</Flex>
				</motion.div>
			</Container>
		</Box>
	);
}
