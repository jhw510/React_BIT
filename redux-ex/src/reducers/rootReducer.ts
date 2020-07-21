import { combineReducers } from 'redux'
import {userReducers} from './user.reducers'
import counterReducer from '../containers/counter.reducer'
const rootReducer = combineReducers({
    userReducers,
    counterReducer
})

export default rootReducer