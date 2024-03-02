import  { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import TabRoutes from './tab-routes';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{headerTitle: '', headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
        />
      <Stack.Screen
        name="Other"
        component={TabRoutes}/>
    </Stack.Navigator>
  );
}