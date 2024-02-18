import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const LoginFormContainer = styled(Animated.View)`
  width: 100%;
  height: 420px;
  background-color: ${({theme}) => theme.colors.slate._50};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding-top: 40px;
`;

export const DeviceData = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.slate._50};
  align-self: center;
`;