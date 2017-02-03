export function events(state = [], action = {}){

	switch(action.type){

		case 'SET_EVENTS':

	    return action.events;


		default :

		return state;
	}

}

export function currentEvent(state = null, action = {}){

	switch(action.type){
		case 'SET_CURRENT_EVENT':
	    return action.event;
		default :
			return state;
	}
}
