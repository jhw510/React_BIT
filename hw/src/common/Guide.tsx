import React from "react";
const Guide = () => {
    return (<div id="band" className="container text-center">
        <h3>THE BAND</h3>
        <p><em>We love music!</em></p>
        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <br/>
        <div className="row">
            <div className="col-sm-4">
                <p className="text-center"><strong>Name</strong></p><br/>
                <a href="#demo" data-toggle="collapse">
                    <img src="https://www.w3schools.com/bootstrap/bandmember.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
                </a>
                <div id="demo" className="collapse">
                    <p>Guitarist and Lead Vocalist</p>
                    <p>Loves long walks on the beach</p>
                    <p>Member since 1988</p>
                </div>
            </div>
            <div className="col-sm-4">
                <p className="text-center"><strong>Name</strong></p><br/>
                <a href="#demo2" data-toggle="collapse">
                    <img src="https://www.w3schools.com/bootstrap/bandmember.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
                </a>
                <div id="demo2" className="collapse">
                    <p>Drummer</p>
                    <p>Loves drummin'</p>
                    <p>Member since 1988</p>
                </div>
            </div>
            <div className="col-sm-4">
                <p className="text-center"><strong>Name</strong></p><br/>
                <a href="#demo3" data-toggle="collapse">
                    <img src="https://www.w3schools.com/bootstrap/bandmember.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
                </a>
                <div id="demo3" className="collapse">
                    <p>Bass player</p>
                    <p>Loves math</p>
                    <p>Member since 2005</p>
                </div>
            </div>
        </div>
        {/*band*/}
    </div>)
}
export default Guide