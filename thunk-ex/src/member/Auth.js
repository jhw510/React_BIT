import React,{useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import axios from 'axios'
import {
    MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,
    MDBCardHeader, MDBIcon, MDBBtn, MDBModalFooter,
    MDBModal, MDBInput, MDBModalHeader, MDBModalBody
} from "mdbreact"

const POST_AUTH = 'member/POST_AUTH'
const FIND_PASS='member/FIND_PASS'
const authAction = data => ({type: POST_AUTH, payload: data})
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_AUTH: return action.payload
        default: return state
    }
}
const findPass=data=>dispatch=>{
    axios.post("",data)
        .then(res=>{
          if(res.data){
              alert(`임시 비밀번호가 발급됐습니다. email을 체크해주세요`)
          }else {
              alert(`잘못된 email주소입니다.`)
          }
        })
        .catch(err=>{throw(err)})
}
const postAuth = data => dispatch => {

    axios.post("", data)
        .then(res => {
            if(res.data){
                sessionStorage.setItem('email',res.data.email)
                sessionStorage.setItem('password',res.data.email)
                sessionStorage.setItem('name',res.data.email)
            }
            dispatch(authAction(res.data))
        })
        .catch(err => { throw(err) })
}

export const Auth = () =>{
    const [modal, setModal] = useState(false)
    const [toggle, setToggle] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {inputID, inputPW} = useSelector(state=>({inputID: state.authReducer.email,
        inputPW: state.authReducer.password}))
    const dispatch = useDispatch()
    const onChangeEmail = e => {
        alert(`입력한 값 1: ${e.target.value}`)
        setEmail(e.target.value)

    }
    const onChangePassword = e => {
        setPassword(e.target.value)
    }
    const onClickLogin = e =>{
        alert(`입력한 값 2: ${inputID}`)
        dispatch(postAuth({email: inputID, password: inputPW}))
    }
    const onClickToggle = e => {
        setToggle({modal: !modal})
    }
    const onClickPassFind = e => {
        findPass({email:email})
    }


    return <>
        <MDBContainer className="py-5">
            <MDBRow center>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                <h3 className="my-3">
                                    <MDBIcon icon="lock" /> 로그인
                                </h3>
                            </MDBCardHeader>
                            <form>
                                <div className="grey-text">
                                    <MDBInput
                                        label="이메일"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={onChangeEmail}
                                    />
                                    <MDBInput
                                        label="비밀번호"
                                        icon="lock"
                                        group
                                        type="password"
                                        onChange={onChangePassword}
                                        validate
                                    />
                                </div>

                                <div className="text-center mt-4">
                                    <MDBBtn
                                        color="light-blue"
                                        className="mb-3"
                                        onClick={onClickLogin}
                                    >
                                        Login
                                    </MDBBtn>
                                </div>
                            </form>
                            <MDBModalFooter>
                                <div className="font-weight-light">
                                    {/*<MDBNavLink to="/join"><p className="btn"> GC.kr에 처음이세요? 회원가입하기</p></MDBNavLink>*/}
                                    <p className="blue-text btn"  onClick={onClickToggle}>비밀번호를 잊으셨나요?</p>

                                    <MDBModal isOpen={modal} toggle={toggle}>
                                        <MDBModalHeader toggle={toggle}>비밀번호 찾기
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                            <div className="grey-text py-4" >
                                                <p>비밀번호를 찾고자 하는 GC.KR 이메일 ID를 입력해주시면 <br/>
                                                    해당 메일 주소로 임시 비밀번호를 보내드립니다.</p><br/>
                                                <MDBInput
                                                    label="이메일"
                                                    icon="envelope"
                                                    group
                                                    type="email"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                    onChange={onChangeEmail}
                                                />
                                            </div>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn color="secondary" onClick={onClickToggle}>취소</MDBBtn>
                                            <MDBBtn color="primary" onClick={onClickPassFind}>확인</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>

                                </div>
                            </MDBModalFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    </>
}


export default Auth