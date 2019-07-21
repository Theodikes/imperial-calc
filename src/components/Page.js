import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Topbar from "./Topbar";
import SectionHeader from "./ui/SectionHeader";
import { Organization, Order, Country } from "./Form";
const backgroundShape = require("../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: "75%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
});

class Page extends Component {
  render() {
    const { classes, pageName, fields, formula } = this.props;

    const formProps = {
      fields,
      formula,
      pageName
    };

    return (
      <Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={24}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <SectionHeader title="Калькулятор дохода организаций" />
                {pageName === "organization" ? (
                  <Organization {...formProps} />
                ) : pageName === "order" ? (
                  <Order {...formProps} />
                ) : (
                  <Country {...formProps} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Page);
