import React, { Component, useState } from 'react';
import { View, ScrollView, TextInput, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default function AddTaskPage(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function BackButton() {
        return(
            <TouchableOpacity onPress={() => props.showAddForm()}>
                <Image source={require("../pictures/cancel.png")}
                    style={{width:30, height:30}}
                />
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <View>
                <Header containerStyle={{backgroundColor:'#F5FCFF', paddingTop:0, marginTop:0}}
                        leftComponent={<BackButton />}
                        centerComponent={{text: 'Add Task', style: {fontSize:35}}}
                />
            </View>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Task Title"
                        onBlur={Keyboard.dismiss}
                        value={title}
                        maxLength={25}
                        onChangeText={title => setTitle(title)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Task Description (Optional)"
                        onBlur={Keyboard.dismiss}
                        value={description}
                        maxLength={40}
                        onChangeText={description => setDescription(description)}
                    />
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => {
                                if (title == "") {alert('Missing Task Title');}
                                else{props.addTask(title,description)
                                    props.showAddForm()}
                            }}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
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