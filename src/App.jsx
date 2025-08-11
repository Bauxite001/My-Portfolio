import { Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import Resume from "./routes/Resume";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/Resume" element={<Resume />} />
			</Routes>
		</>
	);
}
export default App;
