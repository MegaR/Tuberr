import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';

class Navigation extends React.Component<RouteComponentProps> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {redirect: null};
    }

    navigate(url: string) {
        this.props.history.push(url);
    }

    render() {

        return <div>
            <Navbar collapseOnSelect expand="md" variant="dark">
                <Navbar.Brand>Tuberr</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" onSelect={(key: string)=>{this.navigate(key)}}>
                        <Nav.Link eventKey="/">
                            <i className="fab fa-youtube"></i>
                            &nbsp;Channels
                        </Nav.Link>
                        <Nav.Link eventKey="/activity">
                        <i className="far fa-clock"></i>
                        &nbsp;Activity
                        </Nav.Link>
                        <Nav.Link eventKey="/wanted">
                        <i className="fas fa-exclamation-triangle"></i>
                        &nbsp;Wanted
                        </Nav.Link>
                        <Nav.Link eventKey="/settings">
                        <i className="fas fa-cogs"></i>
                        &nbsp;Settings
                        </Nav.Link>
                        <Nav.Link eventKey="/system">
                        <i className="fas fa-desktop"></i>
                        &nbsp;System
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>;
    }
}

export default withRouter(Navigation);