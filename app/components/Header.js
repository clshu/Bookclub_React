import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class Header extends Component{

  
render(){

return (
    <div>
    {/*<ul id="dropdown1" className="dropdown-content">
            <li><a href="#">My profile</a></li>
            <li><a href="#">Log-off</a></li>
            <li><a href="#">three</a></li>
        </ul>*/}
    <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Neighborhood Book Club</a>
              <ul className="right hide-on-med-and-down">
                  <li>Welcome, {this.props.member.fname}</li>
                  {/*<li><a className="dropdown-button" href="#" data-activates="dropdown1">
                                    <i className="material-icons right">menu</i></a>

                  </li>*/}
                  <li><a href="/bookclub.html"><button className="btn flat" >Sign out</button></a></li>

              </ul>
        </div>
    </nav>
    </div>
    );
  }

}

Header.propTypes = {

   member : React.PropTypes.object

}

function mapStateToProps(state){
  return {
    
    member: state.auth.profile

  } 
}


export default connect(mapStateToProps)(Header);