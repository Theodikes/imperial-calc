export const getValues = dict => {
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

export default values => {
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
    new_trade_turnover,
    trade_turnover_increase,
    trade_taxes,
    technology_points,
    additional_percent,
    additional_profit,
    military_expenses,
    expense,
    new_population,
    newExchequer,
    rural_income,
    urban_income,
    trade_income,
    total_income
  } = values;

  return `>Население - ${population} 
- Прирост населения - ${population_growth * 100}%
>Процент городского населения - ${urban_population * 100}%

>КБ горожанина - ${urban_welfare_ratio}
-Эффективность управления городом - ${urban_efficiency * 100}%
>КБ крестьянина - ${rural_welfare_ratio}
- Эффективность управления областью ${rural_efficiency * 100}%

>Централизованность - ${centralization * 100}%

>Торговый оборот - ${trade_turnover}
- Прирост торгового оборота - ${trade_turnover_increase * 100}%

>Траты на армию: ${military_expenses}

>Технологические очки:
  -Количество - ${technology_points}
  -Затраты -  ${technology_points * 25}
  
>Иные траты: ${expense}

>Сторонние доходы: ${additional_profit}
>Бонус к доходу: ${additional_percent}

— Формула подсчёта прироста населения:
1) Новое население: ${population} х (1 + ${population_growth}) = ${new_population}


— Формулы подсчёта доходов:
1) Сельский доход: ${population} х ${rural_population} х ${rural_welfare_ratio} х ${rural_taxes} х ${rural_efficiency} = ${rural_income}
2) Городской доход: ${population} х ${urban_population} х ${urban_welfare_ratio} х ${urban_taxes} х ${urban_efficiency} = ${urban_income}
3) Общий доход: (${rural_income} + ${urban_income}) х (${centralization}) = ${total_income}

- Формула подсчёта торговых доходов:
1) Новый торговый оборот: ${trade_turnover} x (1 + ${trade_turnover_increase.toFixed(
    4
  )}) = ${new_trade_turnover}
2) Доход с торговли: ${new_trade_turnover} x ${trade_taxes} = ${trade_income}


>Новая казна:
- ${newExchequer}
`;
};
