import React from "react";
import "./progress-ven-diagram.css";
import { Circle, size } from "../circle";
import { ProgressVenDiagramProps as Props } from "./model";
import {
  convertToDays,
  calcPercentageOfMoneyLeft,
  calcDayDifference,
} from "./utils";

export const ProgressVenDiagram = ({
  expenses,
  paycheck,
  startDate,
  currentDate,
  dateOfNextPaycheck,
}: Props) => {
  const totalDays = calcDayDifference(startDate, dateOfNextPaycheck);
  const daysLeft = calcDayDifference(currentDate, dateOfNextPaycheck);
  const percentageOfDaysLeft = daysLeft / totalDays;
  const percentageOfMoneyLeft = calcPercentageOfMoneyLeft(paycheck, expenses);
  const moneyPercentageLarger =
    percentageOfMoneyLeft - percentageOfDaysLeft >= 0;

  return (
    <div className="progress-ven-diagram">
      {[
        {
          circle: "first",
          color: moneyPercentageLarger ? "green" : "red",
          circleSize: moneyPercentageLarger
            ? `${size}rem`
            : `${percentageOfMoneyLeft * size}rem`,
          position: "",
        },
        {
          circle: "second",
          color: "red",
          circleSize: !moneyPercentageLarger
            ? `${size}rem`
            : `${percentageOfDaysLeft * size}rem`,
        },
      ].map(({ circle, color, circleSize }) => (
        <Circle
          className={`progress-ven-diagram__circle progress-ven-diagram__circle--${circle}`}
          color={color}
          size={circleSize}
        />
      ))}
      <div>{`${daysLeft}/${totalDays} = ${percentageOfDaysLeft}% days left`}</div>
    </div>
  );
};
