
import React from "react";
import {Contact, Guide, Modal, Tour, TourMap} from "../common";

const Main: React.FC = () => {
    return <div>
        <TourMap/>
        <Guide/>
        <Tour/>
        <Modal/>
        <Contact/>
    </div>
}
export default Main