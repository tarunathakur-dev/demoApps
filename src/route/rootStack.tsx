import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import i18n from '../locale/i18Next';
import DashboardScreen from '../screens/dashboard';
import LoginScreen from '../screens/login';

export const SCREEN_NAMES = {
  DASHBOARD: 'Dashboard',
  LOGIN: 'Login',
};
const Stack = createStackNavigator();

const RootStack: React.FC = () => {
  const {
    user: { email },
    language
  } = useSelector((state: any) => state.userProfile);

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={email ? SCREEN_NAMES.DASHBOARD : SCREEN_NAMES.LOGIN}>
        <Stack.Screen
          name={SCREEN_NAMES.DASHBOARD}
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREEN_NAMES.LOGIN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
