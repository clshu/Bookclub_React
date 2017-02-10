export const EVENT_LIST_MAX_LEGNTH = 10;

const initialEvent = {
	all: [], // all events
	current: null, // current event, this month event
	message: '' // any error message
}

export default function events(state = initialEvent, action = {}){
	switch(action.type){
		case 'SET_EVENTS': // affect Event, EventDetail
			return {...state, all: action.events };
		case 'SET_CURRENT_EVENT': // affect SidePanel
			return {...state, current: action.event};
		case 'SET_EVENT_MESSAGE': // affect EventNew
			return {...state, message: action.message};
		case 'ADD_EVENT': // affect Event, EventDetail
			return {...state, all: [action.newEvent].concat(state.all)};
		default :
			return state;
	}
}
