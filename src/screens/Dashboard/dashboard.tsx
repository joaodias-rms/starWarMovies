import React from 'react';

import {View, Text} from 'react-native';
import {useAuth} from '../../hooks/auth';

export const DashBoard = () => {
  const {user} = useAuth();

  return (
    <View style={{flex: 1}}>
      <Text>{user?.email}</Text>
    </View>
  );
};