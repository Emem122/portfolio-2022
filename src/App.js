// import { AnimatePresence } from "framer-motion";
// import { useState } from "react";
import { Switch, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
// import { useLocation } from "react-router";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorksPage from "./components/WorksPage";
import SkillsPage from "./components/SkillsPage";
import { useEffect, useState } from "react";

function App() {
	const location = useLocation();
	const [_, rootPath] = location.pathname.split("/");
	// const [open, setOpen] = useState(false);

	return (
		<div className="App">
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={rootPath}>
					<Route exact path="/" component={Main} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/works" component={WorksPage} />
					<Route exact path="/skills" component={SkillsPage} />
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
