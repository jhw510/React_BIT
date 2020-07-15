import {userConstants} from '../constants'

let user = JSON.parse(<string>sessionStorage.getItem('user'))
const initialState = user ? {loggedIn:true,user}:{}
export function userReducers(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }
        case userConstants.LOGIN_FAILURE:
            return {}
        default:
            return state
    }

}