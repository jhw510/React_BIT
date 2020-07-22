import {createActions,handleActions} from "redux-actions";
const INCREASE='counter/INCREASE'
const DECREASE='counter/DECREASE'

export const increase=createActions(INCREASE) //원래는 export const increase=()=>{return({type:INCREASE})} 이런형태이지만
//export const increase=()=>({type:INCREASE}) 생략가능하지만 리덕스액션을 사용한형태

export const decrease= createActions(DECREASE) // 원래는export const decrease=()=> {return({type:DECREASE})}이지만
// 리덕스액션을 사용하면 이렇게 됌


const initialState={number:0}

const counterReducer=handleActions(
    {
        [INCREASE]:(state)=>({number:state.number-1}),
        [DECREASE]:(state)=>({number:state.number-1})
    },
    initialState
)
export default counterReducer
