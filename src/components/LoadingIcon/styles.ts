import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  width: 100px;
  height: 100px;
  align-self: center;
  align-items: center;
  margin-bottom: 150px;
`;
export const LoadingText = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.slate._50};
  margin-top: 32px;
`;
