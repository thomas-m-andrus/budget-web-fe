import { Action, Form, InputType } from "../model";

export const reducer = (state: Form, action: Action):Form => {
    switch (action.type) {
        case InputType.EXPENSES:
        case InputType.PAYCHECK:
            return { ...state, [action.type]: action.value };
        case InputType.DATE_OF_NEXT_PAYCHECK:
        case InputType.START_DATE:
            return {...state, [action.type]: action.value}
        default:
            return state;
    }
}