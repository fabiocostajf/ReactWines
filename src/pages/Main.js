import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import Container from '../components/Container';
import VinhoLista from '../components/VinhoLista';
import api from '../services/api';

export default function Main({navigation}) {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    api.get('/test', {}).then((response) => setWines(response.data));
  }, []);

  // const testando = async () => {
  //   const response = await api.get("/test", {});
  //   setWines(response.data);

  // }

  return (
    wines && (
      <Container navigation={navigation}>
        {/* <TouchableOpacity
            style={styles.submitButton}
            onPress={testando}
          >
            <Text style={styles.submitText}>My Wines</Text>
          </TouchableOpacity>
           */}
        <ScrollView>
          {wines.map((wine) => (
            <VinhoLista navigation={navigation} wine={wine} key={wine.id} />
          ))}
        </ScrollView>
      </Container>
    )
  );
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
    margin: 15,
    height: 40,
    borderColor: '#44245A',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#44245A',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
    color: '#ffffff',
  },
  submitText: {
    color: '#fff',
  },
});
