import React from "react";
import {MDBBtn, MDBInput} from "mdbreact";


const TodosComponent=({todo,onToggle,onRemove})=>{
    return(
        <>
            <h1>해야할일 :{todo}</h1>
            <input type={"checkbox"} onClick{()=>onToggle(todo.id)} checked={}/>
            <MDBBtn onClick={onTodo}>입력</MDBBtn>
            </>
    );
};
export default TodosComponent;