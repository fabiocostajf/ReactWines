import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from './Login';
import Main from './Main';
import WineDetails from './WineDetails';
import MyWines from "./MyWines"


const MainStack = createBottomTabNavigator();
const MainStackScreen = () => {
  return(
  <MainStack.Navigator>
    <MainStack.Screen name="Main" component={Main}/>
    <MainStack.Screen name="MyWines" component={MyWines}/>
  </MainStack.Navigator>)
}

const HomeStack = createStackNavigator()
const HomeStackScreen = () => {
  return (
  <HomeStack.Navigator  
  screenOptions={{
    headerShown: false
  }}
    tabBarOptions={{
      labelStyle: {
        fontSize: 15,
        margin: 0,
        padding: 0,
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <HomeStack.Screen name="Main" component={MainStackScreen}  />
    <HomeStack.Screen options={{headerShown:false}} name="WineDetails" component={WineDetails} />
  </HomeStack.Navigator>
  )
}

const AuthStack = createStackNavigator()
const AuthStackScreen = () => {
  return (
  <AuthStack.Navigator 
  screenOptions={{
    headerShown: false
  }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Main" component={HomeStackScreen} />
  </AuthStack.Navigator>
  )
}


export default function App() {
  const [user, setUser] = React.useState(false)
  return (
    < NavigationContainer >
      { 
        user ? <HomeStackScreen /> : <AuthStackScreen />
      }
    </NavigationContainer >
  )
}



