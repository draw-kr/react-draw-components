import React from 'react';

export const SizedBox: React.FC<{
  width?: string | number;
  height?: string | number;
  display?: string;
}> = ({ width = '0', height = '0', display = 'block' }) => {
  return <div style={{ width, height, display }} />;
};
