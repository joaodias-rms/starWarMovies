import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import Svg, {Circle, Defs, Stop, LinearGradient} from 'react-native-svg';
import {LoadingContainer, LoadingText} from './styles';

interface LoadingProps {
  size: number;
  strokeWidth: number;
  baseColor: string;
  animating: boolean;
  duration: number;
}

const LoadingIcon: React.FC<LoadingProps> = ({
  size,
  strokeWidth,
  baseColor,
  animating,
  duration,
}) => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animating) {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      rotation.setValue(0);
    }
  }, [animating, duration, rotation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const radius = (size - strokeWidth) / 2;
  return (
    <LoadingContainer>
      <Animated.View
        style={{
          transform: [{rotate: spin}],
        }}>
        <Svg width={100} height={size}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="30%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={baseColor} stopOpacity="1" />
              <Stop offset="50%" stopColor={baseColor} stopOpacity="0.5" />
              <Stop offset="100%" stopColor={baseColor} stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#grad)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
          />
        </Svg>
      </Animated.View>
      <LoadingText>
        Carregando...
      </LoadingText>
    </LoadingContainer>
  );
};

export default LoadingIcon;
