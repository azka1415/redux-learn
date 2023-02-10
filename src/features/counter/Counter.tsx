import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="z-10 flex flex-col text-center w-[50rem] bg-pink-400 h-[30rem] rounded-2xl p-2 shadow-2xl border-none outline-none">
			<div className="text-5xl flex flex-col font-bold h-full justify-center items-center">
				<h1>{count}</h1>
			</div>
			<div className="h-20 flex flex-row justify-between items-center p-2 font-semibold">
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
					className="action-button"
				>
					Decrement
				</button>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
					className="action-button"
				>
					Increment
				</button>
			</div>
		</div>
	);
}
