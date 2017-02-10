import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editMember } from '../actions/member_actions';
import Dropzone from 'react-dropzone';
import moment from 'moment';
import request from 'superagent';

class MemberForm extends Component{


constructor(props) {
	super(props);

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  this.dropHandler = this.dropHandler.bind(this);

	this.state ={

		fname: this.props.member.fname || '',
		lname: this.props.member.lname  || '',
		address1: this.props.member.address1  || '',
		city: this.props.member.city  || '',
		state: this.props.member.state  || '',
		zip: this.props.member.zip  || '',
		mobile: this.props.member.mobile  || '',
		email: this.props.member.email  || '',
		favebook1: this.props.member.favebook1  || '',
		favbook2: this.props.member.favbook2  || '',
		favbook3: this.props.member.favbook3  || '',
		aboutme: this.props.member.aboutme  || '',
		jointdt: this.props.member.joindt  || '',
    piclink: this.props.member.piclink || '',
    files:[]

	}
	
}

componentWillReceiveProps(nextProps) {

  this.setState({
    fname: nextProps.member.fname || '',
    lname: nextProps.member.lname  || '',
    address1: nextProps.member.address1  || '',
    city: nextProps.member.city  || '',
    state: nextProps.member.state  || '',
    zip: nextProps.member.zip  || '',
    mobile: nextProps.member.mobile  || '',
    email: nextProps.member.email  || '',
    favebook1: nextProps.member.favebook1  || '',
    favbook2: nextProps.member.favbook2  || '',
    favbook3: nextProps.member.favbook3  || '',
    aboutme: nextProps.member.aboutme  || '',
    jointdt: nextProps.member.joindt  || '',
    piclink: nextProps.member.piclink || '',
  })
  
}

handleChange(e){

	this.setState({
		[e.target.name] : e.target.value
	})

}


handleSubmit(e){

  var piclink = "";



  if(this.state.files.length){

    console.log(this.state.files[0].name);
   piclink = this.state.files[0].name;
  }

	this.props.editMember({

		id: this.props.member.id,
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
		jointdt: this.state.joindt,
		piclink: piclink

	});

  this.setState({files:[]});
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

render(){

	var  currentMember  = this.props.member;

    let imglink;
     

  if(currentMember.piclink){
     imglink = "/img/"+  currentMember.piclink ;

  }else{

    imglink = "/img/unknown.png";

  }

	return (
		   <div className="detail-panel">
                  <div className="row">
                      <div className="col sm3 m3 l3">
                          {/*<img src={ imglink } alt="" className="avatar" />*/}

                           {(this.state.files.length > 0) && !this.state.piclink ? <div>
                          
                          <div>{this.state.files.map((file) => <img className="card-image" src={`/img/${file.name}`} /> )}</div>
                          </div> : null}

                          { this.state.piclink ? <div><img className="card-image" src={`/img/${this.state.piclink}`} /></div>: null}

                      </div>
                      { !this.state.files.length?<Dropzone disableClick ={false} multiple={false} accept={'image/*'} onDrop={this.dropHandler} >
       					          <div> Drop/Click to add new photo. </div >
      				        </Dropzone>:null}
                      
                                                
                                               
                      <div className="col sm6 m6 l6">
                      </div>
                  </div>
                  
                  <div className="row">
                
                        <div className="container">
                          <p>Member since: { currentMember.joindt }</p>
                         
                           <input type="text" name= "fname" value={ this.state.fname } onChange={ this.handleChange} placeholder="First Name" /> 
                           <input type="text" name= "lname" value={ this.state.lname } onChange={ this.handleChange} placeholder="Last Name" /> 
                      
                           <input type="text" name= "address1" value={ this.state.address1 } onChange={ this.handleChange} placeholder="Address" /> 
                           <input type="text" name= "city" value={ this.state.city } onChange={ this.handleChange} placeholder="city" /> 
                           <input type="text" name= "state" value={ this.state.state } onChange={ this.handleChange} placeholder="state" /> 
                           <input type="text" name= "zip" value={ this.state.zip } onChange={ this.handleChange} placeholder="zip" /> 

                          <input type="text" name= "mobile" value={ this.state.mobile } onChange={ this.handleChange} placeholder="mobile" /> 
                          
                          <br />


                          <h3>ABOUT ME:</h3>
                           <textarea  name= "aboutme" value={ this.state.aboutme } onChange={ this.handleChange} className="materialize-textarea" placeholder="aboutme" /> 
           
                          <h3>TOP 3 BOOKS I'VE READ:</h3>
                            <input type="text" name= "favbook1" value={ this.state.favbook1 } onChange={ this.handleChange} placeholder="Favorite Book" />
                            <input type="text" name= "favbook2" value={ this.state.favbook2 } onChange={ this.handleChange} placeholder="Favorite Book" />
                            <input type="text" name= "favbook3" value={ this.state.favbook3 } onChange={ this.handleChange} placeholder="Favorite Book" />
                         	<button className="btn" name="Save" onClick ={ this.handleSubmit }>Save</button>
                         	<button className="btn" name="Cancel" >Cancel</button>
                        </div>
                     
                  </div>

            </div>

			);
	}

}

MemberForm.propTypes = {

  member : React.PropTypes.object

 
}

function mapStateToProps(state){

  
    return {

    	member: state.members.find(e=> e.id === state.auth.profile.id)
      
    }

 
}


export default connect(mapStateToProps,{ editMember })(MemberForm);