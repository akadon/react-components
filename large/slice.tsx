import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { apps: [] };

const appslice = createSlice({
	name: "apps",
	initialState,
	reducers: {
		addappx: (state: any, action: any) => {
			var paylo = { id: Math.random(), selected: false }
			state.apps.push(Object.assign(paylo, action.payload));
		},
		deleteappx: (state: any, action: any) => {
			state.apps = state.apps.filter((appx: any) => appx.selected == false);
		},
		checkedappx: (state: any, action: any) => {
			state.apps = state.apps.map((appx: any) =>
				(appx.id === action.payload.id) ?
					{ ...appx, selected: !appx.selected }
					: { ...appx, selected: appx.selected }
			);
		},
		editappx: (state: any, action: any) => {
			state.apps = state.apps.map((appx: any) =>
				(appx.selected == true) ?
					{ ...appx, title: action.payload.title }
					: { ...appx }
			);
		},
	},
});

export const { addappx, deleteappx, editappx, checkedappx } = appslice.actions;
export default appslice.reducer;
