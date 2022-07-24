import { VisibilityOff } from '@material-ui/icons';
import { TextField } from '@mui/material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import React, { ChangeEventHandler, CSSProperties } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div``;

export interface InputProps {
  label: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  label,
  className,
  fullWidth,
  value,
  onChange,
  style,
}) => {
  return (
    <InputContainer className={className}>
      <TextField
        id="standard-basic"
        label={label}
        style={fullWidth ? { width: '100%', ...style } : style}
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

const EmailInputContainer = styled.div``;

export const EmailInput: React.FC<InputProps> = ({
  label,
  className,
  fullWidth,
  value,
  onChange,
  style,
}) => {
  return (
    <EmailInputContainer className={className}>
      <TextField
        id="standard-basic"
        label={label}
        style={fullWidth ? { width: '100%', ...style } : style}
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </EmailInputContainer>
  );
};

const PasswordInputContainer = styled.div``;

export const PasswordInput: React.FC<InputProps> = ({
  label,
  className,
  fullWidth,
  value,
  onChange,
  style,
}) => {
  return (
    <PasswordInputContainer className={className}>
      <FormControl
        variant="outlined"
        style={fullWidth ? { width: '100%', ...style } : style}
      >
        <InputLabel htmlFor="outlined-adornment-pass2word">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type="password"
          value={value}
          onChange={onChange}
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
