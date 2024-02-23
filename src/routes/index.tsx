import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes} from './auth.routes';
import {useAuth} from '../hooks/auth';
import {TabRoutes} from './app.tab.routes';

export function Routes() {
  const {signed} = useAuth();

  return (
    <NavigationContainer>
      {signed ? <AuthRoutes /> : <TabRoutes />}
    </NavigationContainer>
  );
}
