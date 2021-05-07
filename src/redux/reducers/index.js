import {combineReducers} from 'redux';
import userReducer from './UsersReducer';

const AppReducer = combineReducers({
  users: userReducer,
});

export default AppReducer;
