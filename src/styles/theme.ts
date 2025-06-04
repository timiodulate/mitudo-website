/* theme.ts */

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// import { listTheme } from "./components/list";
// import { accordionTheme } from "./components/accordion";
// import { buttonTheme } from "./components/button";
// import { inputTheme } from "./components/input";
// import { containerTheme } from "./components/container";
// import { linkTheme } from "./components/link";
// import { modalTheme } from "./components/modal";

export const config = defineConfig({
	theme: {
		tokens: {
			fonts: {
				// heading: { value: "var(--font-geist-sans)" },
				// body: { value: "var(--font-geist-mono)" },
				heading: { value: `'Inter', sans-serif` }, // A clean, contemporary sans-serif
				body: { value: `'Roboto', sans-serif` }, // Readable body text
			},
			colors: {
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
			},

			animations: {
				shakeX: { value: "shakeX 1s ease-in-out infinite" },
				moBox1: { value: "motionBox1 0.8s ease-in-out 1" },
				moBox2: { value: "motionBox2 0.8s ease-in-out 1" },
				moBox3: { value: "motionBox3 0.5s ease-in-out 1" },
			},
		},

		keyframes: {
			shakeX: {
				"0%, 100%": { transform: "translateX(-100%)" },
				"50%": { transform: "translateX(100%)" },
			},
			motionBox1: {
				"0%": { transform: "translateY( -20)", opacity: 0 },
				"100%": { transform: "translateY(0)", opacity: 1 },
			},
			motionBox2: {
				"0%": { transform: "translateY( -20)", opacity: 0 },
				"100%": { transform: "translateY(0)", opacity: 1 },
			},
			motionBox3: {
				"0%": { scale: 0.8, opacity: 0 },
				"100%": { scale: 1, opacity: 1 },
			},
		},

		// recipes: {
		// 	container: containerTheme,
		// 	//
		// 	link: linkTheme,
		// 	button: buttonTheme,
		// 	List: listTheme,
		// 	accordion: accordionTheme,
		// 	input: inputTheme,
		// 	modal: modalTheme,
		// },
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
