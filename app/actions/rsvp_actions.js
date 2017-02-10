
export function setRsvps(rsvps) {
  return {
    type: 'SET_RSVPS',
    rsvps
  }
}

export function getRsvps(eventId) {
  return (dispatch) => {

    fetch(`/api/rsvps/${eventId}`,
      {
        method: "GET",
        headers: {
          "authorization": localStorage.getItem('bcjwt'),
          "Content-Type": "application/json"
        },
          credentials: "same-origin"
      }
    )
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

			fetch(route,
			{
				method: "POST",
				body: JSON.stringify(rsvp),
				headers: {
					"authorization": localStorage.getItem('bcjwt'),
					"Content-Type": "application/json"
				},
					credentials: "same-origin"
			}
		)
		.then(data=>data.json())
    .then(data=>{
			//console.log(data);
      dispatch(setRsvps(data))
    })
    .catch(err=> {throw err})

	}
}
