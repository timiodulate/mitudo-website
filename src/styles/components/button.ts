import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// const defaultProps: any = ;

const outline = defineStyle({
	border: "2px dashed", // change the appearance of the border
	borderRadius: 0, // remove the border radius
	fontWeight: "semibold", // change the font weight
});
const solid = defineStyle({
	// border: "2px dashed red", // change the appearance of the border
	// borderRadius: 0, // remove the border radius
	fontWeight: "semibold", // change the font weight

	borderRadius: `full`,
	py: 5,
	px: `1.5rem !important`,

	background: "brand.dark",

	color: "brand.white",
});

const brandPrimary = defineStyle({
	background: "orange.500",
	color: "white",
	fontFamily: "serif",
	fontWeight: "normal",

	// let's also provide dark mode alternatives
	_dark: {
		background: "orange.300",
		color: "orange.800",
	},
});

const brandWhite = defineStyle({
	borderRadius: `full`,

	background: "brand.white",

	color: "brand.dark",

	// fontFamily: "serif",
	// fontWeight: "normal",

	// let's also provide dark mode alternatives
	_dark: {
		background: "brand.dark",

		color: "brand.white",
	},
});

const bland = defineStyle({
	fontWeight: "normal", // change the font weight

	borderRadius: `initial`,
	py: 0,
	px: `0 !important`,

	background: "initial",

	color: "initial",
	w: "fit-content",
	minW: "fit-content",
});

// sizes
export const xl = defineStyle({
	fontSize: "xl",
	px: "6",
	h: "16",
	borderRadius: "md",
});

export const buttonTheme = defineStyleConfig({
	defaultProps: {
		size: "lg",
		variant: "solid",
		colorScheme: "brand",
	},
	variants: { outline, solid, brandPrimary, brandWhite, bland },
});
