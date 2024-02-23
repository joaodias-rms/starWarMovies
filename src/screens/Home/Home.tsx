import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {Input} from '../../components/Input/input';
import LargeButton from '../../components/LargeButton/LargeButton';
import Background from '../../components/Background/background';
import {
  Animated,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import LoadingIcon from '../../components/LoadingIcon/loadingIcon';

import theme from '../../theme';
import {useAuth} from '../../hooks/auth';
import {useForm} from 'react-hook-form';
const {DeviceInfoModule} = NativeModules;

interface FormData {
  email: string;
  password: string;
}

import {DeviceData, LoginFormContainer} from './styles';
const Home: React.FC = () => {
  const fieldsValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required('O email não pode ser vazio')
      .email('Digite um email válido'),
    password: yup
      .string()
      .required('A senha não pode ser vazia')
      .min(5, 'A senha deve conter pelo menos 5 dígitos')
      .test(
        'has-number',
        'A senha deve conter pelo menos um número',
        function (value) {
          const hasNumber = /^(?=.*[0-9])/;
          if (hasNumber.test(value)) {
            return true;
          }
          return false;
        },
      ),
  });

  const {signIn} = useAuth();

  const [appSettings, setAppSetings] = useState('');
  const [hideLoading, setHideLoading] = useState(false);

  const screenHeight = Dimensions.get(`window`).height;

  const constainerLoginTranslate = React.useRef(
    new Animated.Value(screenHeight),
  ).current;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(fieldsValidationSchema),
  });

  const login = (data: FormData) => {
    signIn({email: data.email, password: data.password});
    console.log(data);
  };

  async function deviceSettings() {
    return await DeviceInfoModule.getDeviceInfo(
      (_err: string, deviceInfo: string) => {
        setAppSetings(deviceInfo);
      },
    );
  }

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
      <KeyboardAvoidingView behavior="height">
        <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1}>
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
            <Input
              control={control}
              name="email"
              title="Email"
              error={errors.email}
            />
            <Input
              control={control}
              name="password"
              title="Senha"
              error={errors.password}
              secureTextEntry
            />
            <LargeButton loading={false} onPress={handleSubmit(login)} />
          </LoginFormContainer>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default Home;
