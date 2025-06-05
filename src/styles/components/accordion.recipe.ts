import { defineSlotRecipe } from "@chakra-ui/react";

export const accordionSlotRecipe = defineSlotRecipe({
	slots: ["container", "root", "button", "panel", "icon"],
	base: {
		// OrderedList and UnorderedList style
		// container: {},
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
			// color: mode("blue.500", "blue.200")(props),
		},
	},
	variants: {
		size: {
			sm: {
				icon: { fontSize: "sm" },
				panel: { fontSize: "sm" },
			},
			md: {
				icon: { fontSize: "sm" },
				panel: { fontSize: "sm" },
			},
		},
	},
});
