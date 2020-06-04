import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import {Header} from 'react-native-elements';
const {pullTotalTime, pullCreationDate} = require('../../model/dbModel.js');
const screen = Dimensions.get('window');

export default function ProfilePage() {

    const [timeProductive,setTimeProductive] = useState(0);
    const [creationDate, setCreationDate] = useState(0);

    useEffect(() => {
        pullTotalTime(setTimeProductive);
        pullCreationDate(setCreationDate);
    }, [])


    return(
    <SafeAreaView style = {styles.container}>
        <Text style={styles.titleText}>Profile</Text>
        <Text style={styles.statText}>Name: Laurent Lee</Text>
        <Text style={styles.statText}>Email: lrent@test.com</Text>
        

        <Text style={styles.statText}>{'Date Started: ' + creationDate}</Text>
        <Text style={styles.statText}>{"Time Productive: " + timeProductive + " seconds"}</Text>
        <Text style={styles.statText}>Tasks completed: 230 tasks</Text>
        <Text style={styles.statText}>Habits checked off: 243 habits</Text>
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
    titleText: {
        fontSize: 30,
        textAlign: "center",
        marginBottom:10,
    },
    subtitleText: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 10,
        marginTop: 30,
    },
    statText: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    }
  });