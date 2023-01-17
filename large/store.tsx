import { configureStore } from "@reduxjs/toolkit";
import appsReducer from "./slice";

export const store = configureStore({
	reducer: {
		apps: appsReducer,
	},
});
