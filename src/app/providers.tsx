"use client";

import { Provider } from "@/components/ui/provider";
import { StoreProvider } from "@/store/provider";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider
		//  theme={theme}
		>
			<StoreProvider>{children}</StoreProvider>
		</Provider>
	);
}
