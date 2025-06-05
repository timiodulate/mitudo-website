import { defineSlotRecipe } from "@chakra-ui/react";

export const listSlotRecipe = defineSlotRecipe({
	slots: ["container", "item", "icon"],
	base: {
		// / define the part you're going to style
		// use !important to give priority to the custom style

		// OrderedList and UnorderedList style
		container: {
			// listStylePos: "inside", // change listStylePos to inside
			listStyle: "none !important", // change listStylePos to inside
			listStyleType: "none !important", // change listStylePos to inside
			// boxShadow: "md", // change boxShadow to md
			margin: "unset",
			marginInline: "unset !important",

			// border: "solid red",
		},
		// ListItem style
		item: {
			p: 0,
			// p: 2, // set padding to 2
			// border: "solid blue",
			"&::marker": {
				// change color for marker
				// color: mode("green.500", "green.200")(props),
			},
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
			},
			md: {
				icon: { fontSize: "md" },
			},
		},
	},
});
