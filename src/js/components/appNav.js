import React, { Component } from 'react';
import SearchBar from './search_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
class AppNav extends Component {
	render () {
		return (
			<div className="row">
				<div className="col s8"></div>
				<div className="col s2">
				<MuiThemeProvider>
					<SearchBar />
				</MuiThemeProvider>
				</div>
			</div>
		);
	}
}

export default AppNav;