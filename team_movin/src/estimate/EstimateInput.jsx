import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavItem, MDBNavbarNav, MDBNav, MDBNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

class EstimateInput extends Component {
    state = {
        sideNavLeft: false,
    }

    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`
        this.setState({
            [sidenavNr]: !this.state[sidenavNr]
        });
    };

    render() {
        return (
            <Router>
                <MDBContainer>
                    <MDBBtn onClick={this.sidenavToggle("Left")}>
                        <MDBIcon size="lg" icon="bars" />
                    </MDBBtn>
                    <MDBNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
                                className="sn-bg-1">
                        <li>
                            <div className="logo-wrapper sn-ad-avatar-wrapper">
                                <a href="#!">
                                    <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
                                    <span>Anna Deynah</span>
                                </a>
                            </div>
                        </li>

                        <MDBNavbarNav>
                            <MDBNavLink to="/other-page" topLevel>
                                <MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBNavLink>
                            <MDBNavItem name="Submit blog" id="submit-blog" icon="chevron-right">
                                <MDBNavLink>Submit listing</MDBNavLink>
                                <MDBNavLink>Registration form</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem name="Instruction" id="instruction" icon="hand-pointer" href="#">
                                <MDBNavLink>For bloggers</MDBNavLink>
                                <MDBNavLink>For authors</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem name="About" id="about" icon="eye">
                                <MDBNavLink>Instruction</MDBNavLink>
                                <MDBNavLink>Monthly meetings</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem name="Contact me" id="contact-me" icon="envelope">
                                <MDBNavLink>FAQ</MDBNavLink>
                                <MDBNavLink>Write a message</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBNav>
                </MDBContainer>
            </Router>
        );
    }
}



export default EstimateInput;