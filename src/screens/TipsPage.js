import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import tips from '../Tips.js'

export default function TipsPage() {
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
  
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Helpful Tips</Text>
            <Text style={styles.quote}>{tip.quote}</Text>
            <TouchableOpacity
                style={styles.tipButton}
                onPress={() => {onPress()}}
                underlayColor='#cfc0b7'>
                <Text style={styles.buttonText}>GIVE ME ANOTHER!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ebd9c6",
        flex: 1,
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
        marginBottom:20,
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
      }
  });