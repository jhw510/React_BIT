import React,{useCallback} from "react";
import {useSelector,useDispatch} from 'react-redux'
import TodosComponent from "./TodosComponent";
import {remove,addTodo} from "./todos.reducer"

const TodosContainer=()={
    const todo=useSelector(state=>state.todos)
}