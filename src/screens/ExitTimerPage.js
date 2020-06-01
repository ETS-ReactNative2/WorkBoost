import React, { Component, useState } from 'react';
import { View, ScrollView, TextInput, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image, TouchableHighlight } from 'react-native';
import {Header} from 'react-native-elements'

export default function ExitTimerPage(props) {

    return(
        <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.header}>Quit Timer Early?</Text>
                        <Image
                            style = {{ width: 200, height: 200 }}
                            source = {require('../pictures/sad_logo.png')}
                        />                   
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#dfbf9f" }}
                            onPress={() => {
                            props.toggleExitModal()
                            props.reset()
                            }}
                        >
                            <Text style={styles.textStyle}>Yes, I'm a quitter</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{...styles.openButton, backgroundColor: "#86592d"} }onPress = {() => {props.toggleExitModal()}}>
                            
                            <Text style={styles.textStyle}>No, I can do this!</Text>
                        </TouchableHighlight>
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      alignItems:'center',
      backgroundColor: '#FFFFFF',
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    doneButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
      },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 160,
        marginTop: 5
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      }
  });