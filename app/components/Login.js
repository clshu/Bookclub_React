// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { despatchAuthLogin} from '../actions/auth_actions';
import { Link } from 'react-router';

// create the component
class Login extends Component {



 constructor(props) {
	  super(props);

	  this.state = {

	    loginEmail: "",
	    loginPassword : "",
	    loginMessage:this.props.loginMessage


	 

    };

    this.handleLogin = this.handleLogin.bind(this);


	}

  componentWillReceiveProps(nextProps){
  	if(nextProps.isLoggedIn){
  		//browserHistory.replace(this.props.redirectUrl);
  		browserHistory.push('/app');
  	}
    this.setState({
    				loginMessage: nextProps.loginMessage
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


  

	// return html to be rendered
	render() {



		return (
			<div className="row valign-wrapper">
				

				<div className=" card col s5 offset-s3">


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

					<br/>

					<div className="row center"><Link to="/signup">New member? Signup</Link></div>


				</div>
			

			</div>


		);
	}
}

Login.propTypes = {

   loginPassword : React.PropTypes.string

}

function mapStateToProps(state){
  return {
  	loginMessage: state.auth.loginMessage,
    isLoggedIn: state.auth.isLoggedIn,
    redirectUrl: state.auth.redirectUrl

  } 
}


export default connect(mapStateToProps,{ despatchAuthLogin })(Login);