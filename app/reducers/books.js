export default function books(state = [], action = {}){

	switch(action.type){

		case 'SET_BOOKS':

		return action.books;
		
		case 'UPDATE_BOOK':

		 var idx = state.findIndex(e=> e.id === action.rating.BookId);


	    console.log("update member reducer",idx);

	    if (idx != -1){

	    	// var newratings = [action.rating].concat(state[idx].Ratings);
	    	// //console.log("newratings",newratings);
	    	// var newobj = Object.assign({}, state[idx], {
      //   			Ratings: newratings
      //         });

	    	//console.log("newobj",newobj);
	    	var newstate =  [...state.slice(0,idx),
	    		            //newobj,
	    		            {...state[idx], Ratings: [action.rating].concat(state[idx].Ratings) },

	    			         ...state.slice(idx+1)];

		    	
	    	console.log("newstate", newstate[idx].Ratings[0]);
	    	//console.log("rating",action.rating);

	    	//newstate[idx].Ratings.push(action.rating);
	    	console.log("newstate", newstate);
	    	return newstate;

	    }else{
	    	return state;
	    }


		default :

		return state;
	}

}