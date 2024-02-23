import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.slate._900};
  align-items: center;
  padding-top: 24px;
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

export const MovieImage = styled.Image`
  width: 100%;
  height: 247px;
  margin-top: 76px;
`;

export const GoBackContainer = styled.View`
  position: absolute;
  margin: 16px;
  bottom: 0;
  right: 0;
`;

export const MovieTitle = styled.Text`
  font-size: 24px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.slate._900};
`;

export const MovieContainer = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.slate._50};
`;

export const MovieTopContainer = styled.View`
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

export const MovieYearRelease = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.slate._500};
`;

export const MovieOpeningCrawl = styled.Text`
  width: 361px;
  height: 242px;
  font-size: 16px;
  margin-top: 16px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.slate._900};
`;
