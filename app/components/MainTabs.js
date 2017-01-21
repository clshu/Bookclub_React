import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';


export default class MainTabs extends Component {
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
    			label="News" 
    			data-route="news"
    			onActive={this.handleActive}
    		>     			
    		</Tab>   
    		<Tab
      			label="Members"
      			data-route="members"
      			onActive={this.handleActive}
    		>   			
    		</Tab>
        <Tab
            label="Events"
            data-route="events"
            onActive={this.handleActive}
        >         
        </Tab>
        <Tab
            label="Library"
            data-route="library"
            onActive={this.handleActive}
        >         
        </Tab>
  		</Tabs>
			)
	}
}