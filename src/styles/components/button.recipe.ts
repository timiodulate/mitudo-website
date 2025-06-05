import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
	base: {
		borderRadius: "full",
	},
	variants: {
		visual: {
			outline: {
				borderColor: "{colors.black}",
				// borderColor: mode('black', 'white')(props),
				color: "{colors.black}",
				// color: mode('black', 'white')(props),
				_hover: {
					bg: "{colors.gray.100}",
					//   bg: mode('gray.100', 'whiteAlpha.200')(props),
				},
				_dark: {
					borderColor: "{colors.white}",
					color: "{colors.white}",

					_hover: { bg: "{colors.whiteAlpha.200}" },
				},
			},
			solid: {
				// Use 'black' for solid buttons in light mode, 'white' in dark mode
				bg: "{colors.black}",
				// bg: mode("black", "white")(props),
				color: "{colors.white}",
				// color: mode("white", "black")(props),
				_hover: {
					bg: "{colors.gray.700}",
					// bg: mode("gray.700", "gray.200")(props),
				},
			},

			brandPrimary: {
				background: "orange.500",
				color: "white",
				fontFamily: "serif",
				fontWeight: "normal",

				// let's also provide dark mode alternatives
				_dark: {
					background: "orange.300",
					color: "orange.800",
				},
			},

			brandWhite: {
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
			},

			bland: {
				fontWeight: "normal", // change the font weight

				borderRadius: `initial`,
				py: 0,
				px: `0 !important`,

				background: "initial",

				color: "initial",
				w: "fit-content",
				minW: "fit-content",
			},
		},
		size: {
			xl: {
				// fontSize: "xl",
				// px: "6",
				// h: "16",
				// borderRadius: "md",
			},
		},
	},

	defaultVariants: {
		// size: "xl",
		// size: "lg",
		// cant set
		// variant: "solid",
		// cant set
		// colorScheme: "brand",
	},
});
