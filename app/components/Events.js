import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/event_actions';

class Events extends Component{

componentDidMount() {

  this.props.getEvents();


}

render(){

return (
    <div className="row">

            {/*<!--Member panel listing names and avatar -->*/}
            <div className="col sm12 m5 lg5">
            <div className="choice-panel">
                  <ul className="collection">
                      <li className="collection-item avatar">
                          <a href="#"><i className="material-icons circle teal">today</i>
                          <span className="title">Create New Event</span></a>
                      </li>


                      <li className="collection-item avatar">
                          <i className="material-icons circle teal">today</i>
                          <span className="title">March 27, 2017</span>
                      </li>

                       <li className="collection-item avatar">
                          <i className="material-icons circle teal">today</i>
                          <span className="title">February 27, 2017</span>
                      </li>

                      <li className="collection-item avatar active">
                          <i className="material-icons circle teal">today</i>
                          <span className="title">January 30, 2017</span>
                      </li>

                       <li className="collection-item avatar">
                          <i className="material-icons circle teal">today</i>
                          <span className="title">December 26, 2017</span>
                      </li>

                       <li className="collection-item avatar">
                          <i className="material-icons circle teal">today</i>
                          <span className="title">November 28, 2017</span>
                      </li>

                  </ul>
            </div>
            </div>

            <div className="col sm12 m7 lg7">
            <div className="detail-panel">
                  <div className="row">
                      <div className="col sm3 m3 l3">
                          <img src="img/jCurtis.png" alt="" className="avatar"></img>
                      </div>
                      <div className="col sm9 m9 l9">
                          <h4 className="center">January 30, 2017</h4>
                      </div>
                  </div>

                  <div className="row">
                        <div className="container">
                          <p>JaimeLee Curtis</p>
                          <p>111 Main St, Beverely Hills, CA  90210</p>
                          <p>m. (310) 555-1234</p>

                          <h3>BOOK CHOICE:</h3>
                          <table>
                            <tbody>
                            <tr><td>Title: </td><td>Atlas Shrugged</td></tr>
                            <tr><td>Author: </td><td>Ayn Rand</td></tr>
                          </tbody>
                          </table>

                          <ul className="collection">
                              <li className="collection-item avatar">
                                  <i className="material-icons circle teal">done</i>
                                  <span className="title">Are you going?</span>
                                  <div className="rsvp-response">
                                    <input name="rsvp" type="radio" id="rsvp-yes" />
                                    <label htmlFor="rsvp-yes">YES</label>
                                    <input name="rsvp" type="radio" id="rsvp-no" />
                                    <label htmlFor="rsvp-no">NO</label>
                                    <input name="rsvp" type="radio" id="rsvp-maybe" />
                                    <label htmlFor="rsvp-maybe">MAYBE</label>
                                  </div>
                              </li>

                              <li className="collection-item avatar">
                                  <img src="img/aJolie.png" alt="" className="circle" />
                                  <span className="title">Angelina Jolie</span>
                                  <p>Replied: Yes</p>
                              </li>

                              <li className="collection-item avatar">
                                  <img src="img/bPitt.png" alt="" className="circle" />
                                  <span className="title">Brad Pitt</span>
                                  <p>Replied: No</p>
                              </li>

                              <li className="collection-item avatar">
                                  <img src="img/cGooding.png" alt="" className="circle" />
                                  <span className="title">Cuba Gooding Jr.</span>
                                  <p>Replied: Maybe</p>
                              </li>

                              <li className="collection-item avatar">
                                  <img src="img/jCurtis.png" alt="" className="circle" />
                                  <span className="title">Jaime Lee Curtis</span>
                                  <p>Replied: Yes</p>
                              </li>

                              <li className="collection-item avatar">
                                  <img src="img/kReeves.png" alt="" className="circle" />
                                  <span className="title">Keanu Reeves</span>
                                  <p>Awaiting reply</p>
                              </li>
                           </ul>


                        </div>  {/*<!--closes className=container for data details -->*/}
                         {/*<!--closes row -->*/}
                  </div>
             </div> {/* <!--closes container--> */}

         </div> {/* <!--closes id main-panel--> */}
         </div>
		);
	}

}

Events.propTypes = {

  events : React.PropTypes.array


}

function mapStateToProps(state){


    return {
      events : state.events
    }


}


export default connect(mapStateToProps,{ getEvents })(Events);
