import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
const screen = Dimensions.get('window');
const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function TimerPage() {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);
    const secsToMin = 60;

    toggle = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        console.log(remainingSecs);
        console.log(remainingSecs == 0);
        if (remainingSecs == 0){
            alert("Timer is Done");
            reset();
        } else if (isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs - 1);
            }, 1000);           
        } 
        else if (!isActive && remainingSecs != 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, remainingSecs]);

    reset = () => {
        setRemainingSecs(10);
        setIsActive(false);
    }

    return(
        <View style={styles.container}>
            <Slider style={{width: 200, height: 40}} minimumValue={5}
                maximumValue={60} step={5} onValueChange={(e) => {setRemainingSecs(e*secsToMin)}}></Slider>
            <StatusBar barStyle="light-content" />
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={this.toggle} style={styles.button}>
                <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.reset} style={[styles.button, styles.buttonReset]}>
                <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    { container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 10,
        borderColor: '#B9AAFF',
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 45,
        color: '#B9AAFF'
    },
    timerText: {
        color: '#fff',
        fontSize: 90,
        marginBottom: 20
    },
    buttonReset: {
        marginTop: 20,
        borderColor: "#FF851B"
    },
    buttonTextReset: {
        color: "#FF851B"
    }
}
);