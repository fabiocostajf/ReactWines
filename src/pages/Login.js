import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';




export default class Login extends Component {
  render() {
    return (
      <View>
          <TextInput placeholder="User" keyboardType="email-address" />
          <TextInput placeholder="Password" />
          <Button title="Login" onPress={ () => this.props.navigation.navigate("Main")}/>
      </View>  
      
    )
  }
}



