// create all actions associated with activeSubreddit
export function  setEvents(events){

	return{
		type: 'SET_EVENTS',
		events
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
