/// <reference path="./typings/declaration.d.ts" />
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import { Navigation } from './components/navigation/navigation';
import { Channels } from './components/channels/channels';

const s = require('../index.scss');

class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <>
            <Navigation></Navigation>
            <Container fluid={true}>
                <Card id="page">
                    <Switch>
                        <Route exact path="/" component={Channels} />
                    </Switch>
                </Card>
            </Container>
            </>;
    }
}

window.onload = () => {
    render(
    <BrowserRouter><App /></BrowserRouter>
    , document.getElementById('app'));
};