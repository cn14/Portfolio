import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
	return (
		<Navbar expand="lg">
			<NavLink className="navbar-brand" to="/aboutme">
				Chethan
			</NavLink>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<NavLink
						className="nav-link"
						activeClassName="active__class"
						to="/aboutme"
					>
						About Me
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="active__class"
						to="/projects"
					>
						Projects
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="active__class"
						to="/skills"
					>
						Skills
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="active__class"
						to="/contactme"
					>
						Contact Me
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
