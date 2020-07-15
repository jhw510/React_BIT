import React, {Component} from 'react';

export class Subject extends Component {
    constructor(props) {
        super(props);
        this.state={
           test:"test1"
        }
    }
    render() {
        return (
            <div>
                <header>
                    <h1><a href={"/"} onClick={function(e) {
                        console.log(this.state.test);
                        e.preventDefault();

                    }.bind(this)}>눌러보시오</a>

                    </h1>
                </header>
            </div>
        );
    }
}

