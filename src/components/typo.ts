import styled, { css } from 'styled-components';

import { Colors } from '../styles/Colors';
import { TextTheme } from '../styles/TextTheme';

interface TypoProps {
  color?: keyof typeof Colors;
}

const colorStyle = css<TypoProps>`
  color: ${({ color }) => Colors[color || 'Black']};
`;

const H1 = styled.h1<TypoProps>`
  ${TextTheme.H1_700}
  ${colorStyle}
`;

const H2 = styled.h2<TypoProps>`
  ${TextTheme.H2_700}
  ${colorStyle}
`;

const H3 = styled.h3<TypoProps>`
  ${TextTheme.H3_600}
  ${colorStyle}
`;

const L600 = styled.p<TypoProps>`
  ${TextTheme.L600}
  ${colorStyle}
`;

const L400 = styled.p<TypoProps>`
  ${TextTheme.L400}
  ${colorStyle}
`;

const M600 = styled.p<TypoProps>`
  ${TextTheme.M600}
  ${colorStyle}
`;

const M400 = styled.p<TypoProps>`
  ${TextTheme.M400}
  ${colorStyle}
`;

const S400 = styled.p<TypoProps>`
  ${TextTheme.S400}
  ${colorStyle}
`;

const S600 = styled.p<TypoProps>`
  ${TextTheme.S600}
  ${colorStyle}
`;

const XS400 = styled.p<TypoProps>`
  ${TextTheme.XS400}
  ${colorStyle}
`;

/**
 * @example
 * ```tsx
 * <Typo.H1>DRAW<Typo.H1>
 * <Typo.H2 color="Blue1">TCGSHOP<Typo.H2>
 * ```
 */
export const Typo = {
  H1,
  H2,
  H3,
  L600,
  L400,
  M600,
  M400,
  S400,
  S600,
  XS400,
} as const;

export type TypoKey = keyof typeof Typo;
