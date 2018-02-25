import React from 'react';
import TextField from 'material-ui/TextField';

const handleLogin = (event) => {
	event.preventDefault();
	//Authenticate
}

const handleRegistration = (event) => {
	event.preventDefault();
}

const LoginForm = () => (
	<div>
		<h1>Login</h1>
		<form onSubmit={handleLogin}>
			<TextField
				name="email"
				defaultValue=""
				floatingLabelText="Please enter your email"
			/>
			<TextField
				name="password"
				defaultValue=""
				floatingLabelText="Please enter your password"
				type="password"
			/>
			<input type="submit"/>
		</form>
		<h1>Register</h1>
		<form onSubmit={handleRegistration}>
			<TextField
				name="username"
				defaultValue=""
				floatingLabelText="Please enter a valid MQ email"
				errorText="This field is required"
			/>
			<TextField
				name="password"
				defaultValue=""
				floatingLabelText="Please enter a valid password"
				type="password"
				errorText="This field is required"
			/>
			<TextField
				name="repeat-password"
				defaultValue=""
				floatingLabelText="Please repeat your password"
				type="password"
				errorText="This field is required"
			/>
			<TextField
				name="uva-id"
				defaultValue=""
				floatingLabelText="Please enter a Uva ID (Optional)"
			/>
			<TextField
				name="spoj-id"
				defaultValue=""
				floatingLabelText="Please enter an SPOJ ID (Optional)"
			/>
		</form>
	</div>
);

export default LoginForm;