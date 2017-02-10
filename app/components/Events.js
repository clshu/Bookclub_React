import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getEvents } from '../actions/event_actions';
import dateFormat from 'dateformat';

class Events extends Component{

  componentDidMount() {

    if (this.props.events.length == 0) {
      this.props.getEvents();
    }
  }

  render() {
    //if (this.props.events == []) return (<div></div>);

    let list = this.props.events.map((event) => {
      let detailLink = `/app/events/${event.id}`;
      let date = dateFormat(new Date(event.dt), "mmmm dS, yyyy");
      return (
        <Link to={ detailLink } key={event.id} >
        <li className="collection-item avatar" key={event.id}>
            <i className="material-icons circle teal">today</i>
            <span className="title">{date}</span>
        </li>
        </Link>
      )
    })

    return (
    <div className="row">

            {/*<!--Member panel listing names and avatar -->*/}
            <div className="col sm12 m5 lg5">
            <div className="choice-panel">
                  <ul className="collection">
                    <li className="collection-item avatar">
                      <Link to="/app/events/new">
                        <i className="material-icons circle teal">today</i>
                        <span className="title">Create New Event</span>
                      </Link>
                    </li>
                    { list }
                  </ul>
            </div>
            </div>

            <div className="col sm12 m7 lg7">
              {this.props.children}
            </div> {/* <!--closes id main-panel--> */}
      </div>
		);
	}

}

Events.propTypes = {
  events : React.PropTypes.array
}

function mapStateToProps(state, ownProps){
    return {
      events : state.events.all,
    }
}

export default connect(mapStateToProps,{ getEvents })(Events);
