import {View, Text} from 'react-native';
import React from 'react';
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='SignIn'>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
