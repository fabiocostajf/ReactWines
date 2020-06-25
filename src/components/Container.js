import React, { Component } from 'react';
import { View, StyleSheet, But } from 'react-native';

import VinhoHeader from './VinhoHeader'
export default class Container extends Component {
    render() {
      return (
        <View style={styles.container}>
  
          <VinhoHeader></VinhoHeader>
          
          <View style={styles.containerBody}>
          {this.props.children} 
        
           
          </View>
  
        </View>
      )
    }
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
  