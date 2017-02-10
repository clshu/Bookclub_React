
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveRating } from '../actions/book_actions';
import moment from 'moment';

class RatingForm extends Component{


constructor(props) {
	super(props);

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleOptionChange = this.handleOptionChange.bind(this);

	this.state ={

		text: "",
		//stars: 0,
		selectedOption: "5"

	}
	
}


handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }



handleChange(e){

	this.setState({
		[e.target.name] : e.target.value
	})

}


handleSubmit(e){

	var rating ={

		comment: this.state.text,
		stars: parseInt(this.state.selectedOption),
		ratedon : moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		MemberId : this.props.member.id,
		BookId: this.props.bookId


	};

	console.log(rating);
	this.props.saveRating(rating,this.props.member);
	this.setState({

		text: "",
		//stars: 0,
		selectedOption: "5"

	});
}
	
render(){

	return (
		   <div className="row"><div className="col s10 offset-s1">

		   		<div className="row">
                <input className="col s11 offset-s1" type="text" name= "text" value={ this.state.text } onChange={ this.handleChange} className="validate" placeholder="What do you think of the book?"></input>
                </div>
                
            	
            	<div className="stars row">
	                <input  className="col s1 offset-s2" type="radio" id="star-1" name="star" value="1" checked={this.state.selectedOption === "1" } onChange={this.handleOptionChange}/>
	                <label  className="col s2" htmlFor="star-1" title="text">1 star</label>
	                <input className="col s1" type="radio" id="star-2" name="star" value="2" checked={this.state.selectedOption === "2" } onChange={this.handleOptionChange}/>
	                <label className="col s2" htmlFor="star-2" title="text">2 star</label>
	                <input className="col s1" type="radio" id="star-3" name="star" value="3" checked={this.state.selectedOption === "3" } onChange={this.handleOptionChange} />
	                <label className="col s2" htmlFor="star-3" title="text">3 star</label>
	                <input className="col s1" type="radio" id="star-4" name="star" value="4" checked={this.state.selectedOption === "4" } onChange={this.handleOptionChange} />
	                <label className="col s2" htmlFor="star-4" title="text">4 star</label> 
	                <input className="col s1" type="radio" id="star-5" name="star" value="5" checked={this.state.selectedOption === "5" } onChange={this.handleOptionChange} />
	                <label className="col s2" htmlFor="star-5" title="text">5 star</label>
    			</div>
    			<br/>
    			<div className="row">
    				<button className="btn center col s3 offset-s5" name="action" onClick ={ this.handleSubmit }>Submit</button><br/>
            	</div>
            </div> </div>

			);
	}

}

RatingForm.propTypes = {

 member : React.PropTypes.object,
 bookId: React.PropTypes.number
}

function mapStateToProps(state,ownProps){

  
    return {

    	member: state.auth.profile,
    	bookId: ownProps.bookId
      
    }

 
}


export default connect(mapStateToProps,{ saveRating })(RatingForm);