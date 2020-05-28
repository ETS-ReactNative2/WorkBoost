import React, { Component, useState } from 'react';
import { View, ScrollView, TextInput, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default function CompleteHabitPage(props) {

    function BackButton() {
        return(
            <TouchableOpacity onPress={() => props.showCompForm()}>
                <Image source={require("../pictures/cancel.png")}
                    style={{width:30, height:30}}
                />
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
                <Header containerStyle={{backgroundColor:'#FFFFFF', paddingTop:0, marginTop:0}}
                        leftComponent={<BackButton />}
                        centerComponent={{text: 'Congratulations!', style: {fontSize:30}}}
                />
                <Text style = {{textAlign:'center', fontSize:20}}>Tap "Done" to complete "{props.name}."</Text>
                <Text style = {{textAlign:'center', fontSize:20}}>Streak: {props.streak - 1} -> {props.streak}</Text>
                <Image
                    style = {{ width: 350, height: 350 }}
                    source = {require('../pictures/congrats.png')}
                />
                <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.doneButton}
                            onPress={() => { props.completeHabit(); props.closeForm(); }}
                        >
                        <Text style={styles.saveButtonText}>Done</Text>
                        </TouchableOpacity>
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
        height: 50,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 40
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
    }
  });