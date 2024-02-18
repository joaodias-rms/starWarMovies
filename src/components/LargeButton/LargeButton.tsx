import React from 'react';
import {TouchableOpacityProps, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ButtonTitle, Container} from './styles';

interface LargeButtonProps extends TouchableOpacityProps {
  loading: boolean;
}

const LargeButton: React.FC<LargeButtonProps> = ({loading = true, ...rest}) => {
  return (
    <Container loading={loading} disabled={loading} {...rest}>
      <ButtonTitle>{loading ? 'Acessando' : 'Acessar'}</ButtonTitle>
      {loading && <Icon name="rotate-cw" size={24} color={'white'} />}
    </Container>
  );
};

export default LargeButton;
