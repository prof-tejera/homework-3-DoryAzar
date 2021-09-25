import { Component } from 'react';
import './Input.css';

class Input extends Component {
	render() {
		return (
			<div className="inputContainer">
				<input {...this.props} onChange={this.props.onChange}/>
			</div>
		);
	}
}

export default Input;
