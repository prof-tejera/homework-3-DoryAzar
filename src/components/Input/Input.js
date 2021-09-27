import { Component } from 'react';
import './Input.css';

class Input extends Component {
	render() {
		
		const { onChange, ...inputAttributes} = this.props;
		
		return (
			<div className="inputContainer">
				<input {...inputAttributes} onChange={onChange}/>
			</div>
		);
	}
}

export default Input;
