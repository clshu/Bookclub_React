import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePost } from '../actions/post_actions';
import moment from 'moment';

class NewPostForm extends Component{


constructor(props) {
	super(props);

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this)
;
	this.state ={

		text: ""

	}
	
}



handleChange(e){

	this.setState({
		[e.target.name] : e.target.value
	})

}


handleSubmit(e){

	this.props.savePost({

		content: this.state.text,
		postedon : moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		MemberId : this.props.MemberId


	})
}
	
render(){

	return (
		   <div className="input-field">
                <input id="newsPost" type="text" name= "text" value={ this.state.text } onChange={ this.handleChange} className="validate" placeholder="What's on your mind?"></input>
               
                <hr/>
                <button className="btn-sm right" name="action" onClick ={ this.handleSubmit }>Submit</button><br/>
            </div>

			);
	}

}

NewPostForm.propTypes = {

  MemberId : React.PropTypes.number

 
}

function mapStateToProps(state){

  
    return {

    	MemberId: state.auth.profile.id
      
    }

 
}


export default connect(mapStateToProps,{ savePost })(NewPostForm);