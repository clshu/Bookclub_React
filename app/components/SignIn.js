import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Row, Col } from 'react-grid-system';

import SignInUpTabs from './SignInUpTabs';
import SignInForm from './SignInForm';

export default class SignIn extends Component {
	constructor(props) {
		super(props);

    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
	}

  handleSignInSubmit(values) {
    // Do something with the form values
    console.log(values);
  }
	render() {
		return (
	<Row>
      <Col md={8} offset={{ md: 2 }}>
		    <SignInUpTabs />
  		  <SignInForm onSubmit={this.handleSignInSubmit}/>
  		</Col>
    </Row>
			)
	}
}