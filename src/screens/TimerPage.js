import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Dimensions, Modal, TouchableHighlight } from 'react-native';
import {Slider} from 'react-native-elements'
import ExitTimerForm from '../screens/ExitTimerPage'
import CompleteTimerForm from '../screens/CompleteTimerPage'
import {Audio} from 'expo-av'
const {pullTotalTime, addTotalTime} = require('../../model/dbModel.js');

const soundObject = new Audio.Sound()

const screen = Dimensions.get('window');
const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function TimerPage() {
    const [remainingSecs, setRemainingSecs] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [prevTime, setPrevTime] = useState(5);
    const [exitModalActive, setExitModalActive] = useState(false);
    const [completeModalActive, setCompleteModalActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);
    const secsToMin = 1;
    const [timeProductive,setTimeProductive] = useState(0);


    toggle = () => {
        setIsActive(!isActive);
        setPrevTime(remainingSecs);
    }

    playAlarm = async () => {
        try {
            await soundObject.unloadAsync();
            await soundObject.loadAsync(require('../audio/the_calm_alarm.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
              console.log("error")
            // An error occurred!
          }

    }

    playBreakAlarm = async () => {
        try {
            await soundObject.unloadAsync();
            await soundObject.loadAsync(require('../audio/calm_morning_alarm.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
              console.log("error")
            // An error occurred!
          }

    }

    stopAlarm = async () => {
        try {
            await soundObject.stopAsync();
            // Your sound is stopping!
          } catch (error) {
              console.log("error")
            // An error occurred!
          }

    }


    useEffect(() => {
        let interval = null;
        if(remainingSecs == 4){
            pullTotalTime(setTimeProductive);
            console.log(timeProductive);
        }
        if (remainingSecs == 1){
            setExitModalActive(false);

        }
        if (remainingSecs == 0){
            toggleCompleteModal();
            playAlarm();
            addTotalTime(timeProductive + prevTime);
            console.log(timeProductive + prevTime)
        } else if (isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs - 1);
            }, 1000);           
        } 
        else if (!isActive && remainingSecs != 0) {
            clearInterval(interval);
            console.log(remainingSecs);
        }
        return () => clearInterval(interval);
    }, [isActive, remainingSecs]);

    endEarly = () => {
        if(remainingSecs != 1){
            toggleExitModal()
        }
    }

    reset = () => {
            setRemainingSecs(prevTime);
            setIsActive(false);
    }

    resetButton = () => {
        reset();
        stopAlarm();
    }

    toggleExitModal = () => {
        setExitModalActive(!exitModalActive);
    }

    toggleCompleteModal = () => {
        if(exitModalActive){
            toggleExitModal();
        }
        setCompleteModalActive(!completeModalActive);
    }

    return(
        <View style={styles.container}>


            <Modal animationType="slide" transparent={true} visible={!completeModalActive && exitModalActive}>
                <ExitTimerForm 
                               toggleExitModal={this.toggleExitModal}
                               reset={this.reset}/>
            </Modal>

            <Modal animationType="slide" transparent={true} visible={completeModalActive}>
                <CompleteTimerForm 
                               toggleCompleteModal={this.toggleCompleteModal}
                               reset={this.reset}
                               breakActive={completeModalActive}
                               playBreakAlarm={this.playBreakAlarm}
                               stopAlarm={this.stopAlarm}/>
            </Modal>

            <Slider minimumTrackTintColor='#bf8040' thumbTintColor="#734d26" disabled={isActive} style={styles.sliderStyle} minimumValue={5}
                maximumValue={60} step={5} value={prevTime} onValueChange={(e) => {setRemainingSecs(e*secsToMin)}}></Slider>
            <StatusBar barStyle="light-content" />
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity disabled={isActive} onPress={this.toggle} style={styles.button}>
                <Text style={styles.buttonText}>{ 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={isActive ? endEarly : this.resetButton} style={[styles.button, styles.buttonReset]}>
                <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    { 
       centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
          },
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 10,
        borderColor: '#86592d',
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 45,
        color: '#86592d'
    },
    timerText: {
        color: 'black',
        fontSize: 90,
        marginBottom: 20
    },
    buttonReset: {
        marginTop: 20,
        borderColor: "#e6ccb3",
    },
    buttonTextReset: {
        color: "#e6ccb3"
    },
    buttonTextSmall: {
        fontSize: 30,
        color: '#B9AAFF'
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
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 80,
        marginTop: 5
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      sliderStyle:{
          width: 240,
          height: 40,
      },
      thumbStyle: {
          color: 'blue'
      }
}
);