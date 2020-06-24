import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class VinhoFooter extends Component {
    render() {
        return (
            <View style={styles.containerFooter}>
                <Text style={styles.textWhite}>
                   This is a Footer
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerFooter: {
        backgroundColor: "#00A000",
        flex: 1
    }
})
