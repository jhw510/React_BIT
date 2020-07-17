import React, {Component} from "react";
interface HelloProps {
    startName: string
}
interface HelloState {
    name: string
}
class  Hello extends Component<HelloProps, HelloState>{
    [x: string]: any
    public state = {name: "홍길동"}
    props: any
    constructor(props: HelloProps) {
        super(props);
        this.state.name = props.startName
    }
    public handleClick = () => {
        this.setState({
            name: "안녕 " + this.state.name
        })
    }
    public render() {
        return (<div>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick}>클  릭</button>
        </div>)
    }
}
export default Hello