//core
import { combineReducers } from 'redux';

//instruments
import posts from './posts';
import profile from './profile';

export default combineReducers({
    posts,
    profile
});
