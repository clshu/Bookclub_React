import React, { Component } from 'react';
import { Link } from 'react-router';

export default class News extends Component {
	render() {
		return (
			<div>
			<h2>News</h2>
				<Link to="news">
					<button	type="button">Next to News Page</button>
				</Link>
			</div>
		)
	}
}
