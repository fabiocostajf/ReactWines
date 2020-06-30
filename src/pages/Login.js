import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';


import Container from '../components/Container'

export default function Login ({navigation}){
  
    return (
      <Container>
        <View>
          <TextInput style={styles.input} placeholder="User"  keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>


        </View>
      </Container>


    )
}



const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
    margin: 15,
    height: 40,
    borderColor: '#44245A',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#44245A',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: "center",
    color: '#ffffff'
  },
  submitText: {
    color: "#fff"
  }
})
