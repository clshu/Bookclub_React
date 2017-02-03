export default function posts(state = [], action = {}){

	switch(action.type){

		case 'SET_POSTS':

	    return action.posts;

	    case 'ADD_POST':

	    return [ action.post ].concat(state);

		default :

		return state;
	}

}