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
    //console.log(values);
    browserHistory.push("news");
  }
	render() {
		return (
	<Row>
      <Col md={8} offset={{ md: 2 }}>
		    <SignInUpTabs index="0" />
  		  <SignInForm onSubmit={this.handleSignInSubmit}/>
  		</Col>
    </Row>
			)
	}
}