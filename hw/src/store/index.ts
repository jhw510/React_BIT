import { combineReducers } from 'redux';
import signin from '../member/Signin';

const rootReducer = combineReducers({
    login: signin
});

export default rootReducer;