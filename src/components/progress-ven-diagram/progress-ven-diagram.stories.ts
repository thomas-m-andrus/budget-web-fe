import type { Meta, StoryObj } from "@storybook/react";

import { ProgressVenDiagram } from '.';

const meta = {
  title: "Snapshot/ProgressVenDiagram",
  component: ProgressVenDiagram,
} satisfies Meta<typeof ProgressVenDiagram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'something'
    }
}