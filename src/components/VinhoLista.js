import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function VinhoLista (props) {
      
        return (
                <View style={styles.wineConatiner} >
                    <TouchableOpacity 
                         onPress={() => props.navigation.navigate("WineDetails", {wineId: props.wine.id})}
                    >
                    <View style={styles.wineContent}>
                        <Image
                            style={styles.photoContainer}
                            source={{ uri: props.wine.image }}
                            resizeMode="contain"
                        />
                        <View style={styles.InfoContainer}>
                            <Text>Name: {props.wine.name}</Text>
                            <Text>Type: {props.wine.type}</Text>
                            <Text>Price: R${props.wine.price}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                </View>
            


        );
}

const styles = StyleSheet.create({
    wineConatiner: {
        flex: 5,
        padding: 5,
        margin: 1
    },
    photoContainer: {
        flex: 1.8,
        borderWidth: 1,
        borderColor: "#dcdcdc",
       

    },
    InfoContainer: {
        flex: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "#dcdcdc",
        backgroundColor: "#ffffff"

    },
    wineContent: {
        flexDirection: "row",
        flex: 1
    }

})
