import styled from 'styled-components/native'

export const BackgroundContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.slate._950};
`;

export const TitleContainer = styled.View`
  margin: 32px 48px 0 48px;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.slate._50};
`;