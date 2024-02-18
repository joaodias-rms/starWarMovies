import styled from 'styled-components/native';

interface InputProps {
  error: boolean;
}

export const Container = styled.View`
  margin: 8px 0 8px 0;
`;

export const InputText = styled.TextInput<InputProps>`
  border-radius: 16px;
  border-width: 2px;
  width: 361px;
  height: 48px;
  border-color: ${({theme, error}) =>
    error ? theme.colors.red._600 : theme.colors.slate._600};
  padding: 16px;
`;

export const InputTitle = styled.Text<InputProps>`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme, error}) =>
    error ? theme.colors.red._600 : theme.colors.slate._600};
  align-self: flex-start;
  margin-bottom: 8px;
`;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.red._600};
`;
