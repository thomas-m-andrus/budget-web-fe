import React from "react";
import styled, { css } from "styled-components";

export const size = 8;

export const Circle = styled.span<{
  color: string;
  size?: string;
  position?: string;
  top?: string;
  left?: string;
  percentage: number;
  z?: number;
}>`
  border-radius: 50%;
  display: inline-block;
  ${(props) =>
    props &&
    css`
      height: ${props.size ? props.size : `${size}rem`};
      width: ${props.size ? props.size : `${size}rem`};
      position: ${props.position ? props.position : "absolute"};
      background: conic-gradient(
        rgba(0, 0, 0, 0) 0% ${100 - props.percentage}%,
        ${props.color} ${100 - props.percentage}% ${props.percentage}%
      );
      ${props.z ? `z-index: ${props.z};` : ""}
      transition: 
    `}
`;
