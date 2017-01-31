import React, { Component } from 'react';
import { Link } from 'react-router';

class NavMenu extends Component{

	
render(){

return (

	 		<nav className="panel-nav">
              <div className="nav-wrapper">
                  <ul id="nav-mobile" className="left hide-on-med-and-down">
                      <li className="active"><Link to="/news">NEWS</Link></li>
                      <li><Link to="/members">MEMBERS</Link></li>
                      <li><Link to="/events">EVENTS</Link></li>
                      <li><Link to="/library">LIBRARY</Link></li>
                  </ul>
              </div>
      </nav>
   
		);
	}

}

export default NavMenu