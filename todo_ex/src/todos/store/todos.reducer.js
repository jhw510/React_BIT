import {createActions, handleActions} from 'redux-actions'
import produce from 'immer'

const CHANGE_INPUT='todos/CHANGE_INPUT'
const INSERT='todos/INSERT'
const TOGGLE='todos/TOGGLE'
const REMOVE='todos/REMOVE'

export const changeInput=createActions(CHANGE_INPUT,input => input)
let id =3
export const insert=createActions(INSERT,text => ({id:id++,text,done:false}))
export const toggle=createActions(TOGGLE,id => id)
export const remove=createActions(REMOVE,id => id)

const initialState={
    input:'',
    todos:[
        {
            id:1,
            text:'리액트 연습',
            done:true
        },
        {
            id:2,
            text:'리덕스 연습',
            done:false
        }
    ]
}
const todos = handleActions({
    [CHANGE_INPUT]:(state, {payload:input})=>produce(state,draft=>{draft.input=input}),
    [INSERT]:(state,{payload:todo})=>produce(state,draft=>{draft.todos.push(todo)}),
    [TOGGLE]:(state,{payload:id})=>produce(state,draft=>{
        const todo=draft.todos.find(todo=>todo.id===id)
                                    todo.done= !todo.done}),

    [REMOVE]:(state,{payload:id})=>produce(state,draft=>{
        const index=draft.todos.findIndex(todo=>todo.id===id)
                                          draft.todos.splice(index,1)}),
},initialState)

export default todos