import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import { browserHistory } from 'react-router';


import SignInUpTabs from './SignInUpTabs';
import SignUpForm from './SignUpForm';

export default class Home extends Component {
	constructor(props) {
		super(props);

    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
	}

  handleSignUpSubmit(values) {
    // Authtication: 
    console.log(values);
    browserHistory.push("/news");

  }
	render() {
		return (
	<Row>
      <Col md={8} offset={{ md: 2 }}>
		  <SignInUpTabs index="1" />
  		  <SignUpForm onSubmit={this.handleSignUpSubmit}/>
  		</Col>
    </Row>
			)
	}
}