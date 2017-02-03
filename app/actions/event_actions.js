// create all actions associated with activeSubreddit
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


export function getEvents(){


	return (despatch) => {

	fetch('/api/events')
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			despatch(setEvents(data))
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

	return (despatch) => {

	fetch('/api/events/' + currentMonth)
		.then(res=>res.json())
		.then(data=>{

			//console.log(data);
			despatch(setCurrentEvent(data))
		});
	}
}
