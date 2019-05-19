import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Map } from './components/Map';
import { NoMatch } from './components/NoMatch';
import { Layout } from './containers/Layout.jsx';
import { NavigationBar } from './containers/NavigationBar.jsx';
import Jumbotron from './containers/Jumbotron.jsx';
import "./css/common.css"
import TypesPage from "./components/TypesPage";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/*<Jumbotron />*/}
          <Layout>
            <Switch>
              <Route exact path="/" component={TypesPage} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Map} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
