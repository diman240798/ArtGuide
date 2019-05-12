import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home';
import { About } from './containers/About';
import { Map } from './containers/Map';
import { NoMatch } from './containers/NoMatch';
import { Layout } from './components/Layout.jsx';
import { NavigationBar } from './components/NavigationBar.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import "./css/common.css"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/*<Jumbotron />*/}
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
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
