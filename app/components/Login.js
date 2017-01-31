// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { despatchAuthLogin, despatchAuthSignup } from '../actions/auth_actions';

// create the component
class Login extends Component {



 constructor(props) {
	  super(props);

	  this.state = {

	    loginEmail: "bhagya@bhagya.com",
	    loginPassword : "bhagya",
	    loginMessage:this.props.loginMessage,


	   signupEmail: "",
	   signupPassword : "",
	   signupUsername:"",
	   signupMessage: this.props.signupMessage

    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

	}

  componentWillReceiveProps(nextProps){
  	if(nextProps.isLoggedIn){
  		//browserHistory.replace(this.props.redirectUrl);
  		browserHistory.push('/app');
  	}
    this.setState({
    				loginMessage: nextProps.loginMessage,
    			    signupMessage: nextProps.signupMessage
    			});
  }

  handleChange(e){

    this.setState({ [e.target.name] : e.target.value})

  }

  handleLogin(e){

    if(this.state.loginEmail && this.state.loginPassword){

     this.props.despatchAuthLogin({

      email: this.state.loginEmail,
      password: this.state.loginPassword
      
    });

     

    }else{

    	 this.setState({ loginMessage: "Enter both login and password " });
    }
    
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
				

				<div className=" card col s5">

					<div className="row center"> Already a member? Login</div>

					<div className="row">
							<input type="text"  name="loginEmail" value={this.state.loginEmail}  onChange={this.handleChange.bind(this)} className="cursiveFont col s8 offset-s2" placeholder="email"/>
					</div>

					<div className="row">
						 <input type="password"  name="loginPassword" value={this.state.loginPassword}  onChange={this.handleChange.bind(this)}  className="cursiveFont col s8 offset-s2" placeholder="password"/>
					</div>

				

					<div className="row">
						  <a onClick={this.handleLogin} className="waves-effect waves-light btn flat col s4 offset-s4">Login</a>
					</div>

					<div className="row center">
						  {this.state.loginMessage}
					</div>

				</div>


				<div className="col s5 card offset-s1">

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
					

				</div>


			</div>


		);
	}
}

Login.propTypes = {

   loginPassword : React.PropTypes.string,
   signupMessage : React.PropTypes.string

}

function mapStateToProps(state){
  return {
  	loginMessage: state.auth.loginMessage,
    signupMessage: state.auth.signupMessage,
    isLoggedIn: state.auth.isLoggedIn,
    redirectUrl: state.auth.redirectUrl

  } 
}


export default connect(mapStateToProps,{ despatchAuthLogin, despatchAuthSignup })(Login);