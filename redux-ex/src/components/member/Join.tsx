import React, {Component} from 'react';
import userActions from "../../actions/user.actions";
import {connect} from 'react-redux';
import '../../assets/join.css'




class Join extends Component<any,any> {

    constructor(props) {
        super(props);
        this.state={
            userid:'',
            password:'',
            name:'',
            submitted:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handlerSubmit=this.handlerSubmit.bind(this)
    }
    handleChange(e){
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    handlerSubmit(e){
        e.preventDefault()
        this.setState({submitted:true})
        const {userid,password,name}=this.state
        //if(userid && password){
            this.props.join(userid,password,name)
       // }
    }


    render() {
        const {userid,password,name, submitted} = this.state
        const helpBlock = {color: "red"}
        return <div>
            <h2>Sign Up</h2>
            <form name="form" onSubmit={this.handlerSubmit}>
                <div className="container">
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label htmlFor="userid"><b>Userid</b></label>
                    <input type="text" placeholder="Enter userid" name="userid"
                           value={userid}
                           onChange={this.handleChange}
                           required/>
                    { submitted && !userid &&
                    <div style={helpBlock}>아이디는 필수입력값입니다.</div>
                    }
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password"
                           value={password}
                           onChange={this.handleChange}
                           required/>
                    {
                        submitted && !password &&
                        <div style={helpBlock}> 비밀번호는 필수입력값입니다.</div>
                    }
                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name"
                           value={name}
                           onChange={this.handleChange}
                           required/>
                    {
                        submitted && !name &&
                        <div style={helpBlock}> 이름 필수입력값입니다.</div>
                    }
                    <label>
                        <input type="checkbox" name="remember"/> Remember me
                    </label>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    }
}
function mapStateToProps(state) {
    const {joiningIn}=state.userReducers
    return{joiningIn}
}
const actionCreator={
    join:userActions.join
}
const connectedJoinPage = connect(mapStateToProps,actionCreator)(Join)
export {connectedJoinPage as Join};