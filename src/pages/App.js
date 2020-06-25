import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from './Login';
import Main from './Main';
import WineDetails from './WineDetails';

const Tab = createBottomTabNavigator()


export default function App()  {
  
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
          <Tab.Screen name="WineDetails" component={WineDetails} />
        </Tab.Navigator>
      </NavigationContainer>




    )
}



