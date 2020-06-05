import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import tips from '../Tips.js'
const {listenTotalTime, pullCreationDate} = require('../../model/dbModel.js');
const screen = Dimensions.get('window');

export default function ProfilePage() {

    const [timeProductive,setTimeProductive] = useState(0);
    const [creationDate, setCreationDate] = useState(0);
    const [tip, setTip] = useState(tips[0])
    const screen = Dimensions.get('window');

    function randomTip() {
        const randomNumber = Math.floor(Math.random() * tips.length);
        return tips[randomNumber];
    }

    function shuffleTips(array){
        return array.sort(()=>Math.random()-0.5)
    }

    onPress = () => {
        const randTip = randomTip();
        setTip(randTip)
        shuffleTips(tips)
    };

    useEffect(() => {
        listenTotalTime(setTimeProductive);
        pullCreationDate(setCreationDate);
    }, [timeProductive])


    return(
    <SafeAreaView style = {styles.container}>
        <Text style={styles.titleText}>Productivity</Text>

        <Text style={styles.statText}>{'Date Started: ' + creationDate}</Text>
        <Text style={styles.statText}>{"Time Productive: " + timeProductive + " seconds"}</Text>

            <Text style={styles.subtitleText}>Tip of the Day</Text>
            <Text style={styles.quote}>{tip.quote}</Text>
            <TouchableOpacity
                style={styles.tipButton}
                onPress={() => {onPress()}}
                underlayColor='#cfc0b7'>
                <Text style={styles.buttonText}>GIVE ME ANOTHER!</Text>
            </TouchableOpacity>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ebd9c6",
      flex: 1,
      alignItems: 'center'
    },
    photo: {
        width:300,
        height: 300,
        alignContent:"center",
    },
    subtitleText: {
        fontSize: 25,
        textAlign: "center",
        marginBottom: 10,
        marginTop: 30,
    },
    statText: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10
    },
    quote: {
        fontSize: 20,
        textAlign: "center",
        backgroundColor:"#f2e6d9",
        padding: 10
    },
    titleText: {
        fontSize: 30,
        textAlign: "center",
        marginBottom:10,
        marginTop:20
    },
    tipButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#9f8574',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#9f8574'
      },
      buttonText:{
        fontSize:19,
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
      },
      bottom: {
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom:30,
          paddingTop: 20
      }
  });