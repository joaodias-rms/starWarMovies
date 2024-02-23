import {createStackNavigator} from '@react-navigation/stack';
import DashBoard from '../screens/Dashboard/dashboard';
import MovieInfo from '../screens/MovieInfo/movieInfo';

const {Navigator, Screen} = createStackNavigator();

export function TabRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="DashBoard" component={DashBoard} />
      <Screen name="MovieInfo" component={MovieInfo} />
    </Navigator>
  );
}
