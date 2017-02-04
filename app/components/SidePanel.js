import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { getCurrentEvent } from '../actions/event_actions';


class SidePanel extends Component{

	componentDidMount() {
		if (!this.props.currentEvent) {
			this.props.getCurrentEvent();
		}
	}

	render() {
		if (!this.props.currentEvent) return (<div></div>);

		let eventTime = new Date(this.props.currentEvent.dt);
		let book = this.props.currentEvent.Book;
		let host = this.props.currentEvent.Member;
		let address = `${host.address1}, ${host.city}, ${host.state} ${host.zip}`;
		let year = eventTime.getFullYear();
		let month = dateFormat(eventTime, "mmmm");
		let date = dateFormat(eventTime, "mmmm dS, yyyy");
		let time = dateFormat(eventTime, "h:MM TT");

		return (
        <div id="side-panel">
        <div className="container">
            <section id="dateDisplay">
              <h6 className="center">{year}</h6>
              <h5 className="center">{month}</h5>
            </section>
            <section id="bookChoice">
              <h6>BOOK TITLE:</h6>
              <h4>{book.title}</h4>
              <br/>
              <h6>AUTHOR:</h6>
              <h4>{book.author}</h4>
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
                      <h6 className="title">{host.fname} {host.lname}</h6><br/>
                      <p>{date}<br/>{time}<br/>{address}<br/> m:{host.mobile}</p>
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

SidePanel.propTypes = {
  currentEvent : React.PropTypes.object
}

function mapStateToProps(state){
    return {
      currentEvent : state.currentEvent
    }
}


export default connect(mapStateToProps,{ getCurrentEvent })(SidePanel);
