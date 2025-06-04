import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define the base component styles
const baseStyle = {
	borderRadius: "xl", // add a border radius
	// fontWeight: "medium", // change the font weight

	// mx:'auto'
	// px: "1.3vw",
	width: "100%",
	maxWidth: "calc(1400px + 6.6vw)",
	// maxWidth={{ base: "calc(1400px + 6.6vw)" }}
	// maxWidth={{md:'calc(var(--max-width) + calc(var(--space-outer) * 2))'}}
	// padding: var(--page-inline-spacing) !important;
};

// define custom sizes
const sizes = {
	sm: defineStyle({
		maxW: "45ch",
		p: "4",
	}),
	md: defineStyle({
		maxW: "container.sm",
		// p: "6",
		px: "1.3vw",
		fontSize: "lg",
	}),
	lg: defineStyle({
		maxW: "75ch",
		p: "8",
		fontSize: "xl",
	}),
};

// define styles for custom variant
const colorfulVariant = defineStyle((props) => {
	const { colorScheme: c } = props; // add color scheme as a prop
	return {
		_light: {
			bg: `${c}.200`,
			color: `${c}.800`,
		},
		_dark: {
			bg: `${c}.700`,
			color: `${c}.200`,
		},
	};
});

const boldVariant = defineStyle((props) => {
	const { colorScheme: c } = props; // add color scheme as a prop

	return {
		borderRadius: "none",
		border: "2px solid",
		fontFamily: "mono",
		_light: {
			bg: "white",
			color: `${c}.black`,
		},
		_dark: {
			bg: "black",
			color: "white",
		},
	};
});

// define custom variants
export const variants = {
	colorful: colorfulVariant,
	bold: boldVariant,
};

// export the component theme
export const containerTheme = defineStyleConfig({ baseStyle, sizes });
