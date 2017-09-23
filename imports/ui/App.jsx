import React, { Component, PropTypes } from 'react';

import DailyLog from './DailyLog.jsx';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<h1> Application </h1>
				<DailyLog />
			</div>
		);
	}
}