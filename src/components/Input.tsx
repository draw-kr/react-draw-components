import { VisibilityOff } from '@material-ui/icons';
import { TextField } from '@mui/material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
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

const EmailInputContainer = styled.div``;

export const EmailInput: React.FC<{
  label: string;
}> = ({ label }) => {
  return (
    <EmailInputContainer>
      <TextField id="standard-basic" label={label} variant="outlined" />
    </EmailInputContainer>
  );
};

const PasswordInputContainer = styled.div``;

export const PasswordInput: React.FC<{ label: string }> = ({ label }) => {
  return (
    <PasswordInputContainer>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-pass2word">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    </PasswordInputContainer>
  );
};
