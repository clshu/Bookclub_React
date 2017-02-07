import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveRating } from '../actions/book_actions';
import moment from 'moment';

class RatingForm extends Component{


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

		comment: this.state.text,
		ratedon : moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		MemberId : this.props.memberId,
		BookId: this.props.bookId


	});
}
	
render(){

	return (
		   <div className="input-field valign-wrapper">
                <input type="text" name= "text" value={ this.state.text } onChange={ this.handleChange} className="validate" placeholder="What do you think of the book?"></input>
               
                
                <button className="btn right valign-bottom" name="action" onClick ={ this.handleSubmit }>Submit</button><br/>
            	
            </div>

			);
	}

}

RatingForm.propTypes = {

 memberId : React.PropTypes.number,
 bookId: React.PropTypes.number
}

function mapStateToProps(state,ownProps){

  
    return {

    	memberId: state.auth.profile.id,
    	bookId: ownProps.bookId
      
    }

 
}


export default connect(mapStateToProps,{ saveRating })(RatingForm);