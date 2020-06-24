import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

import VinhoHeader from './components/VinhoHeader'
import VinhoFooter from './components/VinhoFooter'
import VinhoLista from './components/VinhoLista'
import api from "./services/api"

export default class App extends Component {
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
      <View style={styles.container}>

        <VinhoHeader></VinhoHeader>
        <Button onPress={this.testando} title="GET"></Button>
        <View style={styles.containerBody}>
          {
            this.state.wines.map(wine => (
              <VinhoLista wine={wine}  key={wine.name}/>
            ))
          }
        </View>

        <VinhoFooter></VinhoFooter>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBody: {
    backgroundColor: "#F9F9F9",
    flex: 10
  }
})
