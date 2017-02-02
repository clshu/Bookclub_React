// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { despatchAuthSignup } from '../actions/auth_actions';
import { Link } from 'react-router';

// create the component
class Signup extends Component {



 constructor(props) {
	  super(props);

	  this.state = {



	   signupEmail: "",
	   signupPassword : "",
	   signupUsername:"",
	   signupMessage: this.props.signupMessage

    };

    this.handleSignup = this.handleSignup.bind(this);

	}

  componentWillReceiveProps(nextProps){
  	if(nextProps.isLoggedIn){
  		//browserHistory.replace(this.props.redirectUrl);
  		browserHistory.push('/app');
  	}
    this.setState({
    				
    			    signupMessage: nextProps.signupMessage
    			});
  }

  handleChange(e){

    this.setState({ [e.target.name] : e.target.value})

  }



    handleSignup(e){

    if(this.state.signupEmail && this.state.signupPassword && this.state.signupUsername){

     this.props.despatchAuthSignup({

      email: this.state.signupEmail,
      password: this.state.signupPassword,
      username: this.state.signupUsername
      
    });

     

    }else{

    	 this.setState({ signupMessage: "Enter all fields" });
    }
    
  }

	// return html to be rendered
	render() {



		return (
			<div className="row valign-wrapper">
				

	

				<div className="col s5 card offset-s3">

						<div className="row center"> New member? Signup</div>

						<div className="row">
								<input type="text"  name="signupEmail"  value={this.state.signupEmail}  onChange={this.handleChange.bind(this)} className="cursiveFont col s8 offset-s2" placeholder="email"/>
						</div>
						<div className="row">
							 <input type="password"   name="signupPassword"  value={this.state.signupPassword}  onChange={this.handleChange.bind(this)} className="cursiveFont col s8 offset-s2" placeholder="password"/>
						</div>

						<div className="row">
							 <input type="text"  name="signupUsername"  value={this.state.signupUsername}  onChange={this.handleChange.bind(this)} className="cursiveFont col s8 offset-s2" placeholder="username"/>
						</div>


					<div className="row">
						  <a onClick={this.handleSignup} className="waves-effect waves-light btn flat col s4 offset-s4">Signup</a>
					</div>

						<div className="row center">
							 {this.state.signupMessage}
						</div>
					
					<div className="row center"><Link to="/login">Already a member? Login</Link></div>

				</div>


			</div>


		);
	}
}

Signup.propTypes = {

  
   signupMessage : React.PropTypes.string

}

function mapStateToProps(state){
  return {
  
    signupMessage: state.auth.signupMessage,
    isLoggedIn: state.auth.isLoggedIn,
    redirectUrl: state.auth.redirectUrl

  } 
}


export default connect(mapStateToProps,{ despatchAuthSignup})(Signup);