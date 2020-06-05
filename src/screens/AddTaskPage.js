import React, { Component, useState } from 'react';
import { View, ScrollView, TextInput, Button, Platform, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTaskPage(props) {

    let today = new Date();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(`${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        setShow(Platform.OS === 'ios');
        setDate(selectedDate);
        let transform = selectedDate.toString().split(' ');
        let monthName = transform[1];
        let day = transform[2];
        let year = transform[3];
        let month = 0;
        
        switch(monthName) {
            case 'Jan':
                month = 1;
            break;
            case 'Feb':
                month = 2;
            break;
            case 'Mar':
                month = 3;
            break;
            case 'Apr':
                month = 4;
            break;
            case 'May':
                month = 5;
            break;
            case 'Jun':
                month = 6;
            break;
            case 'Jul':
                month = 7;
            break;
            case 'Aug':
                month = 8;
            break;
            case 'Sep':
                month=9;
            break;
            case 'Oct':
                month=10;
            break;
            case 'Nov':
                month=11;
            break;
            case 'Dec':
                month=12;
            break;

        }
        setDueDate(`${month}-${day}-${year}`);
        console.log(dueDate)
        
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

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
                <Header containerStyle={{backgroundColor:'#ffff', paddingTop:0, marginTop:0}}
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
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => {
                                if (title == "") {alert('Missing Task Title');}
                                else{
                                    props.addTask(title,description, dueDate)
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
        borderColor: '#dfbf9f',
        backgroundColor: '#dfbf9f',
        padding: 15,
        margin: 5
      },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
  });