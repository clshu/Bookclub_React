import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewEvent, setEventMessage } from '../actions/event_actions';
class EventNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: '',
      book: '',
      author: '',
      note: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    if (this.props.eventMessage) {
      // clean up error message
      this.props.setEventMessage('');
    }
  	this.setState({
  		[e.target.name] : e.target.value
  	})
  }

  handleCancel() {
    if (this.props.eventMessage) {
      // clean up error message
      this.props.setEventMessage('');
    }
    this.setState({
      datetime: '',
      book: '',
      author: '',
      note: ''
    }
    )
  }
  handleSubmit(e) {
    e.preventDefault();

    let event = {
      dt: this.state.datetime, // for Event model
      notes: this.state.note, // for Event model
      MemberId: this.props.loginMember.id, // for Event model
      title: this.state.book, // for Book model
      author: this.state.author, // for Book model
    }

    this.handleCancel();
    this.props.addNewEvent(event);


  }
  render () {
    let member = this.props.loginMember;
    let name = `${member.fname} ${member.lname}`;
    return (
      <div className="detail-panel">
            <div className="row">
                <div className="col sm3 m3 l3">
                    <img src={`/img/${member.piclink}`} alt={name} className="avatar"></img>
                </div>
                <div className="col sm9 m9 l9 right-align">
                    <h5>{name}</h5>
                    <p>{member.address1}</p>
                    <p>{member.city}, {member.state} {member.zip}</p>
                    <p>M: {member.mobile}</p>
                </div>
            </div>
            <div className="row">
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col s12">
                    <h6>EVENT DATE, START TIME:</h6>
                    <input name="datetime" type="datetime-local" className="validate" value={this.state.datetime} onChange={this.handleChange} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <h6>BOOK CHOICE:</h6>
                    <input placeholder="Your favorite book" name="book" type="text" className="validate" value={this.state.book} onChange={this.handleChange} required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <h6>AUTHOR:</h6>
                    <input placeholder="Your favorite author" name="author" type="text" className="validate" value={this.state.author} onChange={this.handleChange} required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <h6>EVENT NOTE:</h6>
                    <p>Special details to keep in mind</p>
                    <textarea placeholder="Event Note" name="note" className="materialize-textarea" value={this.state.note} onChange={this.handleChange}></textarea>

                  </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" >Submit
                  <i className="material-icons right">send</i>
                </button>

              </form>
            </div>
            <div className="row">
              <div className="col s12">
                  <h6 style={{color: "red"}}>
                    {this.props.eventMessage}
                  </h6>
              </div>
            </div>

      </div>
    );
  }
}

EventNew.propTypes = {
  loginMember : React.PropTypes.object,
  eventMessage: React.PropTypes.string
}

function mapStateToProps(state, ownProps) {
  return {
    loginMember: state.auth.profile,
    eventMessage: state.events.message
  }
}
export default connect(mapStateToProps, { addNewEvent, setEventMessage })(EventNew);
