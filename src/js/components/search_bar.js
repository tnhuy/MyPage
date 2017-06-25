import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
	}
	render() {
		return(
			<div>
				<TextField 
					id='search-bar'
					value={this.state.term}
					onChange={event => this.setState({term: event.target.value})} />
			</div>
		);
	}
}

export default SearchBar;