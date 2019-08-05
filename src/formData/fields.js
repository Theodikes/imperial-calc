const [required, error] = [true, true];

const organization = {
  annual_turnover: { label: "Оборот организации", required: true },
  turnover_increase: {
    label: "Прирост оборота в процентах",
    type: "percents",
    required
  },
  annual_profit: {
    label: "Доход в процентах от общего оборота",
    type: "percents",
    required
  },
  additional_profit: {
    label: "Дополнительных доход"
  },
  exchequer: {
    label: "Старая казна"
  },
  expense: {
    label: "Расходы за год",
    error
  }
};

const order = {
  annual_turnover: { label: "Оборот ордена", required },
  trust: { label: "Процент доверия", type: "percents", required },
  busyness: { label: "Процент занятости", type: "percents", required },
  additional_profit: { label: "Дополнительных доход" },
  exchequer: {
    label: "Старая казна"
  },
  expense: { label: "Расходы за год", error }
};

const country = {
  population: {
    label: "Население страны",
    required
  },
  population_growth: {
    label: "Процент прироста населения",
    type: "percents",
    required
  },
  centralization: {
    label: "Процент централизации",
    type: "percents",
    required
  },
  rural_population: {
    label: "Процент сельского населения",
    type: "percents",
    required
  },
  rural_efficiency: {
    label: "Процент эффективности в сёлах",
    type: "percents",
    required
  },
  rural_taxes: {
    label: "Процент сельского налога",
    type: "percents",
    required
  },
  rural_welfare_ratio: {
    label: "Сельский КБЖ",
    required
  },
  urban_population: {
    label: "Процент городского населения",
    type: "percents",
    required
  },
  urban_efficiency: {
    label: "Процент эффективности в городах",
    type: "percents",
    required
  },
  urban_taxes: {
    label: "Процент городского налога",
    type: "percents",
    required
  },
  urban_welfare_ratio: {
    label: "Городской КБЖ",
    required
  },
  trade_turnover: {
    label: "Торговый оборот"
  },
  trade_turnover_increase: {
    label: "Рост торгового оборота в процентах",
    type: "percents"
  },
  trade_taxes: {
    label: "Процент торгового налога",
    type: "percents"
  },
  additional_percent: {
    label: "Процентный бонус к доходу",
    type: "percents"
  },
  additional_profit: {
    label: "Дополнительный доход"
  },
  exchequer: {
    label: "Старая казна"
  },
  technology_points: {
    label: "Количество очков технологий"
  },
  military_expenses: {
    label: "Расходы на армию",
    error
  },
  expense: {
    label: "Иные расходы",
    error
  }
};

export default { order, country, organization };
