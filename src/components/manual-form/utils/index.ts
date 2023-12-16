import { Action, State, InputType, Form } from "../model";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case InputType.EXPENSES:
    case InputType.PAYCHECK:
      return { ...state, [action.type]: action.value };
    case InputType.DATE_OF_NEXT_PAYCHECK:
    case InputType.START_DATE:
      return { ...state, [action.type]: action.value };
    default:
      return state;
  }
};

export const convertToSubmit = (state: State): Form => {
  const { expenses, paycheck, dateOfNextPaycheck, startDate } = state;
  return {
    expenses: expenses / 100,
    paycheck: paycheck / 100,
    dateOfNextPaycheck: new Date(dateOfNextPaycheck + "T00:00:00"),
    startDate: new Date(startDate + "T00:00:00"),
  };
};

export const initial: State = {
  dateOfNextPaycheck: "",
  startDate: "",
  expenses: 0,
  paycheck: 0,
};
