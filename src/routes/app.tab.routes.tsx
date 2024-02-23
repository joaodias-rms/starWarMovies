import {createStackNavigator} from '@react-navigation/stack';
import {DashBoard} from '../screens/Dashboard/dashboard';

const {Navigator, Screen} = createStackNavigator();

export function TabRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="DashBoard" component={DashBoard} />
    </Navigator>
  );
}
