import React from "react";
import {MainMenu} from "./index";

const PageTemplate = ({children}) => <div className={"page"}>
    <MainMenu/>
    {children}

</div>


export default PageTemplate;