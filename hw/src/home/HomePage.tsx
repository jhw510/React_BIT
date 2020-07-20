import React from "react"
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Navigator, Footer} from "../common"
import Main from "./Main"

const Home: React.FC = () => {
    return <>
        <Navigator/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </BrowserRouter>
        <Footer/>
    </>
}
export default Home