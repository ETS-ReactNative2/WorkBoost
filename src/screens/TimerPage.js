import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Dimensions, Modal, TouchableHighlight } from 'react-native';
import {Slider} from 'react-native-elements'
import { rem } from 'prelude-ls';


const screen = Dimensions.get('window');
const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function TimerPage() {
    const [remainingSecs, setRemainingSecs] = useState(300);
    const [isActive, setIsActive] = useState(false);
    const [prevTime, setPrevTime] = useState(300);
    const [modalActive, setModalActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);
    const secsToMin = 1;


    toggle = () => {
        setIsActive(!isActive);
        setPrevTime(remainingSecs);
    }

    useEffect(() => {
        let interval = null;
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

    endEarly = () => {
        toggleModal()
    }

    reset = () => {
            setRemainingSecs(prevTime);
            setIsActive(false);
    }

    toggleModal = () => {
        setModalActive(!modalActive);
    }

    return(
        <View style={styles.container}>
            <Modal animationType="slide" transparent={true} visible={modalActive}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Quit Timer Early?</Text>                   
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                            toggleModal()
                            reset()
                            }}
                        >
                            <Text style={styles.textStyle}>Yes</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{...styles.openButton, backgroundColor: "#2196F3"} }onPress = {() => {toggleModal()}}>
                            
                            <Text style={styles.textStyle}>No</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <Slider minimumTrackTintColor='blue' thumbTintColor="#4588f5" disabled={isActive} style={styles.sliderStyle} minimumValue={300}
                maximumValue={3600} step={300} value={prevTime} onValueChange={(e) => {setRemainingSecs(e*secsToMin)}}></Slider>
            <StatusBar barStyle="light-content" />
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity disabled={isActive} onPress={this.toggle} style={styles.button}>
                <Text style={styles.buttonText}>{ 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={isActive ? endEarly : this.reset} style={[styles.button, styles.buttonReset]}>
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
        borderColor: 'blue',
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 45,
        color: 'blue'
    },
    timerText: {
        color: 'blue',
        fontSize: 90,
        marginBottom: 20
    },
    buttonReset: {
        marginTop: 20,
        borderColor: "red"
    },
    buttonTextReset: {
        color: "red"
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