import activeTab from './activeTab';
import auth from './auth';
import { combineReducers } from 'redux';

export default combineReducers( { activeTab, auth } );