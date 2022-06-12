import React from 'react';
import styled, { css } from 'styled-components';

import { Colors } from '../styles/Colors';
import { TextTheme } from '../styles/TextTheme';

export type ButtonType =
  | 'fillButton'
  | 'outlineButton'
  | 'defaultOutlineButton'
  | 'squareButton'
  | 'fullButton';

const ButtonContainer = styled.div<{
  type?: ButtonType;
  disabled?: boolean;
}>`
  ${TextTheme.M600};
  padding: 11px 23px;
  display: inline-block;
  text-align: center;

  ${({ type, disabled }) => {
    switch (type) {
      case 'outlineButton':
        return css`
          border-radius: 22px;
          background: ${disabled ? Colors.Gray3 : '#fff'};
          border: 1px solid ${disabled ? Colors.Gray3 : Colors.Blue2};
          color: ${disabled ? '#fff' : Colors.Blue2};
          cursor: pointer;
          :hover {
            background: ${disabled ? null : Colors.Blue4};
            border: ${disabled ? null : `1px solid ${Colors.Blue1}`};
          }
        `;
      case 'defaultOutlineButton':
        return css`
          ${TextTheme.S400};
          border-radius: 22px;
          background: ${disabled ? Colors.Gray3 : '#fff'};
          border: 1px solid ${Colors.Gray3};
          color: ${disabled ? '#fff' : Colors.Black};
          cursor: pointer;
          /* :hover {
            background: ${disabled ? null : Colors.Blue4};
            border: ${disabled ? null : `1px solid ${Colors.Blue1}`};
          } */
        `;
      case 'squareButton':
        return css`
          border-radius: 8px;
          background: ${disabled ? Colors.Gray4 : '#fff'};
          border: 1px solid ${Colors.Gray3};
          color: ${disabled ? Colors.Gray3 : Colors.Black};
          cursor: pointer;
          :hover {
            background: ${disabled ? null : Colors.Gray5};
          }
        `;
      case 'fullButton':
        return css`
          ${TextTheme.L600};
          width: 100%;
          max-width: 328px;
          padding: 15px 0;
          color: #fff;
          border-radius: 28px;
          background: ${disabled ? Colors.Gray3 : Colors.Blue2};
          border: 1px solid ${disabled ? Colors.Gray3 : Colors.Blue2};
          cursor: pointer;
          :hover {
            background: ${disabled ? Colors.Gray3 : Colors.Blue1};
            border: ${disabled ? null : `1px solid ${Colors.Blue1}`};
          }
        `;
      default:
        return css`
          color: #fff;
          border-radius: 22px;
          background: ${disabled ? Colors.Gray3 : Colors.Blue2};
          border: 1px solid ${disabled ? Colors.Gray3 : Colors.Blue2};
          cursor: pointer;
          :hover {
            background: ${disabled ? Colors.Gray3 : Colors.Blue1};
            border: ${disabled ? null : `1px solid ${Colors.Blue1}`};
          }
        `;
    }
  }}
`;

export const Button: React.FC<{
  text: string;
  onClick?: () => unknown;
  type?: ButtonType;
  isDisabled?: boolean;
}> = ({ text, onClick, type, isDisabled }) => {
  return (
    <ButtonContainer
      type={type}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
    >
      {text}
    </ButtonContainer>
  );
};
