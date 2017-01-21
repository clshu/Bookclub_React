import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Row, Col } from 'react-grid-system';

import SideBar from './SideBar';
import MainSection from './MainSection';
import LoginUser from './LoginUser';

export default class Page extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
		  <Row>
        <Col md={3}>
          <SideBar>
          </SideBar>
        </Col>
        <Col md={8}>
          <MainSection index={this.props.index} pagename={this.props.pagename}>
          </MainSection>
        </Col>
        <Col md={1}>
          <LoginUser>
          </LoginUser>
        </Col>
      </Row>
			)
	}
}