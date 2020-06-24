import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from './Login';
import Main from './Main';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
             <Stack.Screen  name="Login" component={Login} />
             <Stack.Screen  name="Main" component={Main} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}



