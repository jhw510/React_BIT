import React,{useState}from 'react';
import {MDBBtn,MDBInput} from 'mdbreact'

/*Commands*/ //--->액션과 리듀서를 연결한다
const signUpConstants ={
    SIGNUP_REQUEST :'USER_SIGNUP_REQUEST',
    SIGNUP_SUCCESS :'USER_SIGNUP_SUCCESS',
    SIGNUP_FAILURE :'USER_SIGNUP_FAILURE'
}   //위의 세개는 필수이다.

/*Reducers*/
function signUpReducer(payload, userActions) {
    switch (userActions) {
        case signUpConstants.SIGNUP_REQUEST:
            return {
                signUp: true,
                user: userActions.user
            }
        case signUpConstants.SIGNUP_SUCCESS:
            return {
                signUp: true,
                user: userActions.user
            }
        case signUpConstants.SIGNUP_FAILURE:
            return {
                signUp: false,
                user: userActions.user
            }
    }
}
// Actions
const signUpActions = {
    signUp
}
function signUp(e) {
    return dispatch => {

    }
}
// Thunk
function signUpService() {
    const userid = ''
    const password = ''
    const name = ''
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password, name})
    }
    return fetch(``)
        .then()
}
// Component --> 컨테이너가 된다.
const Signup = () => {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    return (
        <div>
            <form name="form">
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="userid" onChange={e => setUserid(e.target.value)} />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={e => setPassword(e.target.value)} />

                    <label htmlFor="psw-repeat"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" onChange={e => setName(e.target.value)} />

                    <label>
                        <input type="checkbox" name="remember" />
                    </label>

                    <p>By creating an account you agree to our <a href="/#" >Terms
                        & Privacy</a>.</p>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;