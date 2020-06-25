import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from './Login';
import Main from './Main';

const Tab = createBottomTabNavigator()


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          tabBarOptions={{
            labelStyle: {
              fontSize: 15,
              margin: 0,
              padding: 0,
            },
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Main" component={Main} />
        </Tab.Navigator>
      </NavigationContainer>




    )
  }
}



