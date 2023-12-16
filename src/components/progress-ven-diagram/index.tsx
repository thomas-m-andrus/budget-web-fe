import React, { useState } from "react";
import "./progress-ven-diagram.css";
import { Circle, size } from "../circle";
import { ProgressVenDiagramProps as Props } from "./model";
import { calcPercentageOfMoneyLeft, calcDayDifference } from "./utils";

export const ProgressVenDiagram = ({
  expenses,
  paycheck,
  startDate,
  currentDate,
  dateOfNextPaycheck,
}: Props) => {
  const [centered, setCentered] = useState(true);
  const totalDays = calcDayDifference(startDate, dateOfNextPaycheck);
  const daysLeft = calcDayDifference(currentDate, dateOfNextPaycheck);
  const percentageOfDaysLeft = daysLeft / totalDays;
  const percentageOfMoneyLeft = calcPercentageOfMoneyLeft(paycheck, expenses);
  const moneyPercentageLarger =
    percentageOfMoneyLeft - percentageOfDaysLeft >= 0;
  const moneyColor = "green";
  const timeRemainingColor = moneyPercentageLarger ? "limeGreen" : "red";

  return (
    <div className="progress-ven-diagram">
      <button
        onClick={() => setCentered((prev) => !prev)}
        className="progress-ven-diagram__wrapper"
      >
        {[
          {
            circle: "first",
            color: moneyColor,
            circleSize: `${size}rem`,
            position: "",
            percent: percentageOfMoneyLeft,
            z: moneyPercentageLarger ? 0 : 1,
          },
          {
            circle: "second",
            color: timeRemainingColor,
            circleSize: `${size}rem`,
            percent: percentageOfDaysLeft,
            z: moneyPercentageLarger ? 1 : 0,
          },
        ].map(({ circle, color, circleSize, percent, z }) => (
          <Circle
            key={`${circle}_circle-key`}
            className={`progress-ven-diagram__circle progress-ven-diagram__circle--${circle} ${
              centered ? `progress-ven-diagram__circle--${circle}-centered` : ""
            }`}
            color={color}
            size={circleSize}
            $percentage={percent * 100}
            z={z}
          />
        ))}
      </button>
      <div>
        <p>
          Days {daysLeft}/{totalDays} till next paycheck
        </p>
        <p>
          Money ${expenses}/${paycheck}
        </p>
      </div>
    </div>
  );
};
