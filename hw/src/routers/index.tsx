import React from  "react";
import {Redirect} from 'react-router-dom'
import {HomePage} from '../pages'
import {Chat} from '../components'
import {Counter, Hello, Clock, Kitty} from "../components/";

import {} from '../components'


const routerConfig = [
    {path: '/', exact: true, component: () => <Redirect to="/home"/>},
    {path: '/chat', exact: true, component: Chat},
    {path: '/counter', exact: true, component: Counter},
    {path: '/clock', exact: true, component: Clock},
    {path: '/hello', exact: true, component: Hello},
    {path: '/kitty', exact: true, component: Kitty},
    {path: '/homepage', exact: true, component: HomePage},
]
export default routerConfig