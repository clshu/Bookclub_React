export default function members(state = [], action = {}){

	switch(action.type){

		case 'SET_MEMBERS':

	    return action.members;

	    case 'UPDATE_MEMBER':
	    console.log("update member reducer", action.member);

	    var idx = state.findIndex(e=> e.id === action.member.id);


	    console.log("update member reducer",idx);

	    if (idx != -1){

	    	return [...state.slice(0,idx),
	    			action.member,
	    			...state.slice(idx+1)];

	    }else{
	    	return state;
	    }

		default :

		return state;
	}

}