import React from "react";

const CountDown =({count,tick,reset}) => {
    if(count){
        setTimeout(()=> tick(),1000)
    }
    return(count)? <h1>{count}</h1>:<div onClick={()=> reset(10)}>
        <span>축하합니다</span><br/>
        <span>리셋</span>
    </div>

}
export default CountDown