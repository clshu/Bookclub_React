import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Members extends Component {
	render() {
		return (
			<div>
			<h2>Members</h2>
				<Link to="news">
					<button	type="button">Next to News Page</button>
				</Link>
			</div>
		)
	}
}
