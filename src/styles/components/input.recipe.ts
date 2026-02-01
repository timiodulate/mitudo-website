import { defineSlotRecipe } from "@chakra-ui/react";

export const inputSlotRecipe = defineSlotRecipe({
	slots: ["field"],
	base: {
		field: {
			fontFamily: "mono", // change the font family
			color: "brand.white", // change the input text color

			borderRadius: "full",
			border: "none",
		},
	},
	variants: {
		visual: {
			pill: {
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
			},
		},
		size: {
			xl: {
				field: {
					fontSize: "lg",
					px: "4",
					h: "12",
				},
			},
		},
	},
});
