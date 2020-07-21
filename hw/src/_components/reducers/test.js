const actionType='TEST_MEMBER'

const actionCreator =data=>{
    return{type:actionType,data}
}

const action =actionCreator({})