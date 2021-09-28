import { Component } from 'react';
import './Input.css';

class Input extends Component {
	render() {
		
		return (
			<div className="inputContainer">
				<input {...this.props} />
			</div>
		);
	}
}

export default Input;
