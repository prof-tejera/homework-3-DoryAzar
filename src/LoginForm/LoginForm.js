import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import './LoginForm.css';

class LoginForm extends Component {

	// Handle Events
	handleClick = e => {
		console.log(e.target.value);
	}

	handleOnChange = e => {
		
		// for testing purposes
		console.log(`${e.target.id}: ${e.target.value}`);
	}

	render() {
		return (
			<Panel border={true}>
			<Input id="username" placeholder="username" onChange= {this.handleOnChange} />
			<Input id="password" type="password" placeholder="password" onChange= {this.handleOnChange} />
			<Button value="Login" classifiers="primary-button" text="Login" onClick={this.handleClick} />
			<p className="instruction-text">Not Registered?  <a href="/" className="instruction-text">Create an account</a></p>
			</Panel>
		);
	}
}

export default LoginForm;
