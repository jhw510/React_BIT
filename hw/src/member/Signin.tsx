import React, { useState } from "react";
const signinActions = {
    REQUEST: 'signin/REQUEST',
    SUCCESS: 'signin/SUCCESS',
    FAILURE: 'signin/FAILURE'
}
export function request(member) {return {type: signinActions.REQUEST, member}}
export function success(member) {return {type: signinActions.SUCCESS, member}}
export function failure(error) {return {type: signinActions.FAILURE, error}}

const initialState = {
    userid: '',
    password: ''
};
export default function signin(state=initialState, action) {
    switch (action.type) {
        case signinActions.REQUEST:
            return {
                ...state
            }
        case signinActions.SUCCESS:
            return {
                ...state
            }
        case signinActions.FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

function handleResponse(response) {
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
}


function logout(){}

function login() {
    const userid = ''
    const password = ''
    alert(` loginService 진입 `)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password})
    }
    return fetch(`https://facebook.github.io/react-native/movies.json`, requestOptions)
        .then(handleResponse)
        .then(user => {
            alert(` json 읽기 성공 `)
            localStorage.setItem('user', JSON.stringify(user))
        })
}

const Signin:React.FC = () => {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")

    return (<div>
        <h2>Login Form</h2>
        <form name="form" >
            <div className="imgcontainer">
                <img id={"avatar"} src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
            </div>
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username"
                       name="userid" onChange={e=>setUserid(e.target.value)}

                />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password"
                       name="password"
                       onChange={e=>setPassword(e.target.value)}
                />

                <button onClick={login}>Login</button>
                <label>
                    <input type="checkbox" checked={true} name="remember"/> Remember me
                </label>
            </div>
            <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </div>)
}