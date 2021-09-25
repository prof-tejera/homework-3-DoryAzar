import { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    const { classifiers, selected, ...buttonAttributes } = this.props;
	if (selected) {
		return <button className={classifiers ?  `${classifiers}`: "selected-button"} {...buttonAttributes}>{this.props.text}</button>
	} else {
		return <button className={classifiers ?? "default-button"} onClick={this.props.onClick} {...buttonAttributes}>{this.props.text}</button>
	}
  }
}

export default Button;
