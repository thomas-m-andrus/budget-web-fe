import type { Meta, StoryObj } from "@storybook/react";

import { ProgressVenDiagram } from '.';

const meta = {
  title: "Snapshot/ProgressVenDiagram",
  component: ProgressVenDiagram,
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
    paycheck: 664
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