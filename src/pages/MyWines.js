import React from 'react';
import {View, Text} from 'react-native';

import Container from '../components/Container';
export default function MyWines({navigation}) {
  return (
    <Container navigation={navigation}>
      <View>
        <Text>My Wyne</Text>
      </View>
    </Container>
  );
}
