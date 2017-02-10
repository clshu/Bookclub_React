import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { getRsvps, addNewRsvp } from '../actions/rsvp_actions';
import Rsvp from './Rsvp';

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvp: "3" // default: YES
    }
    this.handleRSVP = this.handleRSVP.bind(this);
    this.handleAddRSVP = this.handleAddRSVP.bind(this);
  }
  handleRSVP (e) {
    this.setState(
      { rsvp: e.target.value }
    )
  }
  handleAddRSVP() {
    this.props.addNewRsvp(this.props.event.id, this.state.rsvp);
  }
  componentDidMount () {
    this.props.getRsvps(this.props.event.id);
  }
  componentDidUpdate () {
    this.props.getRsvps(this.props.event.id);
  }
  render () {
    //console.log(this.props.event);
    let book = this.props.event.Book;
    let host = this.props.event.Member;
    //let rsvps = this.props.event.Rsvps;
    let dt = new Date(this.props.event.dt);
    let date = dateFormat(dt, "mmmm dS");
    let year = dateFormat(dt, "yyyy");
    let address = `${host.address1}, ${host.city}, ${host.state} ${host.zip}`;
    let imglink = "/img/unknown.png";
    if (host.piclink){
       imglink = `/img/${host.piclink}`;
    }

    return (
      <div className="detail-panel">
            <div className="row">
                <div className="col sm3 m3 l3">
                    <img src={imglink} alt="" className="avatar"></img>
                </div>
                <div className="col sm9 m9 l9 center">
                    <h5>{date}</h5>
                    <h5>{year}</h5>
                </div>
            </div>

            <div className="row">
                  <div className="container">
                    <p>{host.fname} {host.lname}</p>
                    <p>{address}</p>
                    <p>m. {host.mobile}</p>

                    <h3>BOOK CHOICE:</h3>
                    <table>
                      <tbody>
                      <tr><td>Title: </td><td>{book.title}</td></tr>
                      <tr><td>Author: </td><td>{book.author}</td></tr>
                      </tbody>
                    </table>

                    <ul className="collection">
                        <li className="collection-item avatar">

                            <i className="material-icons waves-effect waves-light circle teal" onClick={this.handleAddRSVP}>done</i>
                            <span className="title">Are you going?</span>
                            <form className="rsvp-response">
                              <input name="rsvp" type="radio" id="rsvp-yes"
                                value="3"
                                checked={this.state.rsvp === "3"}
                                onChange={this.handleRSVP}
                              />
                              <label htmlFor="rsvp-yes">YES</label>
                              <input name="rsvp" type="radio" id="rsvp-no"
                                value="1"
                                checked={this.state.rsvp === "1"}
                                onChange={this.handleRSVP}
                              />
                              <label htmlFor="rsvp-no">NO</label>
                              <input name="rsvp" type="radio" id="rsvp-maybe"
                                value="2"
                                checked={this.state.rsvp === "2"}
                                onChange={this.handleRSVP}
                              />
                              <label htmlFor="rsvp-maybe">MAYBE</label>
                            </form>

                        </li>

                        <Rsvp />
                     </ul>


                  </div>  {/*<!--closes className=container for data details -->*/}
                   {/*<!--closes row -->*/}
            </div>
       </div>

    );
  }
}

EventDetail.propTypes = {
  event : React.PropTypes.object
}

function mapStateToProps(state, ownProps){

    // route: /app/events, IndexRoute
    // default current event
    if (!ownProps.params.id) return { event: state.events.current };
    // route: /app/events/:id
    let event = state.events.all.find(e => e.id == ownProps.params.id);
    if (event){
      return { event: event };
    } else {
      // default current event
      return { event: state.events.current };
    }
}

export default connect(mapStateToProps,{ getRsvps, addNewRsvp })(EventDetail);
