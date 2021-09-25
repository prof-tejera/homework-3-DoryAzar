import { Component }  from 'react';
import Button from 'components/Button/Button';

class Pager extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentPage: this.props.currentPage || 1,
		}
	}
	
	// Sets the page
	selectPage = e => {
		this.setState({currentPage: parseInt(e.target.value)});

		// for testing purposes
		console.log(e.target.value)
	}

	// Checks if current page is the first
	isFirstPage = () => {
		return !!this.state.currentPage && this.state.currentPage === 1;
	}

	// Checks if current page is the last
	isLastPage  = () => {
		return !!this.state.currentPage && this.state.currentPage >= this.props.totalPages;
	}

	// go to next page when available
	next  = e => {
		if (!this.isLastPage()){ 
			
			this.setState({currentPage: parseInt(e.target.value)});
			
			// for testing purposes
			console.log(e.target.value);
		}
	}

	// go to previous page when available
	previous  = e => {
		if (!this.isFirstPage()) {
			
			this.setState({currentPage: parseInt(e.target.value)});
			
			// for testing purposes
			console.log(e.target.value);
		}
	}

	render() {

		// Build the list of pages
		const pages = Array.from({length: this.props.totalPages}, (_, index) => index + 1);

		// Toggle styles based on whether or not it should disable
		const toggle = (condition) => {
			return condition ? "disabled-button"  : "primary-button" ;
		}

		return (
			<div>
			<Button value={this.state.currentPage-1} classifiers={toggle(this.isFirstPage())} text="<" onClick={this.previous} />
			{pages.map((item, _) => (
				<Button value={item} text={item} key={item} onClick={this.selectPage} selected={this.state.currentPage === item}/>
			))}
			<Button value={this.state.currentPage+1} classifiers={toggle(this.isLastPage())} text=">" onClick={this.next} />
			</div>
		);
	}
}

export default Pager;
