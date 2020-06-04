import React, { Component, useState } from 'react';
import { View, ScrollView, TextInput, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image } from 'react-native';
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

    var [day, setDay] = useState("");
    var [month, setMonth] = useState("");
    var [year, setYear] = useState("");
    const [days, setDays] = useState([]);

    changeMonth = (item) =>{
        setMonth(item.value)

        switch (item.value) {
            case '1':
            case '3':
            case '5':
            case '7':
            case '8':
            case '10':
            case '12':
                setDays([
                    {label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}, {label: '4', value: '4'},
                    {label: '5', value: '5'}, {label: '6', value: '6'}, {label: '7', value: '7'}, {label: '8', value: '8'},
                    {label: '9', value: '9'}, {label: '10', value: '10'}, {label: '11', value: '11'}, {label: '12', value: '12'}, 
                    {label: '13', value: '13'}, {label: '14', value: '14'}, {label: '15', value: '15'}, {label: '16', value: '16'}, 
                    {label: '17', value: '17'}, {label: '18', value: '18'}, {label: '19', value: '19'}, {label: '20', value: '20'},
                    {label: '21', value: '21'}, {label: '22', value: '22'}, {label: '23', value: '23'}, {label: '24', value: '24'},
                    {label: '25', value: '25'}, {label: '26', value: '26'}, {label: '27', value: '27'}, {label: '28', value: '28'},
                    {label: '29', value: '29'}, {label: '30', value: '30'}, {label: '31', value: '31'}
                ]);
            break;
            case '4':
            case '6':
            case '9':
            case '11':
                setDays([
                    {label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}, {label: '4', value: '4'},
                    {label: '5', value: '5'}, {label: '6', value: '6'}, {label: '7', value: '7'}, {label: '8', value: '8'},
                    {label: '9', value: '9'}, {label: '10', value: '10'}, {label: '11', value: '11'}, {label: '12', value: '12'}, 
                    {label: '13', value: '13'}, {label: '14', value: '14'}, {label: '15', value: '15'}, {label: '16', value: '16'}, 
                    {label: '17', value: '17'}, {label: '18', value: '18'}, {label: '19', value: '19'}, {label: '20', value: '20'},
                    {label: '21', value: '21'}, {label: '22', value: '22'}, {label: '23', value: '23'}, {label: '24', value: '24'},
                    {label: '25', value: '25'}, {label: '26', value: '26'}, {label: '27', value: '27'}, {label: '28', value: '28'},
                    {label: '29', value: '29'}, {label: '30', value: '30'}
                ]);
            break;
            case '2':
                if( year%4 == 0 ){
                    setDays([
                        {label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}, {label: '4', value: '4'},
                        {label: '5', value: '5'}, {label: '6', value: '6'}, {label: '7', value: '7'}, {label: '8', value: '8'},
                        {label: '9', value: '9'}, {label: '10', value: '10'}, {label: '11', value: '11'}, {label: '12', value: '12'}, 
                        {label: '13', value: '13'}, {label: '14', value: '14'}, {label: '15', value: '15'}, {label: '16', value: '16'}, 
                        {label: '17', value: '17'}, {label: '18', value: '18'}, {label: '19', value: '19'}, {label: '20', value: '20'},
                        {label: '21', value: '21'}, {label: '22', value: '22'}, {label: '23', value: '23'}, {label: '24', value: '24'},
                        {label: '25', value: '25'}, {label: '26', value: '26'}, {label: '27', value: '27'}, {label: '28', value: '28'},
                        {label: '29', value: '29'}
                    ]);
                }
                else {
                    setDays([
                        {label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}, {label: '4', value: '4'},
                        {label: '5', value: '5'}, {label: '6', value: '6'}, {label: '7', value: '7'}, {label: '8', value: '8'},
                        {label: '9', value: '9'}, {label: '10', value: '10'}, {label: '11', value: '11'}, {label: '12', value: '12'}, 
                        {label: '13', value: '13'}, {label: '14', value: '14'}, {label: '15', value: '15'}, {label: '16', value: '16'}, 
                        {label: '17', value: '17'}, {label: '18', value: '18'}, {label: '19', value: '19'}, {label: '20', value: '20'},
                        {label: '21', value: '21'}, {label: '22', value: '22'}, {label: '23', value: '23'}, {label: '24', value: '24'},
                        {label: '25', value: '25'}, {label: '26', value: '26'}, {label: '27', value: '27'}, {label: '28', value: '28'}
                    ]);
                }
            break;
        }
        
    }

    changeYear = (item) =>{
        setYear(item.value)
    }

    changeDay = (item) =>{
        setDay(item.value)
        console.log(`here${day}!`)

    }

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
                    {/* <View style={{flexDirection:"row", justifyContent:"center"}}> */}
                    {/* <DropDownPicker
                        items={[
                            {label: '2019', value: '2019'},
                            {label: '2020', value: '2020'},
                            {label: '2021', value: '2021'},
                            {label: '2022', value: '2022'},
                            {label: '2023', value: '2023'}
                        ]}
                        dropDownStyle={styles.dropdown}
                        // activeLabelStyle={styles.activeLabel}
                        containerStyle={styles.dropdownContainer}
                        defaultNull
                        placeholder="Year"
                        onChangeItem={item => {
                            console.log(item.label, item.value)
                            changeYear(item)
                        }}
                    />
                    <DropDownPicker
                        items={[
                            {label: 'January', value: '1'},
                            {label: 'February', value: '2'},
                            {label: 'March', value: '3'},
                            {label: 'April', value: '4'},
                            {label: 'May', value: '5'},
                            {label: 'June', value: '6'},
                            {label: 'July', value: '7'},
                            {label: 'August', value: '8'},
                            {label: 'September', value: '9'},
                            {label: 'October', value: '10'},
                            {label: 'November', value: '11'},
                            {label: 'December', value: '12'},
                        ]}
                        dropDownStyle={styles.dropdown}
                        // activeLabelStyle={styles.activeLabel}
                        containerStyle={styles.dropdownContainer}
                        defaultNull
                        placeholder="Month"
                        onChangeItem={item => 
                            {console.log(item.label, item.value)
                            changeMonth(item)}
                        }
                    />
                    <DropDownPicker
                        items={days}
                        dropDownStyle={styles.dropdown}
                        // activeLabelStyle={styles.activeLabel}
                        containerStyle={styles.dropdownContainer}
                        defaultNull
                        placeholder="Day"
                        onChangeItem={item => 
                            {console.log(item.label, item.value)
                            changeDay(item)
                        }}
                    />
                    </View> */}
                    <PickerCascader style={{ padding: 10 }} data={[
                        {
                        key: '1', text: '2020', children: [{
                            key: '2', text: 'January',
                            children: [{ key: '3', text: '1' }, { key: '4', text: '2' }]
                        },
                        {
                            key: '5', text: 'Victoria',
                            children: [{ key: '6', text: 'Melbourne' }, { key: '7', text: 'Geelong' }]
                        }
                        ]
                        },
                        {
                        key: '10', text: '2021',
                        children: [
                            {
                            key: '11', text: 'Alberta', children: [{ key: '12', text: 'Calgary' },
                            { key: '13', text: 'Brooks' }]
                            },
                            {
                            key: '14', text: 'British Columbia', children: [{ key: '15', text: 'Vancouver' },
                            { key: '16', text: 'Vernon' }]
                            }

                        ]
                        },
                        {
                        key: '20', text: '2022',
                        children: [
                            {
                            key: '21', text: 'New York', children: [{ key: '22', text: 'Albany' },
                            { key: '23', text: 'Norwich' }]
                            },
                            {
                            key: '24', text: 'Pennsylvania', children: [{ key: '25', text: 'Farrell' },
                            { key: '26', text: 'Parker' }]
                            }

                        ]
                        }
                    ]}
                        onValueChange={(item) => this.valueChanged(item)}>
                        >
                    </PickerCascader>
                    <View style={styles.saveContainer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => {
                                
                                setDueDate(`${month}-${day}-${year}`)
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
    dropdown: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#dfdfdf',
    },
    activeLabel:{
        color: 'red'
    },
    dropdownContainer: {
        flex: 1,
        flexDirection:"row", 
        justifyContent:"center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: 100,
        height:80
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
    saveContainer: {
        paddingTop: 250
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