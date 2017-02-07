import React, { Component } from 'react';
import { Link } from 'react-router';

class NavMenu extends Component{

	
render(){

return (

	 		<nav className="panel-nav">
              <div className="nav-wrapper">
                  <ul id="nav-mobile" className="left hide-on-med-and-down">
                      <li ><Link to="/app/git">NEWS</Link></li>
                      <li><Link to="/app/members">MEMBERS</Link></li>
                      <li><Link to="/app/events">EVENTS</Link></li>
                      <li><Link to="/app/library">LIBRARY</Link></li>
                  </ul>
              </div>
      </nav>
   
		);
	}

}

export default NavMenu