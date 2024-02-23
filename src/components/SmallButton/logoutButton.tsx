import React, {ReactNode} from 'react';
import {Container} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface SmallButtonProps extends TouchableOpacityProps {
  color: string;
  icon: ReactNode;
}

const SmallButton: React.FC<SmallButtonProps> = ({color, icon, ...rest}) => {
  return (
    <Container color={color} {...rest}>
      {icon}
    </Container>
  );
};

export default SmallButton;
