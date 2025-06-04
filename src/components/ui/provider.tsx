"use client";

import theme from "@/styles/theme";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
	return (
		<ChakraProvider value={theme}>
			<ColorModeProvider {...props}>{props.children}</ColorModeProvider>
		</ChakraProvider>
	);
}
