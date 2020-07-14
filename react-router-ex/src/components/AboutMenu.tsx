import React from "react";
import {NavLink} from 'react-router-dom'
const selectedStyle = {
    backgroundColor:"white",color:"slategray"
}
const AboutMenu = ({match}) =><div className={"about-menu"}>
    <li><NavLink to={"/about"} style={match.isExact && selectedStyle}>[회사]</NavLink></li>
    <li><NavLink to={"/about/history"} activeStyle={selectedStyle}>[연혁]</NavLink></li>
    <li><NavLink to={"/about/services"} activeStyle={selectedStyle}>[서비스]</NavLink></li>
    <li><NavLink to={"/about/location"} activeStyle={selectedStyle}>[위치]</NavLink></li>


</div>

export default AboutMenu