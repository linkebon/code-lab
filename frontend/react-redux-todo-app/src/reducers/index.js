import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import tweetsReducer from './tweetsReducer';

export default combineReducers({
    todoReducer,
    tweetsReducer
});