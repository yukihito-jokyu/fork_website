import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Language from "./pages/Test/Language/Language";
import Redux from "./pages/Test/Redux/Redux";
import ReduxApi from "./pages/Test/Redux/ReduxApi";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<div>About</div>} />
				<Route path="/test/language" element={<Language />} />
				<Route path="/test/redux" element={<Redux />} />
				<Route path="/test/redux/api" element={<ReduxApi />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
