import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ManualForm } from ".";
import { Form } from "./model";

const onSubmit = (form:Form) => console.log(form);

const meta = {
    title: "Initial/ManualForm",
    component: ManualForm,
    render:() => <ManualForm submit={onSubmit}></ManualForm>
} satisfies Meta<typeof ManualForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};