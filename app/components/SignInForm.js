import React, { Component } from 'react';
import { Col } from 'react-grid-system';
import { reduxForm, Field } from 'redux-form';
//import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class SignInForm extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    //console.log("SignInForm");
    //console.log(this.props);
    const { handleSubmit } = this.props;
    return (
   
      <form onSubmit={handleSubmit}>
      	<div>
        	<Field name="username" component="input" type="text" placeholder="Name" required/>
        </div>
        <div>
        	<Field name="password" component="input" type="password" placeholder="Password" required/>
         </div>
         <div>
         </div>
         <RaisedButton primary={true} type="submit">Submit</RaisedButton>
         
      </form>
    
    )
  }
}

// Decorate with redux-form
export default reduxForm({
  form: 'SignInForm'
})(SignInForm)


