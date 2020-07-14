import React from "react";
import {PageTemplate,AboutMenu} from "./index";
import {Route} from 'react-router-dom'
import {Services,Company,History,Location} from './aboutMenu/'

const About = ({match}) => <PageTemplate>
    <section className="home">
        <Route component={AboutMenu}/>
        <Route path={"/about/history"} component={History}/>
        <Route path={"/about/services"} component={Services}/>
        <Route path={"/about/location"} component={Location}/>
        <Route exact path={"/about"} component={Company}/>


    </section></PageTemplate>

export default About