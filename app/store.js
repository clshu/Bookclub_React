import { applyMiddleware, createStore } from "redux";

//import logger from "redux-logger"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk);
const middleware_debug = composeWithDevTools(middleware);
let store = null;

if (process.env.NODE_ENV == 'production') {
	store =  createStore(reducer, middleware);
} else {
	store = createStore(reducer, middleware_debug);
}

export default store;
