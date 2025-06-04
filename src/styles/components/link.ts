import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const xl = defineStyle({
	fontSize: "xl",
});

// Now we can use the new `xl` size
// <Link size="xl">...</Link>

const brandPrimary = defineStyle({
	textDecoration: "underline",
	// color: "white",
	// fontFamily: "serif",
	// fontWeight: "normal",

	// let's also provide dark mode alternatives
	_dark: {
		color: "orange.800",
	},
});

const plain = defineStyle({
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
});

// Now we can use the new `brandPrimary` variant
// <Link variant="brandPrimary">...</Link>

export const linkTheme = defineStyleConfig({
	defaultProps: {
		size: "xl",
		variant: "brandPrimary",
		colorScheme: "brand",
	},
	// This saves you time, instead of manually setting the size,
	// variant and color scheme every time you use a Link component:
	// <Link size="xl" variant="brandPrimary" colorScheme="brand">...</Link>
	sizes: { xl },
	variants: { brandPrimary, plain },
});
