import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';


export default class SignInUpTabs extends Component {
	constructor(props) {
		super(props);
		this.handleActive = this.handleActive.bind(this);
	}
	handleActive(tab) {
		browserHistory.push(tab.props['data-route']);
	}
	render() {
		return (
		<Tabs initialSelectedIndex={parseInt(this.props.index)}>
    		<Tab 
    			label="Sign In" 
    			data-route="/"
    			onActive={this.handleActive}
    		>     			
    		</Tab>   
    		<Tab
      			label="Sign Up"
      			data-route="signup"
      			onActive={this.handleActive}
    		>   			
    		</Tab>
  		</Tabs>
			)
	}
}