import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class VinhoHeader extends Component {
    render() {
        return (
           
                <View style={styles.wineConatiner} >
                    <View style={styles.wineContent}>
                        <Image
                            style={styles.photoContainer}
                            source={{ uri: this.props.wine.image }}
                            resizeMode="contain"
                        />
                        <View style={styles.InfoContainer}>
                            <Text>Name: {this.props.wine.name}</Text>
                            <Text>Type: {this.props.wine.type}</Text>
                            <Text>Price: R${this.props.wine.price}</Text>
                        </View>
                    </View>

                </View>
            


        );
    }
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
