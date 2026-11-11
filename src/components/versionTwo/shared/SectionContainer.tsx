import React from "react";
import { Box, Container, type BoxProps } from "@chakra-ui/react";

/**
 * The one container every page section uses, so content lines up with the
 * header and footer at every screen size. `narrow` limits the readable width
 * of text-heavy sections without moving their left edge (or centres them
 * with `center`).
 */
export default function SectionContainer({
	narrow,
	center,
	children,
	...props
}: BoxProps & {
	narrow?: boolean | "3xl" | "4xl";
	center?: boolean;
}) {
	const inner = narrow ? (
		<Box
			maxW={narrow === true ? "3xl" : narrow}
			mx={center ? "auto" : undefined}
			textAlign={center ? "center" : undefined}
			{...props}
		>
			{children}
		</Box>
	) : (
		children
	);

	return (
		<Container maxW="6xl" px={{ base: 6, md: 8 }} {...(narrow ? {} : props)}>
			{inner}
		</Container>
	);
}
