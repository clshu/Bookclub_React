// get all dependencies
import React, { Component } from 'react';
import Header from './Header';
import SidePanel from './SidePanel';
import NavMenu from './NavMenu';


class App extends Component{

	
render(){

return (
	<div id="main">

		<Header/>

		<div className="row">
		     <div className="col s12 m3 l3">

      			<SidePanel />
      			
      		 </div>


      		 <div className="col s12 m9 l9">

     			<div className="main-panel">
        			<div className="container">
           				{/* <!--Main panel nav bar--> */}
           				<NavMenu pathname={this.props.location.pathname} />

          				{ this.props.children }

          			</div> {/* <!--closes container--> */}
          
         		</div> {/* <!--closes id main-panel--> */}
      		</div>
  
    	</div>
	
   </div>

	)
		
	}

}

export default App