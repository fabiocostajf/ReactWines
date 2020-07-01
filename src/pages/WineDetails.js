import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


import Container from '../components/Container'
import api from "../services/api"
import WineDetail from "../components/WineDetail"

export default function WineDetails({ navigation, route }) {
  const [data, setData] = useState({});
  const {wineId} = route.params;
  useEffect(() => {
    console.log(route.params)
    console.log("wine" + wineId)
    const response = api.get("/details", { id:wineId }).then(response => setData(response.data))

  }, [])



  return data && <WineDetail wine={data} navigation={navigation}/>
}



