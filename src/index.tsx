import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Header } from "./components/Header";
import { ListView } from './components/ListView';
import { DetailView } from './components/DetailView';

const DefaultView = () => {
  return (
    <div>
      <Link to="/list">List View</Link>
      <Link to="/detail">Detail View</Link>
      <span>Default view..</span>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DefaultView} />
      <Route exact path="/list" component={ListView} />
      <Route exact path="/detail" component={DetailView} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById("example")
);
