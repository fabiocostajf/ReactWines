import React, { Component, useState  } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';


import Container from '../components/Container'
import VinhoLista from '../components/VinhoLista'
import api from "../services/api"

export default function Main (props) {
  const [wines,setWines] = useState([]);  
  // constructor(props) {
  //   super(props);
  //   this.state = { resposta: "", wines: [] }
  // }
  const testando = async () => {
    const response = await api.get("/test", {});
    setWines(response.data);
    
  }
  
    return (
      <Container>
        <TouchableOpacity
            style={styles.submitButton}
            onPress={testando}
          >
            <Text style={styles.submitText}>My Wines</Text>
          </TouchableOpacity>

          <ScrollView>
            {
               wines.map(wine => (
                <VinhoLista navigation={props.navigation} wine={wine} key={wine.id} />
              ))
            }
          </ScrollView>
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