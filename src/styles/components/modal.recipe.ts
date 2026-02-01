import { defineSlotRecipe } from "@chakra-ui/react";

export const modalSlotRecipe = defineSlotRecipe({
	slots: ["header", "dialog", "dialogContainer"],
	base: {},
	variants: {
		visual: {
			purple: {
				dialog: {
					borderRadius: "md",
					bg: `purple.100`,

					// Let's also provide dark mode alternatives
					_dark: {
						bg: `purple.600`,
						color: "white",
					},
				},
			},
			forMobileNavLinks: {
				dialogContainer: {
					height: "calc(100vh - 88px)",
					top: "unset",
					bottom: 0,
				},
			},
		},
		size: {
			xl: {
				header: {
					fontSize: "sm",
					py: "6",
				},
				dialog: {
					px: "6",
					py: "2",
					fontSize: "xl",
				},
			},
		},
	},
});
