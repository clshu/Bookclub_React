import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Row, Col } from 'react-grid-system';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.handleActive = this.handleActive.bind(this);
	}
	handleActive(tab) {
		browserHistory.push(tab.props['data-route']);
	}
	render() {
		return (
	<Row>
        <Col md={8} offset={{ md: 2 }}>
		<Tabs>
    		<Tab 
    			label="Sign In" 
    			data-route="/"
    			onActive={this.handleActive}

    		>
      			
    		</Tab>
    
    		<Tab
      			label="SignUp"
      			data-route="profile"
      			onActive={this.handleActive}
    		>
      			
    		</Tab>
  		</Tabs>
  		</Col>
    </Row>
			)
	}
}