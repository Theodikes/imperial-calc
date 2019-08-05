import prettifyOutput from "./prettifyOutput";
import { getValues } from "./prettifyOutput";

const order = state => {
  const {
    annual_turnover,
    trust,
    busyness,
    additional_profit,
    expense,
    exchequer
  } = getValues(state);

  const newExchequer =
    annual_turnover * trust * busyness +
    additional_profit +
    exchequer -
    expense;
  return { value: Math.floor(newExchequer) };
};

const organization = state => {
  const {
    annual_turnover,
    turnover_increase,
    annual_profit,
    additional_profit,
    exchequer,
    expense
  } = getValues(state);

  const newExchequer =
    (annual_turnover + annual_turnover * turnover_increase) * annual_profit +
    additional_profit +
    exchequer -
    expense;
  return { value: Math.floor(newExchequer) };
};

const country = state => {
  const values = getValues(state);

  const {
    population,
    population_growth,
    centralization,
    rural_population,
    rural_efficiency,
    rural_taxes,
    rural_welfare_ratio,
    urban_population,
    urban_efficiency,
    urban_taxes,
    urban_welfare_ratio,
    trade_turnover,
    trade_turnover_increase,
    trade_taxes,
    exchequer,
    technology_points,
    additional_percent,
    additional_profit,
    military_expenses,
    expense
  } = values;

  const new_trade_turnover = Math.floor(
    trade_turnover * (1 + trade_turnover_increase - trade_taxes)
  );
  const new_population = Math.floor(population * (population_growth + 1));
  const rural_income = Math.floor(
    population *
      rural_population *
      rural_efficiency *
      rural_taxes *
      rural_welfare_ratio
  );
  const urban_income = Math.floor(
    population *
      urban_population *
      urban_efficiency *
      urban_taxes *
      urban_welfare_ratio
  );
  const total_income = Math.floor(
    (rural_income + urban_income) * centralization
  );
  const trade_income = new_trade_turnover * trade_taxes;

  const newExchequer = Math.floor(
    (total_income + trade_income) * (1 + additional_percent) +
      additional_profit +
      exchequer -
      military_expenses -
      expense -
      technology_points * 25
  );

  return {
    value: newExchequer,
    state_change: {
      trade_turnover: { value: new_trade_turnover },
      population: { value: new_population }
    },
    formattedOutput: prettifyOutput({
      ...values,
      newExchequer,
      new_trade_turnover,
      new_population,
      rural_income,
      urban_income,
      trade_income,
      total_income
    })
  };
};

export default { country, organization, order };
