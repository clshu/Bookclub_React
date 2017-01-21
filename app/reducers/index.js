import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import member from './member';

export default combineReducers({
	form: formReducer,
 	member
})
