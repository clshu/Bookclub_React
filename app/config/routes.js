import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import  rootReducer from '../reducers/rootReducer';
import { BrowserRouter } from 'react-router';

import App from '../components/App';
import Main from '../components/Main';
import Events from '../components/Events';
import EventDetail from '../components/EventDetail';
import Members from '../components/Members';
import MemberDetail from '../components/MemberDetail';
import MemberForm from '../components/MemberForm';
import News from '../components/News';
import Login from '../components/Login';
import Signup from '../components/Signup';
import EnsureLoggedInContainer from '../components/EnsureLoggedInContainer';


//import  data from '../data/posts';


const defaultState = {

	activeTab : "news"

};

let store;
if (process.env.NODE_ENV !== 'production') {
	store = createStore(rootReducer, //defaultState);
	composeWithDevTools(applyMiddleware(thunk)));
} else {
	store = createStore(rootReducer, //defaultState);
	applyMiddleware(thunk));
}


const routes = (

  <Provider store={store}>
	  <Router history={browserHistory}>


	    <Route path="/" component={Main}>
	    	<Route path="login" component={Login} />
            <Route path="signup" component={Signup} />

            <Route component={EnsureLoggedInContainer}>
            	<Route path="app" component={App}>
    				<Route path="news" component={News} />
    				<Route path="members" component={Members}>
                        <Route path="edit"  component={MemberForm} />
                        <Route path=":id"  component={MemberDetail} />
                       
                        <IndexRoute component={MemberDetail} />
            </Route>
						<Route path="events" component={Events}>
                        <Route path=":id"  component={EventDetail} />
                        <IndexRoute component={EventDetail} />
          	</Route>
					<IndexRoute component={ News } />
    			</Route>
    			<IndexRoute component={App} />
    		</Route>

	    </Route>
	</Router>
</Provider>
);

export default routes;
