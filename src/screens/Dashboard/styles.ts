import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.slate._900};
  align-items: center;
  padding: 24px;
`;

export const TitleContainer = styled.View`
  width: 297px;
  height: 116px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 42px;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.slate._50};
`;
