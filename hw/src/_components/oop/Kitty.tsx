import React,{Component} from "react";


class Kitty extends Component {
    public state = {
        time: "",
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64',
        }

    }
    public tick = () => {
        setInterval(this.tick, 1000)
        this.setState({
            time: new Date().toLocaleDateString()
        })

    }
    public render(){
        return <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={this.state.author.avatarUrl}
                    alt={this.state.author.name}
                />
                <div className="UserInfo-name">
                    {this.state.author.name}
                </div>
            </div>
            <div className="Comment-text">{this.state.time}</div>
            <button onClick={this.tick}>클 릭</button>
        </div>
    }
}
export default Kitty;