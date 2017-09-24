import React, { Component } from 'react';

import DailyLog from './DailyLog.jsx';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<DailyLog date={new Date()}/>
			</div>
		);
	}
}