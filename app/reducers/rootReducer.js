import activeTab from './activeTab';
import auth from './auth';
import members from './members';
import events from './events';
import rsvps from './rsvps';
import posts from './posts';
import books from './books';

import { combineReducers } from 'redux';

export default combineReducers( { activeTab, auth, members, events, posts, books, rsvps } );
