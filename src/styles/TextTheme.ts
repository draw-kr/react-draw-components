import { css } from 'styled-components';

import { Colors } from './Colors';

const FontFamilySUIT = css`
  font-family: 'SUIT', sans-serif;
`;

const FontStyleNormal = css`
  font-style: normal;
`;

const FontColorBlack = css`
  color: ${Colors.Black};
`;

const DefaultFontStyle = css`
  ${FontFamilySUIT}
  ${FontStyleNormal}
  ${FontColorBlack}
  padding: 0;
  margin: 0;
  border: 0;
`;

const _generateFontCSS = ({
  weight,
  size,
  lineHeight,
}: {
  weight: number;
  size: number;
  lineHeight: number;
}) => css`
  ${DefaultFontStyle}
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}px;
`;

export const TextTheme = {
  FontFamilySUIT,
  FontStyleNormal,
  DefaultFontStyle,

  H1_700: _generateFontCSS({ weight: 700, size: 45, lineHeight: 54 }),
  H2_700: _generateFontCSS({ weight: 700, size: 30, lineHeight: 36 }),
  H3_600: _generateFontCSS({ weight: 600, size: 24, lineHeight: 28 }),
  L600: _generateFontCSS({ weight: 600, size: 18, lineHeight: 22 }),
  L400: _generateFontCSS({ weight: 400, size: 18, lineHeight: 22 }),
  M600: _generateFontCSS({ weight: 600, size: 16, lineHeight: 20 }),
  M400: _generateFontCSS({ weight: 400, size: 16, lineHeight: 20 }),
  S600: _generateFontCSS({ weight: 600, size: 14, lineHeight: 18 }),
  S400: _generateFontCSS({ weight: 400, size: 14, lineHeight: 18 }),
  XS400: _generateFontCSS({ weight: 400, size: 11, lineHeight: 14 }),
} as const;
