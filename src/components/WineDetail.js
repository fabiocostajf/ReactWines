import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function WineDetail(props) {
    
    return (
        <View style={{ flex: 1, alignItems: "stretch", justifyContent: 'center', flexDirection: "column" }}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => props.navigation.goBack()}
                >
                    <Text style={styles.submitText}> Go Back </Text>
                </TouchableOpacity>

                <Image
                    style={styles.photoContainer}
                    source={{ uri: props.wine.image }}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.infoText}>Name: {props.wine.name}</Text>
                <Text style={styles.infoText}>Type: {props.wine.type}</Text>
                <Text style={styles.infoText}>Price: ${props.wine.price}</Text>

            </View>

        </View >
    )
}


const styles = StyleSheet.create({
    photoContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#dcdcdc",
        flexDirection: "row",
        height: 80

    },
    submitButton: {
        backgroundColor: '#44245A',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: "center",
        color: '#ffffff',
        width: 80

    },
    submitText: {
        color: "#fff"
    },
    infoText: {
        fontSize: 20,
        marginBottom: 10,
        paddingLeft: 10
    }
})
