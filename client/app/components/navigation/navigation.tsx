import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
export class Navigation extends React.Component {
    render() {
        return <div> 
            <Navbar collapseOnSelect expand="md" variant="dark">
                <Navbar.Brand href="#home">Tuberr</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">
                        <i className="fab fa-youtube"></i>
                        &nbsp;Channels
                        </Nav.Link>
                        <Nav.Link href="/activity">
                        <i className="far fa-clock"></i>
                        &nbsp;Activity
                        </Nav.Link>
                        <Nav.Link href="/wanted">
                        <i className="fas fa-exclamation-triangle"></i>
                        &nbsp;Wanted
                        </Nav.Link>
                        <Nav.Link href="/settings">
                        <i className="fas fa-cogs"></i>
                        &nbsp;Settings
                        </Nav.Link>
                        <Nav.Link href="/system">
                        <i className="fas fa-desktop"></i>
                        &nbsp;System
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>;
    }
}
