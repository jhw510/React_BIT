import {createActions,handleActions} from "redux-actions";

const REMOVE='todo/REMOVE'
const ADD='todo/ADD'

export const remove =createActions(REMOVE)
export const addTodo=createActions(ADD)

const initialState={todo:""}

const todosReducer=handleActions({
    [REMOVE]:(state,action)=>({todo:state.todo})
    [ADD]:(state,action)=>({todo:state.todo})
},initialState)
export default todosReducer