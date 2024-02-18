import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Screen name="HomeScreen" component={Home} />
    </Navigator>
  );
}
