import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NoMatch} from './containers/NoMatch';
import {Layout} from './components/Layout.jsx';
import {NavigationBar} from './components/NavigationBar.jsx';
import TypesPage from "./containers/TypesPage";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {LINKS, getPlaces} from "./repo/LocalRepository";
import BriefPage from "./containers/BriefPage";
import FullPage from "./containers/FullPage";
import MapPage from "./containers/MapPage";
import styles from "./css/common.css"

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <div className="bg">
                    <NavigationBar/>

                        <MDBContainer fluid>
                            <MDBRow>
                                <MDBCol xs={12} sm={12} md={5}>
                                        <Switch>
                                            <Route path="/places/:id" component={FullPage}/>

                                            <Route exact path="/" component={TypesPage}/>
                                            {
                                                LINKS.map(link => {
                                                    const path = `/${link}`
                                                    return <Route key={path} path={path} component={BriefPage}/>
                                                })
                                            }

                                            <Route component={NoMatch}/>
                                        </Switch>
                                </MDBCol>


                                <MDBCol xs={12} sm={12} md={5}>
                                    <MapPage />
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;