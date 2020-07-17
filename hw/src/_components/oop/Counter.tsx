import React,{Component} from "react";


interface CounterProps {
    startNumber:number
}

class Counter extends Component<CounterProps>{
    [x:string]:any
    public state = {
        number:0
    }
    props:any
    constructor(props:CounterProps) {
        super(props);
        this.state.number = props.startNumber
    }
    public handleClick = ()=>{
        this.setState({
            number:this.state.number + 1
        })
    }
    public  render(){
        return <div>
            <h1>{this.state.number}</h1>
            <h1>{this.props.startNumber}</h1>
            <button onClick={this.handleClick}>클릭</button>
        </div>
    }
}
export default Counter