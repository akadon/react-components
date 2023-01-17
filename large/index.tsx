import { useState } from 'react'
import { Provider, useSelector, useDispatch } from "react-redux";
import { addappx, deleteappx, editappx, checkedappx } from "./slice"
import { store } from "./store";

export const Monitor = (): JSX.Element => {
	const state = useSelector((state: any) => state.apps.apps);
	const dispatch = useDispatch();
	return (
		<>
			{state.map((stateitem: any) =>
				<p key={stateitem.id}>
					<input type="checkbox" id={stateitem.id} onChange={() => dispatch(checkedappx(stateitem))} />
					{stateitem.title}
				</p>
			)}
		</>
	)
}

export const Menu = (): JSX.Element => {
	const [inptext, settext] = useState("");
	const dispatch = useDispatch();
	return (
		< >
			<input value={inptext} type="text" placeholder="Text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => settext(e.target.value)} /><p></p>
			<button onClick={() => { dispatch(addappx({ title: inptext })); settext(""); }}>Add</button><p></p>
			<button onClick={() => { dispatch(editappx({ title: inptext })); settext(""); }}>Edit</button><p></p>
			<button onClick={() => { dispatch(deleteappx({})) }}> Delete</button>
		</>
	)
}

export const Component = (): JSX.Element => (
	<>
		<Provider store={store}>
			<Monitor />
			<Menu />
		</Provider>
	</>
);
