import { request_content } from './utils';

export function setRsvps(rsvps) {
  return {
    type: 'SET_RSVPS',
    rsvps
  }
}

export function getRsvps(eventId) {
  return (dispatch) => {

    fetch(`/api/rsvps/${eventId}`,
          request_content("GET"))
    .then(data=>data.json())
    .then(data=>{
			//console.log(data);
      dispatch(setRsvps(data))
    })
    .catch(err=> {throw err})

  }
}


export function addNewRsvp(eventId, rsvp_response) {
	return (dispatch, getState) => {
		let rsvp = {
			response: parseInt(rsvp_response),
			rsvpon: Date.now(),
			EventId: eventId,
			// Current login member made RSVP
			MemberId: getState().auth.profile.id
		}

		// Figure out if this rsvp exists in state.rsvps

		let dup = getState().rsvps.find( r => r.MemberId == rsvp.MemberId);
		let route = '';
		let method = '';
		//let actionCreator;

		if (dup) {
			rsvp.id = dup.id;
			route = '/api/rsvps/update?_method=PUT';
			//actionCreator = updateRsvp;
		} else {
			route = '/api/rsvps/new';
			//actionCreator = addRsvp;
		}

		fetch(route, request_content("POST", JSON.stringify(rsvp)))
		.then(data=>data.json())
    .then(data=>{
			//console.log(data);
      dispatch(setRsvps(data))
    })
    .catch(err=> {throw err})

	}
}
