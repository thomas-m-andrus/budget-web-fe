import React, { useReducer } from "react";
import { Form, InputType, Props } from "./model";
import { CurrencyInput } from "../currancy-input";
import { reducer } from "./utils";
import styles from './index.module.css';

const initial: Form = {
  dateOfNextPaycheck: new Date(),
  startDate: new Date(),
  expenses: 0,
  paycheck: 0,
};

export const ManualForm = ({ submit }: Props) => {
  const [form, dispatch] = useReducer(reducer, initial);
  const setMoney = (type: InputType.EXPENSES | InputType.PAYCHECK) => (value: number) => dispatch({ type, value})
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
    </div>
  );
};
