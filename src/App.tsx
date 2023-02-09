import { useState } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";

function App() {
	return (
		<div className="App">
			<div>
				<Counter />
			</div>
		</div>
	);
}

export default App;
