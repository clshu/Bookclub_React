import { request_content } from './utils';

export function  setEvents(events){

	return{
		type: 'SET_EVENTS',
		events
	}
}
export function  setCurrentEvent(event){

	return{
		type: 'SET_CURRENT_EVENT',
		event
	}
}

export function  setEventMessage(message){

	return{
		type: 'SET_EVENT_MESSAGE',
		message
	}
}

export function  addEvent(newEvent){

	return{
		type: 'ADD_EVENT',
		newEvent
	}
}

export function getEvents(){

	return (dispatch) => {

	fetch('/api/events', request_content("GET"))
		.then(res=>res.json())
		.then(data=>{
			//console.log(data);
			dispatch(setEvents(data))
		});
	}
}

export function getCurrentEvent(){
	let today = new Date(Date.now());
	let year = today.getFullYear();
	// getMonth returns (0 - 11 , zero-based)
	// plus 1 to get the correct month
	let month = today.getMonth() + 1;
	let currentMonth = year.toString() + '-' + month.toString();

	return (dispatch) => {
		fetch('/api/events/' + currentMonth,
					request_content("GET"))
			.then(res=>res.json())
			.then(data=>{

				//console.log(data);
				dispatch(setCurrentEvent(data));
			}).
			catch(err => {
				throw err;
			});
	}
}

export function addNewEvent (event) {
return (dispatch, getState) => {
	fetch('/api/events/new',
				request_content("POST", JSON.stringify(event)))
			.then(data=>data.json())
			.then(data=>{
				if (data.error) {
						dispatch(setEventMessage(data.error));
				} else {
						//console.log('newEvent')
						//console.log(data)
						let newEvent = data;
						// data has Event and Book info only
						// add Member
						// New Event is added by cuurent login member
						newEvent.Member = Object.assign({}, getState().auth.profile);

						dispatch(addEvent(newEvent));
				}

			});
		}
}
