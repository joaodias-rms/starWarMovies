import React from 'react';

import {Container, ErrorMessage, InputText, InputTitle} from './styles';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  title: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  title,
  error = false,
  errorMessage,
  ...rest
}) => {
  return (
    <Container>
      <InputTitle error={error} >{title}</InputTitle>
      <InputText error={error} {...rest} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export {Input};
