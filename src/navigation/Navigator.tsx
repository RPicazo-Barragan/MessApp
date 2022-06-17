/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {WelcomeScreen} from '../screen/WelcomeScreen';
import {LoginScreen} from '../screen/LoginScreen';
import {SignInScreen} from '../screen/SignInScreen';

export type RootStackParams = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {elevation: 0},
        cardStyle: {backgroundColor: 'white'},
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
