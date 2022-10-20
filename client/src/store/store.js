import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../services/pokemonSlice";
import pokemonCounterReducer from "../services/pokemonChartSlice"

export const store = configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
		counter: pokemonCounterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

