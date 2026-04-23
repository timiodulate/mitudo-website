import { configureStore } from "@reduxjs/toolkit";
import { genesisApi } from "@/services/mitudoApi";

export const store = configureStore({
	reducer: {
		[genesisApi.reducerPath]: genesisApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(genesisApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
