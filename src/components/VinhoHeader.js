import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class VinhoHeader extends Component {
    render() {
        return (
            <View style={styles.headerMaster}>
                <Text style={styles.headerContent}> Home  </Text>
                <Image style={[styles.headerContent, styles.logo]}  source={require('../images/logo.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerFontColor: {
        color: 'red'
    },
    headerMaster: {
        backgroundColor: "#44245A",
        flex: 1.5,
        flexDirection:"row",
        justifyContent:"center"
    },
    headerContent: {
        width: "50%",
        marginTop: 10,
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    },
    logo:{
        width:100,
        height:40,
        
    }


})
