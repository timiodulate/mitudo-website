import { defineRecipe } from "@chakra-ui/react";

export const containerRecipe = defineRecipe({
	base: {
		// display: "flex",
		// borderRadius: "xl", // add a border radius
		//// fontWeight: "medium", // change the font weight
		// px:{{ base: 4, md: 8 }},
		// px: "1.3vw",
		//
		width: "100%",
		maxWidth: "1200px",
		// maxWidth: "calc(1400px + 6.6vw)",
		//// maxWidth={{ base: "calc(1400px + 6.6vw)" }}
		//// maxWidth={{md:'calc(var(--max-width) + calc(var(--space-outer) * 2))'}}
		//
		mx: "auto",
		//
		//// padding: var(--page-inline-spacing) !important;
	},
	variants: {
		visual: {
			solid: { bg: "red.200", color: "white" },
			outline: { borderWidth: "1px", borderColor: "red.200" },

			colorfulVariant: {
				bg: `{c}.200`,
				color: `{c}.800`,

				_dark: {
					bg: `{c}.700`,
					color: `{c}.200`,
				},
			},
			boldVariant: {
				borderRadius: "none",
				border: "2px solid",
				fontFamily: "mono",
				_light: {
					bg: "white",
					color: `{colors.black}`,
				},
				_dark: {
					bg: "black",
					color: "white",
				},
			},
		},
		size: {
			sm: { maxW: "45ch", p: "4", fontSize: "12px" },
			md: {
				maxW: "container.sm",
				// p: "6",
				px: "1.3vw",
				fontSize: "lg",
			},
			lg: {
				maxW: "75ch",
				p: "8",
				// fontSize: "xl",
				fontSize: "24px",
			},
		},
	},
});
