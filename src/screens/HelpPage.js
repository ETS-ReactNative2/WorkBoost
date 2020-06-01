import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import {Header} from 'react-native-elements';

const screen = Dimensions.get('window');

export default function HelpPage() {
    return(
    <ScrollView style = {styles.container}>
        <Text style={styles.titleText}>Help Page</Text>
        <Image style = {styles.photo}
                resizeMode="contain"
                 source = {require('../pictures/help.png')}/>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ebd9c6",
      flex: 1,
    },
    photo: {
        width:"100%",
        height:1300
    },
    titleText: {
        fontSize: 30,
        textAlign: "center",
        marginTop:20
    }
  });