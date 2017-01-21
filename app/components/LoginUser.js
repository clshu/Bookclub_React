import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class LoginUser extends Component {
	render() {
		return (
			<div>
				<Card>
        			<CardHeader
    				title="URL Avatar"
      				subtitle="Subtitle"
      				avatar="images/kolage-128.jpg"
   					 />
   				</Card>
			</div>
			)
	}
}