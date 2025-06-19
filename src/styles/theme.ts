/* theme.ts */

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { linkRecipe } from "./components/link.recipe";
import { buttonRecipe } from "./components/button.recipe";
import { containerRecipe } from "./components/container.recipe";
import { inputSlotRecipe } from "./components/input.recipe";
import { accordionSlotRecipe } from "./components/accordion.recipe";
import { listSlotRecipe } from "./components/list.recipe";
import { modalSlotRecipe } from "./components/modal.recipe";

export const config = defineConfig({
	globalCss: {
		"html, body": {
			margin: 0,
			padding: 0,
			// background
			backgroundColor: {
				_light: "{colors.gray.50}",
				// _dark: "{colors.gray.800}",
				_dark: "{colors.gray.900}",
			},
			// foreground
			color: {
				_light: "{colors.gray.900}",
				_dark: "{colors.whiteAlpha.900}",
			},
			scrollBehavior: "smooth",
		},
		"section[id]": {
			// Target any section with an ID
			scrollMarginTop: "60px", // Adjust this value to match your header's height + desired padding
		},
	},
	theme: {
		tokens: {
			fonts: {
				// heading: { value: `'Inter', sans-serif` }, // A clean, contemporary sans-serif
				heading: { value: `var(--font-inter)` },
				// body: { value: `'Roboto', sans-serif` }, // Readable body text
				body: { value: `var(--font-roboto)` },
			},
			colors: {
				// Breaking down the original 'brand' colors into more semantic categories
				black: { value: "#1a202c" }, // From original brand.900
				white: { value: "#f7fafc" }, // From original brand.100
				gray: {
					900: { value: "#1a202c" }, // Darkest gray (same as black for consistency with Chakra's gray scale)
					800: { value: "#2d3748" },
					700: { value: "#4a5568" },
					600: { value: "#718096" },
					500: { value: "#a0aec0" }, // Mid-range gray
					400: { value: "#cbd5e0" },
					300: { value: "#e2e8f0" },
					200: { value: "#edf2f7" },
					100: { value: "#f7fafc" }, // Lightest gray (same as white for consistency)
					50: { value: "#f7fafc" }, // Even lighter for subtle backgrounds
				},
				purple: {
					// New purple palette for the hero section
					50: { value: "#F5EDFF" },
					100: { value: "#E0CCFF" },
					200: { value: "#C299FF" },
					300: { value: "#A366FF" },
					400: { value: "#8533FF" },
					500: { value: "#6600FF" }, // Primary purple
					600: { value: "#5200CC" },
					700: { value: "#3D0099" },
					800: { value: "#290066" },
					900: { value: "#140033" },
				},

				// 	/* 3 - A scale of neutral colors */
				neutral: {
					white: { value: "white" },
					black: { value: "black" },
				},
				brand: {
					// text: {
					// 	base: "#111111",
					// 	// oppacity diffs

					// },

					// bg: {
					// 	base: "#ffffff",
					// },

					// 	/* 1 - The main/primary color  */
					// Electric Blues/Teals
					primary: { value: "#00B5AD" }, // Teal
					secondary: { value: "#00A4E6" }, // Electric Blue

					// 	/* The accent color */
					// Energetic Greens/Lime
					accent: {
						// 	--english-green-color: #1b4d3e;
						Green: { value: "#38A169" },
						Lime: { value: "#A2E05B" },
					},

					// Vibrant Orange/Coral
					highlightOrange: { value: "#F56565" }, // Coral
					highlightCoral: { value: "#ED8936" }, // Orange

					// Base Grays
					gray: {
						lightGray: { value: "#F7FAFC" },
						mediumGray: { value: "#A0AEC0" },
						darkGray: { value: "#2D3748" },
					},
				},

				// 	/*4 - Feedback colors → success, error, warning. */

				/// semantic
			},

			animations: {
				headerBg: { value: "motionBox1 0.5s ease-in-out 1" },
				heroBg: { value: "motionBox2 0.8s ease-in-out 0.2s 1" },
				heroHeading: {
					value: "motionHeading1 0.6s ease-in-out 0.4s 1",
				},
				heroText: { value: "motionText1 0.6s ease-in-out 0.6s 1" },
				heroBtn: { value: "motionButton1 0.6s ease-in-out 0.8s 1" },
				heroIllustration: {
					value: "motionBox3 0.6s ease-in-out 0.4s 1",
				},
				//
				servicesCard: {
					value: "motionBox4 0.3s 1 forwards",
				},
				//
				shakeX: { value: "shakeX 1s ease-in-out infinite" },
				moBox1: { value: "motionBox1 0.8s ease-in-out 1" },
				moBox2: { value: "motionBox2 0.8s ease-in-out 1" },
				moBox3: { value: "motionBox3 0.5s ease-in-out 1" },
			},
		},

		semanticTokens: {
			colors: {
				// You can define primary, secondary, and accent based on these palettes
				primary: { solid: { value: "purple.500" } }, // Example: Using purple as the primary color
				secondary: { value: "gray.700" }, // Example: Using a dark gray for secondary elements
				accent: { value: "purple.300" }, // Example: Using a lighter purple for accent

				header: {
					bg: {
						value: {
							_light: "{colors.white}",
							_dark: "{colors.gray.900}",
						},
					},
					text: {
						value: {
							_light: "{colors.gray.800}",
							_dark: "{colors.white}",
							// _light: "whiteAlpha.900",
						},
					},
					border: {
						value: {
							_light: "{colors.gray.200}",
							_dark: "{colors.gray.700}",
							// _light: "whiteAlpha.900",
						},
					},
					"button-bg": {
						value: {
							_light: "{colors.black}",
							_dark: "{colors.white}",
						},
					},
					"button-bg-hover": {
						value: {
							_light: "{colors.gray.700}",
							_dark: "{colors.gray.200}",
						},
					},
					"button-text": {
						value: {
							_light: "{colors.white}",
							_dark: "{colors.black}",
						},
					},
				},

				hero: {
					// bg: {
					// 	value: {
					// 		_light: "{colors.purple.50}",
					// 		_dark: "{colors.purple.900}",
					// 	},
					// },
					text: {
						value: {
							// _light: "{colors.gray.800}",
							_light: "{colors.gray.900}",
							_dark: "{colors.whiteAlpha.900}",
							// _light: "whiteAlpha.900",
						},
					},
					border: {
						value: {
							_light: "{colors.gray.200}",
							_dark: "{colors.gray.700}",
							// _light: "whiteAlpha.900",
						},
					},
					"button-bg": {
						value: {
							_light: "{colors.black}",
							_dark: "{colors.white}",
						},
					},
					"button-bg-hover": {
						value: {
							_light: "{colors.gray.700}",
							_dark: "{colors.gray.200}",
						},
					},
					"button-text": {
						value: {
							_light: "{colors.white}",
							_dark: "{colors.black}",
						},
					},
				},

				services: {
					"section-title": {
						value: {
							_light: "{colors.gray.800}",
							_dark: "{colors.whiteAlpha.900}",
						},
					},
					card: {
						bg: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.gray.700}",
							},
						},
						icon: {
							value: {
								_light: "{colors.purple.500}",
								_dark: "{colors.purple.300}",
							},
						},
						text: {
							value: {
								_light: "{colors.gray.800}",
								_dark: "{colors.whiteAlpha.900}",
							},
						},
					},
				},

				portfolio: {
					"section-title": {
						value: {
							_light: "{colors.gray.800}",
							_dark: "{colors.whiteAlpha.900}",
						},
					},
					card: {
						bg: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.gray.700}",
							},
						},
						text: {
							value: {
								_light: "{colors.gray.800}",
								_dark: "{colors.whiteAlpha.900}",
							},
						},
						banner: {
							bg: {
								value: {
									_light: "{colors.gray.200}",
									_dark: "{colors.gray.600}",
								},
							},
							text: {
								value: {
									_light: "{colors.gray.600}",
									_dark: "{colors.gray.300}",
								},
							},
						},
						link: {
							bg: {
								value: {
									_light: "{colors.gray.200}",
									_dark: "{colors.gray.600}",
								},
							},
							text: {
								value: {
									_light: "{colors.purple.500}",
									_dark: "{colors.purple.300}",
								},
							},
						},
					},
					tag: {
						bg: {
							value: {
								_light: "{colors.purple.50}",
								_dark: "{colors.purple.800}",
							},
						},
						text: {
							value: {
								_light: "{colors.purple.500}",
								_dark: "{colors.purple.300}",
							},
						},
					},
				},

				cta: {
					bg: {
						value: {
							_light: "{colors.black}",
							_dark: "{colors.gray.900}",
						},
					},
					text: {
						value: {
							_light: "{colors.white}",
							_dark: "{colors.whiteAlpha.900}",
						},
					},
					button: {
						bg: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.white}",
							},
						},
						text: {
							value: {
								_dark: "{colors.black}",
								_light: "{colors.black}",
							},
						},
						"bg-hover": {
							value: {
								_dark: "#edf2f7",
								_light: "#4a5568",
							},
						},
					},
				},

				footer: {
					bg: {
						value: {
							_light: "{colors.white}",
							_dark: "{colors.gray.900}",
						},
					},
					text: {
						value: {
							_light: "{colors.gray.800}",
							_dark: "{colors.whiteAlpha.900}",
						},
					},
					link: {
						value: {
							_light: "{colors.gray.600}",
							_dark: "{colors.gray.400}",
						},
					},
					border: {
						value: {
							_light: "{colors.gray.200}",
							_dark: "{colors.gray.700}",
						},
					},
				},
			},
		},

		keyframes: {
			shakeX: {
				"0%, 100%": { transform: "translateX(-100%)" },
				"50%": { transform: "translateX(100%)" },
			},
			motionBox1: {
				"0%": { transform: "translateY(-100%)" },
				"100%": { transform: "translateY(0)" },
			},
			motionBox2: {
				"0%": { scale: 0.95, opacity: 0 },
				"100%": { scale: 1, opacity: 1 },
			},
			motionBox3: {
				"0%": { transform: "translateX(50%)", opacity: 0 },
				"100%": { transform: "translateX(0)", opacity: 1 },
			},
			motionBox4: {
				"100%": {
					scale: 1.03,
					opacity: 1,
					boxShadow: "xl",
					// shadow: "xl",
				},
			},
			motionHeading1: {
				"0%": { transform: "translateX(-50%)", opacity: 0 },
				"100%": { transform: "translateX(0)", opacity: 1 },
			},
			motionText1: {
				"0%": { transform: "translateX(-50%)", opacity: 0 },
				"100%": { transform: "translateX(0)", opacity: 1 },
			},
			motionButton1: {
				"0%": { transform: "translateY(20%)", opacity: 0 },
				"100%": { transform: "translateY(0)", opacity: 1 },
			},
		},

		// components
		// one element components
		recipes: {
			container: containerRecipe,
			//
			link: linkRecipe,
			button: buttonRecipe,
			//
		},
		// multi element components
		slotRecipes: {
			accordion: accordionSlotRecipe,
			input: inputSlotRecipe,
			List: listSlotRecipe,
			modal: modalSlotRecipe,
		},
	},
});

export default createSystem(defaultConfig, config);

// :root {
// 	--primary-font-size: 0.9rem !important;

// 	--page-inline-spacing: 25px;
// 	--page-block-spacing: 40px;

// @media (min-width: 750px) {

// 		--page-inline-spacing: 55px;
// 		--page-block-spacing: 30px;

// }
// }
