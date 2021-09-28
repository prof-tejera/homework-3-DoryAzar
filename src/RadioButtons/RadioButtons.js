import { Component } from 'react';
import Button from 'components/Button/Button';
import './RadioButtons.css';

class RadioButtons extends Component {

  
  constructor(props)  {
    super(props);
    this.state = {
      selectedOption: this.props.selectedOption || 0
    }
  }

  // Click handler that selects the option 
  selectOption = e => {
    this.setState({selectedOption: parseInt(e.target.value)});

    // for testing purposes
    console.log(e.target.attributes.text.value);
  }

  render() {
    
    const options  = this.props.options;

    return (
      <div>
        {!!options && options.map((option, index) => (
          <Button value={index} classifiers={this.state.selectedOption === index ? "selected" : "radio-button"} text={option} key={index} onClick={this.selectOption} selected={this.state.selectedOption === index}/>
        ))}
      </div>
    );
  }
}

export default RadioButtons;
