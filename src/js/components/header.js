import React, { Component } from 'react';
import logo from '/Users/Thanhng/Documents/react-projects/my-page/src/img/logo.svg';
import '/Users/Thanhng/Documents/react-projects/my-page/src/css/App.css';
import '/Users/Thanhng/Documents/react-projects/my-page/src/css/Header.css';

class Header extends Component {
	render() {
		return (
			<div className="App-header">
				<div className="logo">
          		<img src={logo} className="App-logo" alt="logo" />
          		</div>
          		<h2>Welcome to React</h2>
        	</div>
        )
	}
}

export default Header;