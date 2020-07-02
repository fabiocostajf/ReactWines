import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function WineDetail(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <View style={{flex: 1.3, backgroundColor: '#fff'}}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => props.navigation.goBack()}>
          <Text style={styles.submitText}> Go Back </Text>
        </TouchableOpacity>

        <Image
          style={styles.photoContainer}
          source={{uri: props.wine.image}}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 2}}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}><Text style={styles.infoTextTitle}>Name</Text> {"\n"+props.wine.name}</Text>
          <Text style={styles.infoText}><Text style={styles.infoTextTitle}>Type</Text> {"\n"+props.wine.type}</Text>
          <Text style={styles.infoText}><Text style={styles.infoTextTitle}>Price</Text>{"\nR$"+props.wine.price}</Text>
          <Text style={styles.infoText}><Text style={styles.infoTextTitle}>Name</Text>{"\n"+props.wine.name}</Text>
          <Text style={styles.infoText}><Text style={styles.infoTextTitle}>Type</Text>{"\n"+props.wine.type}</Text>
          <Text style={styles.infoText}><Text style={styles.infoTextTitle}>Price</Text>{"\nR$"+props.wine.price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
    flexDirection: 'row',
    height: 80,
    marginBottom:10
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
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10,
    width: '50%',
    
  },
  infoTextContainer:{
    marginTop: 30,      
    flexWrap: 'wrap',
    alignItems: 'flex-start' ,
    flexDirection: 'row',
     flex: 1
  },
  infoTextTitle:{
      fontWeight:"bold"
  }
});
