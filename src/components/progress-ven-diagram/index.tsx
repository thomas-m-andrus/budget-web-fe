import React from 'react';
import "./progress-ven-diagram.css";
import { Circle, size } from '../circle';
import { ProgressVenDiagramProps as Props } from './model';

export const ProgressVenDiagram = ({ expenses, paycheck, startDate, currentDate, dateOfNextPaycheck }:Props) => {
    const convertToDays = (difference:number) => Math.ceil(difference / (1000 * 3600 * 24));
    const totalDays = convertToDays(dateOfNextPaycheck.getTime() - startDate.getTime());
    const daysLeft = convertToDays(dateOfNextPaycheck.getTime() - currentDate.getTime());
    const percentageOfDaysLeft = (daysLeft/totalDays);
    const percentageOfMoneyLeft = ((paycheck - expenses)/paycheck);
    const moneyPercentageLarger = (percentageOfMoneyLeft - percentageOfDaysLeft) >= 0;

    return (
      <div className="progress-ven-diagram">
        {[
          {
            circle: "first",
            color: "green",
            circleSize: moneyPercentageLarger
              ? `${size}rem`
              : `${percentageOfMoneyLeft * size}rem`,
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
}