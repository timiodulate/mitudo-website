import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	variable: "--font-inter",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

const roboto = Roboto({
	variable: "--font-roboto",
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

const poppings = Poppins({
	variable: "--font-poppings",
	weight: ["500", "600", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Mitudo Agency",
	description: "Top provider of digital solutions for your businesses.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${roboto.variable} ${poppings.variable} antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
