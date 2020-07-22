import {createStore} from 'redux'
import scheduleReducer from "./schedule.reducer";

export const store =createStore(
scheduleReducer
)
export default store