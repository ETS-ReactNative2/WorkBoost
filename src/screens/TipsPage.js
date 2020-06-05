import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import tips from '../Tips.js'

export default function TipsPage(props) {
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
  
    function BackButton() {
        return(
            <TouchableOpacity onPress={() => props.toggleTipModal()}>
                <Image source={require("../pictures/cancel.png")}
                    style={{width:30, height:30}}
                />
            </TouchableOpacity>
        )
    }
                     
    return(
        <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                            <Header containerStyle={{backgroundColor: "#ebd9c6", paddingTop:0, marginTop:0}}
                                    leftComponent={<BackButton />}
                                    centerComponent={{text: 'Tip of the Day', style: {fontSize:28}}}
                            />
                        <Text style={styles.quote}>{tip.quote}</Text>
                        <TouchableOpacity
                            style={styles.tipButton}
                            onPress={() => {onPress()}}
                            underlayColor='#cfc0b7'>
                            <Text style={styles.buttonText}>Refresh</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    )
    /*return (
        <SafeAreaView style={styles.centeredView}>
            <Text style={styles.titleText}>Helpful Tips</Text>
            <Text style={styles.quote}>{tip.quote}</Text>
            <TouchableOpacity
                style={styles.tipButton}
                onPress={() => {onPress()}}
                underlayColor='#cfc0b7'>
                <Text style={styles.buttonText}>GIVE ME ANOTHER!</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tipButton}
                onPress={() => {props.toggleTipModal}}
                underlayColor='#cfc0b7'>
                <Text style={styles.buttonText}>That's enough tips for Today</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );*/
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        alignItems:'center',
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
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "#ebd9c6",
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
  });