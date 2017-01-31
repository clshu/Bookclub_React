import React, { Component } from 'react';

class SidePanel extends Component{

	
render(){


return (

   
        <div id="side-panel">
        <div className="container">
            <section id="dateDisplay">
              <h6 className="center">2017</h6>
              <h5 className="center">JANUARY</h5>
            </section>
            <section id="bookChoice">
              <h6>BOOK TITLE:</h6>
              <h4>Atlas Shrugged</h4>
              <br/>
              <h6>AUTHOR:</h6>
              <h4>Ayn Rand</h4>
              <br/>
              <a href="#" className="waves-effect waves-light center btn">Rate It!</a>
            </section><br/>

            <section id="hostInfo">
              <h5 className="title">EVENT HOST</h5>
              <div className="card horizontal">
                  <div className="card-image">
                      <img src="img/jCurtis.png" />
                  </div>
                  <div className="row">
                    <div className="card-content">
                      <h6 className="title">JaimeLee Curtis</h6><br/>
                      <p>January 30, 2017<br/> 700p-900p,<br/> 111 Main St, Beverly Hills, CA  90210<br/> m:(310)555-1234</p>
                    </div>
                  </div>
              </div>
              <br/>
              <a href="#" className="waves-effect waves-light btn">RSVP!</a>
            </section>
      </div>
       {/*<!--closes id side-panel-->*/}
     </div>
  
	);


}

}

export default SidePanel