import React, { Component } from 'react';
import { connect } from 'react-redux';

class Rsvp extends Component {
  constructor(props) {
    super(props);
    console.log('Rsvp constructor')
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
    let rsvpList = this.props.rsvps.map((rsvp) => {
      return (
        <li className="collection-item avatar" key={rsvp.id}>
            <img src={`/img/${rsvp.Member.piclink}`} alt="" className="circle" />
            <span className="title">{rsvp.Member.fname} {rsvp.Member.lname}</span>
            <p>Replied: {this.mapNumberToResponse(rsvp.response)}</p>
        </li>
      )
    });

    return (
      <div>{rsvpList}</div>
    )
  }
}

Rsvp.propTypes = {
  rsvps : React.PropTypes.array
}

function mapStateToProps(state){
  return { rsvps: state.rsvps};
}

export default connect(mapStateToProps,{})(Rsvp);
