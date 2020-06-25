import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class VinhoHeader extends Component {
    render() {
        return (
            <View style={styles.headerMaster}>
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
        justifyContent:"center",
        height: 60
    },
    headerContent: {
        width: "50%",
        marginTop: 10,
    },
    logo:{
        width:100,
        height:40,
        
    }


})
