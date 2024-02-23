import React, {useEffect, useRef} from 'react';
import {Animated, TouchableOpacityProps, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ButtonTitle, Container} from './styles';

interface LargeButtonProps extends TouchableOpacityProps {
  loading: boolean;
}

const LargeButton: React.FC<LargeButtonProps> = ({loading, ...rest}) => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container loading={loading} disabled={loading} {...rest}>
      <ButtonTitle>{loading ? 'Acessando' : 'Acessar'}</ButtonTitle>
      {loading && (
        <Animated.View
          style={{
            transform: [{rotate: spin}],
          }}>
          <Icon name="rotate-cw" size={24} color={'white'} />
        </Animated.View>
      )}
    </Container>
  );
};

export default LargeButton;
