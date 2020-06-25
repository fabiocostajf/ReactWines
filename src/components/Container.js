import React, { Component } from 'react';
import { View, StyleSheet, But } from 'react-native';

import VinhoHeader from './VinhoHeader'
export default function Container(props)  {
    
      return (
        <View style={styles.container}>
  
          <VinhoHeader></VinhoHeader>
          
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
      backgroundColor: "#f4f0f7",
      flex:10
      
    }
  })
  