import  { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import StackRoutes from './stack-routes';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName="Home"
    screenOptions={{headerTitle: '', headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        />
      <Tab.Screen
        name="Settings"
        component={Settings}/>
      <Tab.Screen
              name="StackRoutes"
              component={StackRoutes}/>
    </Tab.Navigator>
  );
}