import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class Header extends Component{


constructor(props){

  super(props);

  this.state = {

    member : this.props.member
  }


}


componentWillReceiveProps(nextProps) {

  var member;

  if(  nextProps.members && nextProps.members.length){
 
 console.log("here");
 member =nextProps.members.find(e=> e.id === nextProps.member.id);

}else{

  member= nextProps.member;
}


this.setState({
  member:member
}); 

}
  

render(){

var imglink;

// if(  this.props.members && this.props.members.length){
 
//  console.log("here");
//  member =this.props.members.find(e=> e.id === this.props.member.id);

// }else{

//   member= this.props.member;
// }




  if(this.state.member.piclink){

    imglink = "/img/"+  this.state.member.piclink ;
  
    }else{
    
    imglink = "/img/unknown.png";

  }


return (
    <div>
    {/*<ul id="dropdown1" className="dropdown-content">
            <li><a href="#">My profile</a></li>
            <li><a href="#">Log-off</a></li>
            <li><a href="#">three</a></li>
        </ul>*/}
    <nav>
        <div className="navigation">
          <a href="#" className="brand-logo">Neighborhood Book Club</a>
              <ul className="right valign-wrapper">
                  
                  {/*<li><a className="dropdown-button" href="#" data-activates="dropdown1">
                                    <i className="material-icons right">menu</i></a>

                  </li>*/}

                   <li  className="avatar white-text indent">
                            <img  src={ imglink } alt="" className="circle valign" width="40px" height="40px"/>
                           
                  </li>
                  <li> {this.state.member.fname}</li>
                  <li><a href="/bookclub.html"><button className="btn flat" >Sign out</button></a></li>

              </ul>
        </div>
    </nav>
    </div>
    );
  }

}

Header.propTypes = {

   member : React.PropTypes.object,
   members: React.PropTypes.array

}

function mapStateToProps(state){
  return {
    
    member: state.auth.profile,
    members:state.members

  } 
}


export default connect(mapStateToProps)(Header);