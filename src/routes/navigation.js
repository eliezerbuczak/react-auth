import  { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerTitle: ''}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}