import React, {Component} from "react";

class Navigator extends Component<any, any>{
    public render() {
        return <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            {/*Brand*/}
            <a className="navbar-brand" href="#">
                <span className="glyphicon glyphicon-home"></span>
            </a>
            {/*Links*/}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 2</a>
                </li>
                {/*Dropdown*/}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Dropdown link
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </li>
            </ul>
        </nav>
    }
}
export default Navigator