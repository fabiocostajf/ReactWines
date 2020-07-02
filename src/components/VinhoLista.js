import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function VinhoLista (props) {
      
        return (
                <View style={styles.wineConatiner} >
                    <TouchableOpacity style={{height: "100%",alignContent:"center", justifyContent:"center"}}
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
                            <Text style={{backgroundColor:"#B39DDB", padding:5, width:"50%", color:"#ffffff"}} >Price: R${props.wine.price.toFixed(2)}</Text>
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
        margin: 1,
        height:100,
        justifyContent: 'center',
        //alignItems: 'center',
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
        backgroundColor: "#ffffff",
        height:"100%",
        alignSelf:"flex-start"

    },
    wineContent: {
        flexDirection: "row",
        flex: 1
    }

})
