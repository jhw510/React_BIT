import React from "react";
import Countdown from '../components/CountDown'
const Counter = () => <div>
    <Countdown count={0} reset={10} tick={1000}/>
</div>
export default Counter