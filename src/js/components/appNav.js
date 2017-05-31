import React, { Component } from 'react';
import $ from 'jquery';

class AppNav extends Component {
	componentDidMount () {
        $('.carousel').carousel();
    }
	render () {
		return (
			<div className="carousel">
				<a class="carousel-item" href="#one!"><img alt=":(" src="http://lorempixel.com/250/250/nature/1" /></a>
			    <a class="carousel-item" href="#two!"><img alt=":(" src="http://lorempixel.com/250/250/nature/2" /></a>
			    <a class="carousel-item" href="#three!"><img alt=":(" src="http://lorempixel.com/250/250/nature/3" /></a>
			    <a class="carousel-item" href="#four!"><img alt=":(" src="http://lorempixel.com/250/250/nature/4" /></a>
			    <a class="carousel-item" href="#five!"><img alt=":(" src="http://lorempixel.com/250/250/nature/5" /></a>
			</div>
		);
	}
}

export default AppNav;