import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import TOS from './pages/Legal/TOS';
import Privacy from './pages/Legal/Privacy';
import Refund from './pages/Legal/Refund';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// ReactDOM.render(<Home />, document.getElementById('root'));

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={(Home)} />
          <Route exact path="/tos" component={(TOS)} />
          <Route exact path="/privacy" component={(Privacy)} />
          <Route exact path="/refund" component={(Refund)} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
