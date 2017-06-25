import React, { Component } from 'react';
import logo from '/Users/Thanhng/Documents/react-projects/my-page/src/img/logo.svg';
import '/Users/Thanhng/Documents/react-projects/my-page/src/css/App.css';
import '/Users/Thanhng/Documents/react-projects/my-page/src/css/Header.css';

class Header extends Component {
	render() {
		return (
			<div className="App-header row">
				<div className="logo col s1">
          			<img src={logo} className="App-logo" alt="logo" />
          		</div>
          		<div className="col s4">
          			<h5 className="brand-logo">My Page</h5>
          		</div>
        	</div>
        )
	}
}

export default Header;