import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div``;

export const Input: React.FC<{
  label: string;
}> = ({ label }) => {
  return (
    <InputContainer>
      <TextField id="standard-basic" label={label} variant="outlined" />
    </InputContainer>
  );
};
