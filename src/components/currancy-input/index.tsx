import React, { useState, useRef, ChangeEvent } from "react";

interface CurrencyInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

/**
 * !IMPORTANT - the value is a number without a decimal,
 * you will need to format when using it
 */
export const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    const newCentsValue = parseInt(inputValue, 10) || 0; // Default to 0 if not a valid integer

    onChange(newCentsValue);
  };

  const formatCurrency = (value: number): string => {
    return (value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <input
      type="text"
      value={formatCurrency(value)}
      onChange={handleInputChange}
      placeholder="Enter amount"
    />
  );
};