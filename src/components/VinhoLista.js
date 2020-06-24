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
        padding: 5

    },
    photoContainer: {
        flex: 1.8


    },
    InfoContainer: {
        flex: 5,
        padding: 5

    },
    wineContent: {
        flexDirection: "row",
        flex: 1
    }

})
