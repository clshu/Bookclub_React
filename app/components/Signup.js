// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { despatchAuthSignup } from '../actions/auth_actions';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import moment from 'moment';

// create the component
class Signup extends Component {


 constructor(props) {
	  super(props);

	  this.state = {

	   signupEmail: "",
	   signupPassword : "",
	   signupUsername:"",
	   signupMessage: this.props.signupMessage,

	    fname: "",
		lname: "",
		address1: "",
		city: "",
		state: "",
		zip: "",
		mobile: "",
		favebook1: "",
		favbook2: "",
		favbook3: "",
		aboutme: "",
		jointdt: "",
		piclink: "",
		files:[]
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.dropHandler = this.dropHandler.bind(this);

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


    var piclink = "";



  if(this.state.files.length){

    console.log(this.state.files[0].name);
   piclink = this.state.files[0].name;
  }

    if(this.state.signupEmail && this.state.signupPassword){

    var member = {

        email: this.state.signupEmail,
        password: this.state.signupPassword,

	  fname: this.state.fname,
		lname: this.state.lname,
		address1: this.state.address1,
		city: this.state.city,
		state: this.state.state,
		zip: this.state.zip,
		mobile: this.state.mobile,
		favebook1: this.state.favebook1,
		favbook2: this.state.favbook2,
		favbook3: this.state.favbook3,
		aboutme: this.state.aboutme,
		joindt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		piclink:piclink
		
      
    };

     console.log(member);
     this.props.despatchAuthSignup(member);

     

    }else{

    	 this.setState({ signupMessage: "email, password, first name and lastname are required." });
    }
    
  }


onOpenClick() {
      this.refs.dropzone.open();
}
dropHandler(files) {
  this.setState({
    files: files,
    piclink: files[0].name
  });

  var photo = new FormData();
  photo.append('photo', files[0]);
  console.log(files[0]);
  request.post('/api/uploadfile')
    .send(photo)
    .end(function(err, resp) {
      if (err) { console.error(err); }
      return resp;
    });
}
	// return html to be rendered
	render() {



		return (
			<div className="row valign-wrapper">
				

	

				<div className="col s5 card offset-s3">

						<div className="row center"><h5> New member? Signup</h5></div>

						<div className="row">
								<input type="text"  name="signupEmail"  value={this.state.signupEmail}  onChange={this.handleChange.bind(this)} className="cursiveFont col s8 offset-s2" placeholder="email"/>
						</div>

						<div className="row">
							 <input type="password"   name="signupPassword"  value={this.state.signupPassword}  onChange={this.handleChange.bind(this)} className="cursiveFont col s8 offset-s2" placeholder="password"/>
						</div>

						
					   <div className="row"><input className="cursiveFont col s8 offset-s2" type="text" name= "fname" value={ this.state.fname } onChange={ this.handleChange} placeholder="First Name" /></div> 
                       <div className="row"><input className="cursiveFont col s8 offset-s2"  type="text" name= "lname" value={ this.state.lname } onChange={ this.handleChange} placeholder="Last Name" /> </div>
                  

                  	   <div className="row center">
                  	      {(this.state.files.length > 0) && !this.state.piclink ? <div className="center">
                          
                          <div className="center">{this.state.files.map((file) => <img  src={`/img/${file.name}`} /> )}</div>
                          </div> : null}

                          { this.state.piclink ? <div className="center"><img src={`/img/${this.state.piclink}`} /></div>: null}

                      </div>
                      { !this.state.files.length?

                      	   <div className="center"><Dropzone className="center" disableClick ={false} multiple={false} accept={'image/*'} onDrop={this.dropHandler} >
       					          <div className="center"> Click to add profile picture. </div >
      				        </Dropzone></div>:null}

      				   
                       <div className="row"><input className="cursiveFont col s8 offset-s2" type="text" name= "address1" value={ this.state.address1 } onChange={ this.handleChange} placeholder="Address" /></div> 
                       <div className="row"><input className="cursiveFont col s8 offset-s2" type="text" name= "city" value={ this.state.city } onChange={ this.handleChange} placeholder="city" /></div> 
                       <div className="row"><input className="cursiveFont col s8 offset-s2" type="text" name= "state" value={ this.state.state } onChange={ this.handleChange} placeholder="state" /></div>
                       <div className="row"><input className="cursiveFont col s8 offset-s2" type="text" name= "zip" value={ this.state.zip } onChange={ this.handleChange} placeholder="zip" /></div>

                       <div className="row"><input className="cursiveFont col s8 offset-s2" type="text" name= "mobile" value={ this.state.mobile } onChange={ this.handleChange} placeholder="mobile" /></div> 
                      

                       <br />


                       <div className="row"><h5 className="cursiveFont col s8 offset-s2" >ABOUT ME:</h5></div>
                       <div className="row"><textarea  className="cursiveFont col s8 offset-s2 materialize-textarea" name= "aboutme" value={ this.state.aboutme } onChange={ this.handleChange}  placeholder="aboutme" /></div>
       
                        <div className="row"><h5 className="cursiveFont col s8 offset-s2" >TOP 3 BOOKS I'VE READ:</h5></div>
                        <div className="row"><input type="text" className="cursiveFont col s8 offset-s2" name= "favbook1" value={ this.state.favbook1 } onChange={ this.handleChange} placeholder="Favorite Book" /></div>
                        <div className="row"><input type="text" className="cursiveFont col s8 offset-s2" name= "favbook2" value={ this.state.favbook2 } onChange={ this.handleChange} placeholder="Favorite Book" /></div>
                        <div className="row"><input type="text" className="cursiveFont col s8 offset-s2" name= "favbook3" value={ this.state.favbook3 } onChange={ this.handleChange} placeholder="Favorite Book" /></div>


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