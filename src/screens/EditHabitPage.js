import React, { Component, useState } from 'react';
import { View, ScrollView, TextInput, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default function EditHabitPage(props) {

    const [title, setTitle] = useState(props.item.name);
    const [frequency, setFrequency] = useState(props.item.frequency);
    const [description, setDescription] = useState(props.item.description);

    function BackButton() {
        return(
            <TouchableOpacity onPress={() => props.showEditForm()}>
                <Image source={require("../pictures/cancel.png")}
                    style={{width:30, height:30}}
                />
            </TouchableOpacity>
        )
    }

    function RevertButton() {
        if(!props.item.completed) {
           return(<View></View>) 
        }
        return(
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        props.handleHabitCompletion(props.item.key, props.item.streak-1, false, props.item.lastCompleted)
                        props.showEditForm()
                    }}>
                    <Text style={styles.saveButtonText}>Revert Completion</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View>
                <Header containerStyle={{backgroundColor:'#F5FCFF', paddingTop:0, marginTop:0}}
                        leftComponent={<BackButton />}
                        centerComponent={{text: 'Edit Habit', style: {fontSize:35}}}
                />
            </View>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Habit Title"
                        onBlur={Keyboard.dismiss}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Habit Description (Optional)"
                        onBlur={Keyboard.dismiss}
                        value={description}
                        onChangeText={text => setDescription(text)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Habit Frequency"
                        onBlur={Keyboard.dismiss}
                        value={frequency}
                        onChangeText={text => setFrequency(text)}
                    />
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => {
                                if (title == "") {alert('Missing Task Title');}
                                else {props.editHabit(props.item.key.toString(),title,description, frequency);
                                     props.showEditForm();}
                            }}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => {
                                props.remove(props.item.key);
                            }}
                        >
                            <Text style={styles.saveButtonText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    <RevertButton />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#ffff',
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
    saveButton: {
        borderWidth: 1,
        borderRadius:20,
        borderColor: '#996633',
        backgroundColor: '#996633',
        padding: 15,
        margin: 10
      },
      removeButton: {
        borderWidth: 1,
        borderRadius:20,
        borderColor: '#4d3319',
        backgroundColor: '#4d3319',
        padding: 15,
        margin: 10
      },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
  });