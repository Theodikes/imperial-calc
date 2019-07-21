import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Page from "./components/Page";
import ScrollToTop from "./components/ui/ScrollTop";
import { organizationFields, orderFields, countryFields } from "./formData";
import { organizationFormula, orderFormula, countryFormula } from "./formData";

export default props => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page
              {...{
                fields: countryFields,
                formula: countryFormula,
                pageName: "country"
              }}
            />
          )}
        />
        <Route
          exact
          path="/organization"
          render={() => (
            <Page
              {...{
                fields: organizationFields,
                formula: organizationFormula,
                pageName: "organization"
              }}
            />
          )}
        />
        <Route
          exact
          path="/order"
          render={() => (
            <Page
              {...{
                fields: orderFields,
                formula: orderFormula,
                pageName: "order"
              }}
            />
          )}
        />
      </Switch>
    </ScrollToTop>
  </HashRouter>
);
