import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
	createMultiStyleConfigHelpers,
	defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
	// define the part you're going to style
	// overlay: {
	// 	bg: "blackAlpha.200", //change the background
	// },
	// dialog: {
	// 	borderRadius: "md",
	// 	bg: `purple.100`,
	// },
});

// Now any modal created has above style
//   <Modal  ... />

const xl = defineStyle({
	px: "6",
	py: "2",
	fontSize: "xl",
});

const sm = defineStyle({
	fontSize: "sm",
	py: "6",
});

const sizes = {
	xl: definePartsStyle({ header: sm, dialog: xl }),
};

// Now we can use the new `xl` size
//   <Modal size="xl" ... />

const purple = definePartsStyle({
	dialog: {
		borderRadius: "md",
		bg: `purple.100`,

		// Let's also provide dark mode alternatives
		_dark: {
			bg: `purple.600`,
			color: "white",
		},
	},
});

const forMobileNavLinks = definePartsStyle({
	dialogContainer: {
		height: "calc(100vh - 88px)",
		top: "unset",
		bottom: 0,
	},
});

// Now we can use the new `purple` variant
//   <Modal variant='purple' ... />

export const modalTheme = defineMultiStyleConfig({
	baseStyle,
	sizes,
	variants: { purple, forMobileNavLinks },
});
