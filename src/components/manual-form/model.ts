import { ProgressVenDiagramProps } from '../progress-ven-diagram/model';

export type Form = Omit<ProgressVenDiagramProps, 'currentDate'>;

export interface Props {
    submit: (form:Form) => void;
}

export enum InputType {
  PAYCHECK = "paycheck",
  EXPENSES = "expenses",
  DATE_OF_NEXT_PAYCHECK = "dateOfNextPaycheck",
  START_DATE = "startDate",
}

export interface MoneyAction {
    type: InputType.PAYCHECK | InputType.EXPENSES;
    value: number;
}

export interface DateAction {
    type: InputType.DATE_OF_NEXT_PAYCHECK | InputType.START_DATE;
    value: number;
}

export type Action = MoneyAction | DateAction;