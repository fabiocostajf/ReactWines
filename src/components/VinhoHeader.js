import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function VinhoHeader(props) {
    console.log("HEader"+ props.navigation)
  return (
    <View style={styles.headerMaster}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => props.navigation.goBack()}>
        <Text style={styles.submitText}> Go Back </Text>
      </TouchableOpacity>
      <Image
        style={[styles.headerContent, styles.logo]}
        source={require('../images/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerMaster: {
    backgroundColor: '#44245A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  headerContent: {
    width: '100%',
  },
  logo: {
    width: 100,
    height: 40,
  },
  submitButton: {
    backgroundColor: '#44245A',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
    color: '#ffffff',
    width: 80,
  },
  submitText: {
    color: '#fff',
  },
});
