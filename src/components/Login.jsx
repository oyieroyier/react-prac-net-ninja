import React from "react";

const Login = () => {
	function removeLogin(e) {
		e.preventDefault();
		const login = document.getElementById("login-page");
		const navbar = document.getElementById("navbar-menu");

		login.remove();
		// login.style.display = "none";
		navbar.style.display = "flex";
	}

	return (
		<div id="fom">
			<form action="" id="login-page">
				<input
					type="email"
					placeholder="Email"
					className="input"
					required={true}
				/>
				<input
					type="password"
					name=""
					id=""
					placeholder="Password"
					className="input"
				/>
				<button type="submit" className="btn" onClick={removeLogin}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
