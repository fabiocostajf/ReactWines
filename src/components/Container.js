import React, { Component } from 'react';
import { View, StyleSheet, But } from 'react-native';

import VinhoHeader from './VinhoHeader'
export default function Container(props)  {
    console.log("COntainer"+ props.navigation)
      return (
        <View style={styles.container}>
  
          <VinhoHeader navigation={props.navigation}></VinhoHeader>
          
          <View style={styles.containerBody}>
          {props.children} 
        
           
          </View>
  
        </View>
      )
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerBody: {
      backgroundColor: "#F7F7F7",
      flex:10
      
    }
  })
  