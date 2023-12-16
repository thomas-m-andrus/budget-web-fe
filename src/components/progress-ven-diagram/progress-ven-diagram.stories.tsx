import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ProgressVenDiagram } from ".";

const convertToDate = (input:Date | number) => typeof input === 'number' ? new Date(input) : input;

const meta = {
  title: "Snapshot/ProgressVenDiagram",
  component: ProgressVenDiagram,
  render: ({ currentDate, dateOfNextPaycheck, startDate, ...args }) => {
    return (
      <ProgressVenDiagram
        currentDate={convertToDate(currentDate)}
        dateOfNextPaycheck={convertToDate(dateOfNextPaycheck)}
        startDate={convertToDate(startDate)}
        {...args}
      />
    );
  },
  argTypes: {
    currentDate: { control: "date" },
    dateOfNextPaycheck: { control: "date" },
    startDate: { control: "date" },
  },
} satisfies Meta<typeof ProgressVenDiagram>;

export default meta;
type Story = StoryObj<typeof meta>;

const today = new Date();
const dateOfNextPaycheck = new Date();
dateOfNextPaycheck.setDate(dateOfNextPaycheck.getDate() + 7);
const startOfPayPeriod = new Date();
startOfPayPeriod.setDate(startOfPayPeriod.getDate() - 7);

export const Primary: Story = {
  args: {
    currentDate: today,
    dateOfNextPaycheck: dateOfNextPaycheck,
    startDate: startOfPayPeriod,
    expenses: 200,
    paycheck: 664,
  },
};

export const Secondary: Story = {
  args: {
    currentDate: today,
    dateOfNextPaycheck: dateOfNextPaycheck,
    startDate: startOfPayPeriod,
    expenses: 400,
    paycheck: 664,
  },
};
