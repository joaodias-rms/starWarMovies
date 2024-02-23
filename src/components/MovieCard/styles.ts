import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: center;
  margin-bottom: 16px;
`;

export const CardContainer = styled.View`
  width: 345px;
  height: 97px;
  background-color: ${({theme}) => theme.colors.slate._50};
  border-radius: 8px;
  padding: 16px;
`;

export const MovieThumb = styled.Image`
  width: 345px;
  height: 247px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const MovieTitle = styled.Text`
  font-size: 24px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.slate._900};
`;

export const MovieInfosContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 12px;
`;

export const MovieDirector = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.slate._900};
`;

export const YearRelease = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.slate._500};
`;
