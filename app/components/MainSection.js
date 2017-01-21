import React, { Component } from 'react';
import MainTabs from './MainTabs';

export default class MainSection extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<div>
				<MainTabs index={this.props.index}/>
				<h4>{this.props.pagename}</h4>
			</div>
			)
	}
}
