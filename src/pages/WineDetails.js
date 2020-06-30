import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


import Container from '../components/Container'

export default function WineDetails ({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
    )
}



const styles = StyleSheet.create({
  
})
