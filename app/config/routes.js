import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../components/Main';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Profile from '../components/Profile';
import News from '../components/News';
import Members from '../components/Members';
import Events from '../components/Events';
import Library from '../components/Library';


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
  		<IndexRoute component={SignIn} />
  		<Route path="signup" component={SignUp} />
  		<Route path="profile" component={Profile} />
  		<Route path="news" component={News} />
  		<Route path="members" component={Members} />
  		<Route path="events" component={Events} />
  		<Route path="library" component={Library} />
    </Route>
  </Router>
);
