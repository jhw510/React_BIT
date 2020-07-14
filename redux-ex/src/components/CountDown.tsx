import React from "react";

const Countdown = ({count, tick, reset}) => {
    if(count){
        setTimeout(()=> tick(), 1000)
    }
    return (count) ?
        <h1>{count}</h1>:
        <div onClick={()=> reset(10)}>
            <span>축합합니다.</span>
            <span>리셋</span>
        </div>
}
export default Countdown