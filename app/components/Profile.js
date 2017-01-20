import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Profile extends Component {
	render() {
		return (
			<div>
			<h2>Profile!</h2>
				<Link to="news">
					<button	type="button">Next to News Page</button>
				</Link>
			</div>
		)
	}
}
