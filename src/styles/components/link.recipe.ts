import { defineStyle } from "@chakra-ui/react";

import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
	base: {},
	variants: {
		visual: {
			brandPrimary: {
				textDecoration: "underline",
				// color: "white",
				// fontFamily: "serif",
				// fontWeight: "normal",

				// let's also provide dark mode alternatives
				_dark: {
					color: "orange.800",
				},
			},

			plain: {
				fontFamily: "Mona Sans, sans-serif",
				// fontWeight: "var(--font-body-weight)",
				fontWeight: "400",
				fontStyle: "var(--font-body-style)",
				// lineHeight: "var(--line-height-body)",
				// letterSpacing: "var(--font-body-base-letter-spacing)",
				letterSpacing: "-0.005em",

				// fontSize: "var(--font-size-body-50)",
				fontSize:
					"clamp(0.66045rem, 0.5920332182320442rem + 0.2919116022099448vw, 0.8255625rem)",

				// lineHeight: "var(--line-height-body) !important",
				lineHeight: "1.5",
			},
		},
		size: {
			xl: {
				fontSize: "xl",
			},
		},
	},

	defaultVariants: {
		// size: "xl",
		//
		// cant set
		// variant: "brandPrimary",
		// cant set
		// colorScheme: "brand",
	},
});
