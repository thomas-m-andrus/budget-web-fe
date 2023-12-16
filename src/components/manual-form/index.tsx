import React, {
  useReducer,
  ChangeEvent,
  FormEvent,
  useState,
  useCallback,
} from "react";
import { InputType, Props } from "./model";
import { CurrencyInput } from "../currency";
import { convertToSubmit, initial, reducer } from "./utils";
import styles from "./index.module.css";

export const ManualForm = ({ submit }: Props) => {
  const [form, dispatch] = useReducer(reducer, initial);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const setMoney =
    (type: InputType.EXPENSES | InputType.PAYCHECK) => (value: number) =>
      dispatch({ type, value });
  const setDate =
    (type: InputType.START_DATE | InputType.DATE_OF_NEXT_PAYCHECK) =>
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch({ type, value: event.target.value });
  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setAttemptedSubmit(true);
      const { dateOfNextPaycheck, startDate } = form;
      const bothDatesSelected = [startDate, dateOfNextPaycheck].every((v) =>
        /\d{4}(-\d{2}){2}/.test(v)
      );
      if (bothDatesSelected) {
        submit(convertToSubmit(form));
      }
    },
    [form, submit]
  );
  return (
    <form onSubmit={onSubmit} className={styles.form}>
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
      {attemptedSubmit && form.startDate === "" && (
        <div className={styles.warning}>Please select a date!</div>
      )}
      <label>
        Next Paycheck:
        <input
          type="date"
          value={form[InputType.DATE_OF_NEXT_PAYCHECK]}
          onChange={setDate(InputType.DATE_OF_NEXT_PAYCHECK)}
        ></input>
      </label>
      {attemptedSubmit && form[InputType.DATE_OF_NEXT_PAYCHECK] === "" && (
        <div className={styles.warning}>Please select a date!</div>
      )}
      <button className={styles.button}>Submit</button>
    </form>
  );
};
