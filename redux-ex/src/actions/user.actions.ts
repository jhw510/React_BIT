
import {userConstants} from '../constants'
import {userService} from "../apis";
import {alertActions} from "./alert.actions";
const userActions = {
    login,
    join
}
function join(userid:string,password:string,name:string):void {
    alert(`ID:${userid},PW:${password},NAME:${name}`)
   // return dispatch =>{request(userid)}
}
function request(userid:string):object {
    return { type: userConstants.LOGIN_REQUEST, userid}
}
function success(userid:string):object {
    return { type: userConstants.LOGIN_SUCCESS, userid}
}
function failure(userid:string, error:string):object {
    return { type: userConstants.LOGIN_FAILURE, userid, error}
}
function login(userid, password) {
    alert(`ID: ${userid}, PW: ${password}`)
    userService.loginService(userid, password)
    return dispatch =>{
        dispatch(request(userid))
    }
    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.LOGIN_FAILURE, user}}
}
export default userActions