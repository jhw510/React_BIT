import React,{useState} from "react";
import SigninTest from "./member/SigninTest";

const HideTest:React.FC =()=>{
    const [visible,setVisible]=useState(false)

    
    return(
        <>
          <button onClick={()=>{setVisible(!visible)}}>버튼눌러요</button>
            {visible ? `숨기기`:`보이기`}
            <hr/>
            {visible && <SigninTest/>}
        </>
    );

};

export default HideTest