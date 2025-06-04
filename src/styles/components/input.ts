import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);
import { defineStyle } from "@chakra-ui/react";

// Customizing the default theme
const baseStyle = definePartsStyle({
	// define the part you're going to style
	field: {
		fontFamily: "mono", // change the font family
		color: "brand.white", // change the input text color

		borderRadius: "full",
		border: "none",
	},
});

// Adding a custom size
const xl = defineStyle({
	fontSize: "lg",
	px: "4",
	h: "12",
});

const sizes = {
	xl: definePartsStyle({ field: xl, addon: xl }),
};

// Adding a custom variant
const pill = definePartsStyle({
	field: {
		border: "1px solid",
		borderColor: "gray.200",
		background: "gray.50",
		borderRadius: "full",

		// Let's also provide dark mode alternatives
		_dark: {
			borderColor: "gray.600",
			background: "gray.800",
		},
	},
	addon: {
		border: "1px solid",
		borderColor: "gray.200",
		background: "gray.200",
		borderRadius: "full",
		color: "gray.500",

		_dark: {
			borderColor: "gray.600",
			background: "gray.600",
			color: "gray.400",
		},
	},
});

export const inputTheme = defineMultiStyleConfig({
	baseStyle,
	variants: { pill },
	sizes,
});
