import React from 'react';
import styled, { css } from 'styled-components'

export const size = 8;

export const Circle = styled.span<{
  color: string;
  size?: string;
  position?: string;
  top?: string;
  left?: string;
}>`
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
  ${(props) =>
    props &&
    css`
      background-color: ${props.color};
      height: ${props.size ? props.size : `${size}rem`};
      width: ${props.size ? props.size : `${size}rem`};
      position: ${props.position ? props.position : 'absolute'}
    `}
`;