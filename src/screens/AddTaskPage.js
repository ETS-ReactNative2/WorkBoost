import React, { Component, useState } from 'react';
import { View, ScrollView, TextInput, Button, Platform, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements'
// // import DateDropdown from '../components/buttons/DateDropdown.js'
// import DropDownPicker from 'react-native-dropdown-picker';
// // import {Dropdown } from 'react-native-dropdown';
// import PickerCascader  from 'react-native-picker-cascader';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTaskPage(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        setShow(Platform.OS === 'ios');
        setDate(selectedDate);
        console.log(selectedDate);
        
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
                    {/* <TextInput
                        style={styles.textInput}
                        placeholder="Due Date (M-D-YYYY)"
                        onBlur={Keyboard.dismiss}
                        value={dueDate}
                        maxLength={40}
                        onChangeText={dueDate => setDueDate(dueDate)}
                    /> */}
                    <View>
                        <Button onPress={showDatepicker} title="Show date picker!" />
                    </View>
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
                                // else if (dueDate == "") {alert('Missing Due Date');}
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