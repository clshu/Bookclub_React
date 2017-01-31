import React, { Component } from 'react';

class Members extends Component{

	
render(){

return (


       <div className="row">

            {/*<!--Member panel listing names and avatar -->*/}
            <div className="col sm12 m5 lg5">
            <div className="choice-panel">
                  <ul className="collection">
                      <li className="collection-item avatar">
                          <a href="#"><i className="material-icons circle teal">mode_edit</i>
                          <span className="title">Edit my profile</span></a>
                      </li>


                      <li className="collection-item avatar">
                          <img src="img/aJolie.png" alt="" className="circle" />
                          <span className="title">Angelina Jolie</span>
                      </li>
                 
                      <li className="collection-item avatar">
                          <img src="img/bPitt.png" alt="" className="circle" />
                          <span className="title">Brad Pitt</span>
                      </li>

                      <li className="collection-item avatar">
                          <img src="img/cGooding.png" alt="" className="circle" />
                          <span className="title">Cuba Gooding Jr.</span>
                      </li>

                      <li className="collection-item avatar active">
                          <img src="img/jCurtis.png" alt="" className="circle" />
                          <span className="title">Jaime Lee Curtis</span>
                      </li>

                      <li className="collection-item avatar">
                          <img src="img/kReeves.png" alt="" className="circle" />
                          <span className="title">Keanu Reeves</span>
                      </li>

                  </ul>
            </div>
            </div>

            <div className="col sm12 m7 lg7">
            <div className="detail-panel">
                  <div className="row">
                      <div className="col sm3 m3 l3">
                          <img src="img/jCurtis.png" alt="" className="avatar" />
                      </div>
                      <div className="col sm9 m9 l9">
                          <h4 className="center">JaimeLee Curtis</h4>
                      </div>
                  </div>
                  
                  <div className="row">
                
                        <div className="container">
                          <p>Member since: 05/01/2015</p>
                          <p>111 Main St, Beverely Hills, CA  90210</p>
                          <p>m. (310) 555-1234</p>
                          <br />
                          <h3>ABOUT ME:</h3>
                          <p>My favorite ice cream is chocolate.  I've lived in this neighborhood my whole life.  My dad was a famous guy and I followed in his foot steps.  I enjoy reading and I'm excited to connect with smart people.</p>
           
                          <h3>TOP 3 BOOKS I'VE READ:</h3>
                            <li>Freaky Friday</li>
                            <li>The Cat in the Hat</li>
                            <li>How Much I Love You!</li>
                         
                        </div>
                     
                  </div>

            </div> {/*<!--closes detail panel-->*/}
            </div> {/*<!--closes detail column -->*/}


           
        {/*<!--closes row -->*/}

    </div> 
		);
	}

}

export default Members