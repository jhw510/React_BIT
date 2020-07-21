import React,{useState} from 'react';
import { MDBBtn } from "mdbreact";
//프로퍼티로 number,onIncrease,onDecrease를 jsx를 전달한다

const CounterComponent = ({number,onIncrease,onDecrease}) => {
    return (
        <>
        <h1>숫자:{number}</h1>
            <MDBBtn onClick={onIncrease}>+1</MDBBtn>
            <MDBBtn color={"indigo"} onClick={onDecrease}>-1</MDBBtn>
        </>
    );
};

export default CounterComponent;