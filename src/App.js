import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NoMatch} from './containers/NoMatch';
import {Layout} from './components/Layout.jsx';
import {NavigationBar} from './components/NavigationBar.jsx';
import "./css/common.css"
import TypesPage from "./containers/TypesPage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {LINKS} from "./repo/LocalRepository";
import BriefPage from "./containers/BriefPage";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar/>
                    {/*<Jumbotron />*/}
                    <div className="bg">
                        <Container>
                            <Row>
                                <Col md={5}>
                                    <Layout>
                                        <Switch>
                                            <Route exact path="/" component={TypesPage}/>
                                            {
                                                LINKS.map(link => {
                                                    const path = `/${link}`
                                                    return <Route path={path} component={BriefPage}/>
                                                })
                                            }
                                            <Route component={NoMatch}/>
                                        </Switch>
                                    </Layout>
                                </Col>

                                <Col md={2}/>

                                <Col md={5}>
                                    <h1>MAP</h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;