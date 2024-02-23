import React from 'react';

import {Container, ErrorMessage, InputText, InputTitle} from './styles';
import {TextInputProps} from 'react-native';

import {Control, Controller, FieldError} from 'react-hook-form';

interface InputProps extends TextInputProps {
  title: string;
  errorMessage?: string;
  control: Control<any>;
  name: string;
  error?: FieldError;
}

const Input: React.FC<InputProps> = ({
  title,
  name,
  error,
  errorMessage,
  control,
  ...rest
}) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <>
            <InputTitle error={!!error?.message}>{title}</InputTitle>
            <InputText
              error={!!error?.message}
              onChangeText={onChange}
              value={value}
              {...rest}
            />
            {!!error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
          </>
        )}
      />
    </Container>
  );
};

export {Input};
