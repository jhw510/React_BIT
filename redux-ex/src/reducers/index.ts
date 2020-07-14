import { combineReducers } from 'redux'
import {userReducers} from './user.reducers'

const rootReducer = combineReducers({
    userReducers
})

export default rootReducer