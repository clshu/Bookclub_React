import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Events extends Component {
	render() {
		return (
			<div>
			<h2>Events</h2>
				<Link to="news">
					<button	type="button">Next to News Page</button>
				</Link>
			</div>
		)
	}
}
