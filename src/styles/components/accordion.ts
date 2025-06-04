import {
	// defineStyle,
	createMultiStyleConfigHelpers,
} from "@chakra-ui/styled-system";
import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
	// define the part you're going to style
	// use !important to give priority to the custom style

	// OrderedList and UnorderedList style
	container: {},
	// ListItem style
	root: {},
	button: {
		px: 0,
		py: 4,
	},
	panel: {
		p: 0,
	},
	icon: {
		//change color for icon
		color: mode("blue.500", "blue.200")(props),
	},
}));

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
