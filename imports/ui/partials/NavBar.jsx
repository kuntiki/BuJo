import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<header>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">Bullet Journal</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="/index">Index</a></li>
							<li><a href="/monthly">Monthly Log</a></li>
							<li><a href="/daily">Daily Log</a></li>
						</ul>
					</div> 
				</nav>
			</header>
		);
	}
}