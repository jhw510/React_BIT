import React,{useState} from 'react';
import { MDBInput } from "mdbreact";

const Info = () => {
    const [userid,setUserid] = useState('')
    const [password,setPassword]=useState('')

    const onChangeUserid= e=>{
        setUserid(e.target.value)
    }
    const onChangePassword= e=>{
        setPassword(e.target.value)
    }
    return (
        <>
            <div>
                <MDBInput label="userid input" size="lg" type="text" value={userid} onChange={onChangeUserid}/>
                <MDBInput label="password input" type={"password"} value={password} onChange={onChangePassword}/>
            </div>
            <div>
                <b>아이디 :</b> {userid}<br/>
                <b>비밀 번호 :</b>{password}
            </div>
        </>
    );
};
export default Info
