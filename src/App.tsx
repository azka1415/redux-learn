import { Counter } from "./features/counter/Counter";

function App() {
	return (
		<div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
			<div className="bg-yellow-500 w-[100vw] h-[60vh] absolute z-0 inset-0"></div>
			<Counter />
		</div>
	);
}

export default App;
