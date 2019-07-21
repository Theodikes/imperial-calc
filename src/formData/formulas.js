import { get } from "https";

const getValues = dict => {
  let result = {};
  Object.keys(dict).forEach(key => {
    const type = dict[key].type;
    const value = dict[key].value;
    if (type && type === "percents") {
      result[key] = Number(value) / 100 || 0;
    } else {
      result[key] = Number(value) || 0;
    }
  });

  return result;
};

export const orderFormula = state => {
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

export const organizationFormula = state => {
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

export const countryFormula = state => {
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
    expense
  } = getValues(state);

  const new_trade_turnover = Math.floor(
    trade_turnover * (1 + trade_turnover_increase - trade_taxes)
  );
  const new_population = Math.floor(population * (population_growth + 1));

  const newExchequer =
    ((population *
      rural_population *
      rural_efficiency *
      rural_taxes *
      rural_welfare_ratio +
      population *
        urban_population *
        urban_efficiency *
        urban_taxes *
        urban_welfare_ratio) *
      centralization +
      new_trade_turnover * trade_taxes) *
      (1 + additional_percent) +
    exchequer -
    expense -
    technology_points * 25;

  return {
    value: Math.floor(newExchequer),
    state_change: {
      trade_turnover: { value: new_trade_turnover },
      population: { value: new_population }
    }
  };
};
