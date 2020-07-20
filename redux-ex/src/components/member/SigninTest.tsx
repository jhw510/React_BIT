import React,{useState,useEffect} from 'react';
import { MDBInput } from "mdbreact";

const Signin:React.FC = () => {
    const [userid,setUserid] = useState('')
    const [password,setPassword]=useState('')
    //useEffect 컴포넌트가 랜더링 될 때마다 특정 작업을 수행하도록 설정
    useEffect(()=>{
        alert(`아이디 변화만 체크합니다 --> ${userid}`)
    },[])
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
export default Signin
