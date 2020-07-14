import React from "react";
import {About,Contacts,Events,Home,Products,Error} from "../components";
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'


const Main:React.FC = () =>{
    return <div>
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Redirect from={"/history"} to={"/about/history"}/>
                    <Redirect from={"/services"} to={"/about/services"}/>
                    <Redirect from={"/location"} to={"/about/location"}/>

                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/products" component={Products}/>

                    <Route component ={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}
export default Main