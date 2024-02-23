import styled from 'styled-components/native';

interface SmallButtonProps {
  color: string;
}

export const Container = styled.TouchableOpacity<SmallButtonProps>`
  background-color: ${({color}) => color};
  height: 48px;
  width: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
