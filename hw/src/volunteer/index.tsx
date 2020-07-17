import { combineReducers } from 'redux'
import {connectRouter} from 'connected-react-router'

const reducers = (history) => combineReducers({
    router: connectRouter(history)
})

export default reducers