import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class SideBar extends Component {
	
	render() {
		
        return (
        	<div>
        		<Card>
        		</Card>
        			<CardTitle title="Card title" subtitle="Card subtitle" />
        			<RaisedButton primary={true} label="Action1" />
        		<Card>
        			<CardHeader
    				title="URL Avatar"
      				subtitle="Subtitle"
      				avatar="images/3435aa3.jpg"
   					 />

    				<CardTitle title="Card title" subtitle="Card subtitle" />
    				<CardText>
      
    				</CardText>
    				<CardActions>
      					
      					<RaisedButton primary={true} label="Action2" />
   					 </CardActions>
        		</Card>
        	</div>
        	)
	
	}
}