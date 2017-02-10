import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class NavMenu extends Component{

	
render(){

return (

	 		<nav className="panel-nav">
              <div className="nav-wrapper">
                  <ul id="nav-mobile" className="left hide-on-med-and-down">
                      {/news/.test(this.props.pathname)?<li className="orange"><Link to="/app/news">NEWS</Link></li>:<li><Link to="/app/news">NEWS</Link></li>}
                      {/members/.test(this.props.pathname)?<li className="orange"><Link to="/app/members">MEMBERS</Link></li>:<li><Link to="/app/members">MEMBERS</Link></li>}
                      {/events/.test(this.props.pathname)?<li className="orange"><Link to="/app/events">EVENTS</Link></li>:<li><Link to="/app/events">EVENTS</Link></li>}
                      {/library/.test(this.props.pathname)?<li className="orange"><Link to="/app/library">LIBRARY</Link></li>:<li><Link to="/app/library">LIBRARY</Link></li>}
                  </ul>
              </div>
      </nav>
   
		);
	}

}

function mapStateToProps(state,ownProps){
  return {
   pathname : ownProps.pathname
  } 
}

export default connect(mapStateToProps,{})(NavMenu);