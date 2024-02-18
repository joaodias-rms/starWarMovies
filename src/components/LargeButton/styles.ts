import styled from 'styled-components/native';

interface ButtonProps {
  loading: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 361px;
  height: 48px;
  background-color: ${({theme}) => theme.colors.blue._500};
  opacity: ${({loading}) => (loading ? 0.5 : 1)};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin: 144px 0px 24px 0px;
  flex-direction: row;
`;

export const ButtonTitle = styled.Text`
  color: ${({theme}) => theme.colors.slate._50};
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.bold};
  margin-right: 12px;
`;
