import activeTab from './activeTab';
import auth from './auth';
import members from './members';
import events from './events';
import posts from './posts';

import { combineReducers } from 'redux';

export default combineReducers( { activeTab, auth, members, events, posts } );