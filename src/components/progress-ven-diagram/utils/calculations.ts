export const calcTimeDifference = (sooner: Date, later: Date) =>
  later.getTime() - sooner.getTime();

export const convertToDays = (difference: number) =>
  Math.ceil(difference / (1000 * 3600 * 24));

export const calcDayDifference = (sooner: Date, later: Date): number =>
  convertToDays(calcTimeDifference(sooner, later));

export const calcPercentageOfMoneyLeft = (
  paycheck: number,
  expenses: number
) => {
  return (paycheck - expenses) / paycheck;
};
