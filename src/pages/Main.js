import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';


import Container from '../components/Container'
import VinhoLista from '../components/VinhoLista'
import api from "../services/api"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { resposta: "", wines: [] }
  }
  testando = async () => {
    const response = await api.get("/test", {});
    let s = this.state;
    s.wines = response.data;
    this.setState(s)
  }
  render() {
    return (
      <Container>
        <TouchableOpacity
            style={styles.submitButton}
            onPress={this.testando}
          >
            <Text style={styles.submitText}>My Wines</Text>
          </TouchableOpacity>

          <ScrollView>
            {
              this.state.wines.map(wine => (
                <VinhoLista wine={wine} key={wine.name} />
              ))
            }
          </ScrollView>
      </Container>

    )
  }
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