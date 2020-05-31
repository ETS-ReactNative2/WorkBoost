import React, { Component, useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image, TouchableHighlight } from 'react-native';
import {Header} from 'react-native-elements'
import {Audio} from 'expo-av'

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}


export default function CompleteTimerPage(props) {

    const [remainingSecs, setRemainingSecs] = useState(30);
    const { mins, secs } = getRemaining(remainingSecs);

    useEffect(() => {
        let interval = null;
        if (remainingSecs == 0){
            props.toggleCompleteModal()
            props.reset()
            props.playBreakAlarm();
            
        } else if (props.breakActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs - 1);
            }, 1000);           
        } 
        else if (!breakActive && remainingSecs != 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.breakActive, remainingSecs]);


    return(
        <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.header}>You Worked Hard!</Text>
                        <Text style={styles.textInput}>Here's a 5 minute coffee break</Text>
                        <Image
                            style = {{ width: 200, height: 200 }}
                            source = {require('../pictures/congrats.png')}
                        />
                        <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>          
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                            props.toggleCompleteModal()
                            props.reset()
                            props.stopAlarm();
                            }}
                        >
                            <Text style={styles.textStyle}>Skip Break</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "red" }}
                            onPress={() => {
                            props.stopAlarm();
                            }}
                        >
                            <Text style={styles.textStyle}>Stop Alarm</Text>
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
    inputContainer: {
        paddingTop: 15
      },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        fontSize: 20,
        textAlign: 'center',
    },
    subtext: {
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
      timerText: {
        color: 'black',
        fontSize: 60,
        marginBottom: 0
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      }
  });