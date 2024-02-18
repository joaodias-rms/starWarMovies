import React, {useEffect, useState} from 'react';

import {DeviceData, LoginFormContainer} from './styles';
import {Input} from '../../components/Input/input';
import LargeButton from '../../components/LargeButton/LargeButton';
import Background from '../../components/Background/background';
import {Animated, Dimensions, NativeModules} from 'react-native';
import LoadingIcon from '../../components/LoadingIcon/loadingIcon';
import theme from '../../theme';
const Home: React.FC = () => {
  const {DeviceInfoModule} = NativeModules;
  const screenHeight = Dimensions.get(`window`).height;

  const [appSettings, setAppSetings] = useState('');
  const [hideLoading, setHideLoading] = useState(false);

  async function deviceSettings() {
    return await DeviceInfoModule.getDeviceInfo(
      (_err: string, deviceInfo: string) => {
        setAppSetings(deviceInfo);
      },
    );
  }

  const constainerLoginTranslate = React.useRef(
    new Animated.Value(screenHeight),
  ).current;

  const handleOpenForm = () => {
    Animated.timing(constainerLoginTranslate, {
      toValue: screenHeight / 1100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    deviceSettings();
    setTimeout(() => {
      handleOpenForm();
      setHideLoading(true);
    }, 2000);
  }, []);

  return (
    <Background>
      {!hideLoading && (
        <>
          <LoadingIcon
            size={100}
            strokeWidth={8}
            baseColor={theme.colors.blue._500}
            animating={true}
            duration={1000}
          />
          <DeviceData>{appSettings}</DeviceData>
        </>
      )}

      <LoginFormContainer
        style={{
          transform: [{translateY: constainerLoginTranslate}],
        }}>
        <Input title="Email" />
        <Input title="Senha" secureTextEntry />
        <LargeButton loading={false} />
      </LoginFormContainer>
    </Background>
  );
};

export default Home;
