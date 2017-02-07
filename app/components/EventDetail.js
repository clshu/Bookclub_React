import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

class EventDetail extends Component {
  constructor(props) {
    super(props);
  }
  mapNumberToResponse(number) {
    switch(number) {
      case 3:
        return 'Yes';
      case 2:
        return 'Maybe';
      case 1:
        return 'No';
      default:
        return 'undefined';
    }
  }
  render () {
    console.log(this.props.event);
    let book = this.props.event.Book;
    let host = this.props.event.Member;
    let rsvps = this.props.event.Rsvps;
    let date = dateFormat(new Date(this.props.event.dt), "mmmm dS, yyyy");
    let address = `${host.address1}, ${host.city}, ${host.state} ${host.zip}`;
    let imglink = "/img/unknown.png";
    if (host.piclink){
       imglink = `/img/${host.piclink}`;
    }

    let rsvpList = rsvps.map((rsvp) => {
      return (
        <li className="collection-item avatar" key={rsvp.Member.id}>
            <img src={`/img/${rsvp.Member.piclink}`} alt="" className="circle" />
            <span className="title">{rsvp.Member.fname} {rsvp.Member.lname}</span>
            <p>Replied: {this.mapNumberToResponse(rsvp.response)}</p>
        </li>
      )
    })
    return (
      <div className="detail-panel">
            <div className="row">
                <div className="col sm3 m3 l3">
                    <img src={imglink} alt="" className="avatar"></img>
                </div>
                <div className="col sm9 m9 l9">
                    <h5 className="center">{date}</h5>
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

                        {rsvpList}
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

    console.log("ownProps params id =", ownProps.params.id);
    // route: /app/events
    if (!ownProps.params.id) return { event: state.currentEvent };
    // route: /app/events/:id
    let event = state.events.find(e => e.id == ownProps.params.id);
    if (event){
      return { event: event };
    } else {
      return { event: state.currentEvent };
    }
}

export default connect(mapStateToProps,{})(EventDetail);
