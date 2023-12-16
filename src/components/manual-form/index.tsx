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
  const moneyInputs: [string, InputType.PAYCHECK | InputType.EXPENSES][] = [
    ["Paycheck", InputType.PAYCHECK],
    ["Expenses", InputType.EXPENSES],
  ];
  const dateInputs: [
    string,
    InputType.DATE_OF_NEXT_PAYCHECK | InputType.START_DATE
  ][] = [
    ["Start", InputType.START_DATE],
    ["Next Paycheck", InputType.DATE_OF_NEXT_PAYCHECK],
  ];
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {moneyInputs.map(([label, type]) => (
        <label className={styles.inputGroup}>
          {label}:
          <CurrencyInput
            value={form[type] as number}
            onChange={setMoney(type as InputType.PAYCHECK | InputType.EXPENSES)}
          ></CurrencyInput>
        </label>
      ))}
      {dateInputs.map(([label, type]) => (
        <>
          <label className={styles.inputGroup}>
            {label}:
            <input
              type="date"
              value={form[type]}
              onChange={setDate(type)}
            ></input>
          </label>
          {attemptedSubmit && form[type] === "" && (
            <div className={styles.warning}>Please select a date!</div>
          )}
        </>
      ))}
      <button className={styles.button}>Submit</button>
    </form>
  );
};
