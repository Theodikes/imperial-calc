import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/styles/withStyles";
import withLocalStorage from "../HOCs/withLocalStorage";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import objectAssignDeep from "../objectAssignDeep";

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  resultsPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: "2rem",
    flex: "1 0 auto",
    margin: theme.spacing(1)
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 320,
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  primary: {
    marginRight: theme.spacing.unit * 2
  },
  secondary: {
    background: theme.palette.secondary["100"],
    color: "white",
    marginRight: "auto"
  },
  spaceTop: {
    marginTop: 20
  }
});

class Form extends Component {
  state = {
    inputs: Object.assign(this.props.fields, this.props.savedData),
    results: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const { saveData, formula: calculateIncome } = this.props;
    const { inputs } = this.state;
    const state_change = calculateIncome(inputs).state_change || {};
    const data = objectAssignDeep(inputs, state_change);
    this.setState({ results: calculateIncome(inputs).value, inputs: data });
    saveData(data);
  };

  handleChange = event => {
    const { target } = event;
    const { name } = target;
    const { inputs } = this.state;

    this.setState({
      inputs: Object.assign(inputs, {
        [name]: Object.assign(inputs[name], { value: target.value })
      })
    });
  };

  render() {
    const { classes, pageName } = this.props;
    const { inputs, results } = this.state;

    return (
      <Fragment>
        <Paper className={classes.paper}>
          <form autoComplete="off">
            <div className={classes.itemContainer}>
              {Object.keys(inputs).map(key => (
                <TextField
                  variant="outlined"
                  key={key}
                  id={`${pageName}__${key}`}
                  name={key}
                  label={inputs[key].label}
                  defaultValue={inputs[key].value || ""}
                  required={inputs[key].required}
                  error={inputs[key].error}
                  margin="normal"
                  className={classes.textField}
                  type="number"
                  onChange={this.handleChange}
                />
              ))}
            </div>
            {results && (
              <Paper
                className={classes.resultsPaper}
                onClick={() =>
                  navigator.clipboard.writeText(
                    Object.keys(inputs)
                      .map(
                        key => `${inputs[key].label}: ${inputs[key].value || 0}`
                      )
                      .join("\n") + `\nИТОГ: ${results}`
                  )
                }
              >
                Ваша казна: {results}
              </Paper>
            )}
            <div className={classes.spaceTop}>
              <Button
                variant="contained"
                color="primary"
                className={classes.secondary}
                onClick={this.handleSubmit}
              >
                Рассчитать
              </Button>
            </div>
          </form>
        </Paper>
      </Fragment>
    );
  }
}

export const Organization = withStyles(styles)(
  withLocalStorage("organization", {})(Form)
);

export const Order = withStyles(styles)(withLocalStorage("order", {})(Form));

export const Country = withStyles(styles)(
  withLocalStorage("country", {})(Form)
);
