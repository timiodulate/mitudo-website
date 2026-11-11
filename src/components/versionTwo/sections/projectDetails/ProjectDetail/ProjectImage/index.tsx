"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";

export default function ProjectImage({ project }: { project: any }) {
	const [failed, setFailed] = useState(false);
	const ref = useRef<HTMLImageElement>(null);

	// An image that fails before hydration never fires onError, so check once mounted.
	useEffect(() => {
		if (ref.current?.complete && ref.current.naturalWidth === 0) setFailed(true);
	}, []);

	if (failed) return null;

	return (
		<Box as="section" px={6} mt={-8}>
			<Box maxW="5xl" mx="auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Image
						src={project.imageUrl}
						alt={project.title}
						w="full"
						h={{ base: "16rem", md: "24rem" }}
						objectFit="cover"
						borderRadius="2xl"
						shadow="2xl"
						objectPosition={"top"}
						ref={ref}
						onError={() => setFailed(true)}
					/>
				</motion.div>
			</Box>
		</Box>
	);
}
