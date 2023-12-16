import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { CurrencyInput } from ".";

const StoryComponent = () => {
    const [currencyValue, setCurrencyValue] = useState<number>(0);

    const handleCurrencyChange = (newValue: number) => {
      setCurrencyValue(newValue);
    };

    return (
      <div>
        <CurrencyInput value={currencyValue} onChange={handleCurrencyChange} />
        <p>Current value: {currencyValue}</p>
      </div>
    );
}

const meta = {
  title: "blocks/CurrencyInput",
  component: StoryComponent,
} satisfies Meta<typeof StoryComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
