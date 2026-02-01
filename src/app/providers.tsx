"use client";

import { Provider } from "@/components/ui/provider";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider
		//  theme={theme}
		>
			{children}
		</Provider>
	);
}
