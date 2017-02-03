import activeTab from './activeTab';
import auth from './auth';
import members from './members';

import { combineReducers } from 'redux';

export default combineReducers( { activeTab, auth, members } );