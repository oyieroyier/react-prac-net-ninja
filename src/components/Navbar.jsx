import React from "react";
// import Button from "./components/Button";
// import Login from "./components/Login";
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<div className="header">
				<h1 className="h1">React.js Blog</h1>
				{/* <Login /> */}
				{/* <Button /> */}
				<nav className="navbar-menu">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/create">New Blogs</Link>
					</li>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
