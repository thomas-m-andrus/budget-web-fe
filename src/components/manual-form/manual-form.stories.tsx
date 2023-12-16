import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ManualForm } from ".";

const meta = {
    title: "Initial/ManualForm",
    component: ManualForm
} satisfies Meta<typeof ManualForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};