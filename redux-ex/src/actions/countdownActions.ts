import React from "react";
const countdownActions = dispatcher =>({
     tick(currentCount){
          dispatcher.handleAction({type: 'TICK'})
     },
     reset(count){
          dispatcher.handleAction({
               type: 'RESET',
               count
          })
     }
})
export default countdownActions

