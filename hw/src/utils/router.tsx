import React from "react";
import {Redirect} from 'react-router-dom'
import {HomePage} from '../progress'
import {Kitty, Clock, Chat} from '../_components'
import AdvancedCounter from "../_components/fp/AdvancedCounter";

const routerConfig = [
    { path: '/', exact: true, component: () => <Redirect to="/home"/> },
    { path: '/home', component: HomePage },
    { path: '/chat', component: Chat },
    { path: '/kitty', component: Kitty },
    { path: '/clock', component: Clock },
    { path: '/counter', component: AdvancedCounter },
]
export default routerConfig