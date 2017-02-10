
export default function rsvps(state = [], action = {}){
  switch(action.type){
		case 'SET_RSVPS':
			return action.rsvps;

		default :
			return state;
    }
}
