import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Page from "./components/Page";
import ScrollToTop from "./components/ui/ScrollTop";

const routes = ["/", "/organization", "/order"];

export default props => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        {routes.map(path => (
          <Route exact path={path} component={Page} key={path} />
        ))}
      </Switch>
    </ScrollToTop>
  </HashRouter>
);
