import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Weather from "./components/Weather/Weather";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/weather/:countryName" element={<Weather />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
