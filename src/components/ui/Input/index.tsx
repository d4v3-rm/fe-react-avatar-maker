import React, { forwardRef } from 'react';
import { 
  StyledInputWrapper, 
  StyledInput, 
  StyledLabel, 
  StyledError, 
  StyledInputContainer,
  StyledPrefixIcon,
  StyledSuffixIcon
} from './styles';
import type { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  disabled = false,
  placeholder,
  prefix,
  suffix,
  type = 'text',
  size = 'medium',
  fullWidth = false,
  onChange,
  ...rest
}, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <StyledInputWrapper $fullWidth={fullWidth}>
      {label && <StyledLabel htmlFor={rest.id}>{label}</StyledLabel>}
      <StyledInputContainer $size={size} $hasError={!!error} $disabled={disabled}>
        {prefix && <StyledPrefixIcon>{prefix}</StyledPrefixIcon>}
        <StyledInput
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
          ref={ref}
          $hasPrefix={!!prefix}
          $hasSuffix={!!suffix}
          {...rest}
        />
        {suffix && <StyledSuffixIcon>{suffix}</StyledSuffixIcon>}
      </StyledInputContainer>
      {error && <StyledError>{error}</StyledError>}
    </StyledInputWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
