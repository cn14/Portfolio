import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
	return (
		<div className="app">
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/aboutme" component={Home} />
					<Route exact path="/projects" component={Project} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/contactme" component={Contact} />
					<Redirect to="/aboutme" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
