import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ProductDisplay from "../components/ProductDisplay";
import Story from "../components/Story";
import Contact from "../components/Contact";

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/story" component={Story} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={ProductDisplay} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
