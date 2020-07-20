import React,{useState} from 'react';
import { MDBBtn } from "mdbreact";

const Greeting = () => {
    const [message,setMessage]=useState("")
    const onClickWelcome= ()=> setMessage("어서옵쇼")
    const onClickBye=()=>setMessage("안녕히 가세요")
   const [color,setColor]=useState("")
    const onClickPurple=()=>setColor("purple")
    const onClickBlue=()=>setColor("blue")
    const onClickAqua=()=>setColor("aqua")


    return (
        <>
         <MDBBtn color="amber" onClick={onClickWelcome}>입장</MDBBtn>
         <MDBBtn onClick={onClickBye}>퇴장</MDBBtn>
         <h1>{message}</h1>
         <MDBBtn gradient={"purple"} onClick={onClickPurple} >{color}</MDBBtn><br/>
         <MDBBtn gradient={"blue"} onClick={onClickBlue}>{color}</MDBBtn><br/>
         <MDBBtn gradient={"aqua"} onClick={onClickAqua} >{color}</MDBBtn>
         <h1 style={{color}}>{color}</h1>
        </>
    );
};

export default Greeting;