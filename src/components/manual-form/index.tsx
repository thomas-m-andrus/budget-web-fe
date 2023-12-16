import React, { useReducer, ChangeEvent } from "react";
import { Form, InputType, Props, State } from "./model";
import { CurrencyInput } from "../currancy-input";
import { reducer } from "./utils";
import styles from "./index.module.css";

const initial: State = {
  dateOfNextPaycheck: "",
  startDate: "",
  expenses: 0,
  paycheck: 0,
};

export const ManualForm = ({ submit }: Props) => {
  const [form, dispatch] = useReducer(reducer, initial);
  const setMoney =
    (type: InputType.EXPENSES | InputType.PAYCHECK) => (value: number) =>
      dispatch({ type, value });
  const setDate =
    (type: InputType.START_DATE | InputType.DATE_OF_NEXT_PAYCHECK) =>
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch({ type, value: event.target.value });
  return (
    <div className={styles.form}>
      <label>
        Paycheck:
        <CurrencyInput
          value={form.paycheck as number}
          onChange={setMoney(InputType.PAYCHECK)}
        ></CurrencyInput>
      </label>
      <label>
        Expenses:
        <CurrencyInput
          value={form.expenses as number}
          onChange={setMoney(InputType.EXPENSES)}
        ></CurrencyInput>
      </label>
      <label>
        Start:
        <input
          type="date"
          value={form.startDate}
          onChange={setDate(InputType.START_DATE)}
        ></input>
      </label>
      <label>
        Next Paycheck:
        <input
          type="date"
          value={form[InputType.DATE_OF_NEXT_PAYCHECK]}
          onChange={setDate(InputType.DATE_OF_NEXT_PAYCHECK)}
        ></input>
      </label>
    </div>
  );
};
