import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  sectionContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  title: {
    fontWeight: "bold"
  },
  expansionPanelContent: {
    marginLeft: theme.spacing(2)
  }
});

class SectionHeader extends Component {
  render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.sectionContainer}>
        <Typography variant="subtitle1" className={classes.title}>
          Калькулятор дохода
        </Typography>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Развернутая инструкция по работе с калькулятором
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.expansionPanelContent}
            >
              <p>
                Заполните соответствующие поля в форме ниже и нажмите кнопку
                «Рассчитать». Нажатие этой кнопки автоматически сохраняет все
                введенные вами значения у вас на компьютере, и они автоматически
                восстанавливаются даже после закрытия браузера
              </p>
              <p>
                Калькулятор выдает вам итог, на которой надо нажать кнопкой
                мыши. В результате данные сохранятся в буфере обмена корректном
                формате. Затем их можно одним нажатием «Ctrl+V» перенести в вашу
                тему
              </p>
              <p>
                Кроме того, после нажатия кнопки "Рассчитать" калькулятор
                автоматически обновляет значения полей «Население» и «Торговый
                оборот», добавляя к ним прирост за прошедший год. Обновив
                страницу, вы увидите уже новые значения - это позволит
                подсчитать доход за несколько лет сразу, не меняя числа вручную
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SectionHeader));
