import React, { Component, useState } from 'react';
import { View, ScrollView, TextInput, Keyboard, TouchableOpacity, StyleSheet, Text, Alert, Image, Button } from 'react-native';
import {Header} from 'react-native-elements'

export default function EditHabitPage(props) {

    const [title, setTitle] = useState(props.item.name);
    const [days, setDays] = useState(props.item.frequency);
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

    function DayButton(props) {
        return(
            <TouchableOpacity style={days[props.index] ? styles.selected : {}}>
                <Button title={props.title} 
                        color = "#734d26"
                        onPress={() => {
                            let newDays = [...days]
                            newDays[props.index] = !days[props.index]
                            setDays(newDays)
                        }}
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
                        props.handleHabitCompletion(props.item.key, props.item.streak-1, false)
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
                <Header containerStyle={{backgroundColor:'#ffff', paddingTop:0, marginTop:0}}
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
                    <View>
                        <Text style={{fontSize:20, textAlign:"center", paddingTop:10, paddingBottom:10}}>Repeat (Day of Week)</Text>
                        <View style={{flexDirection:"row", justifyContent:"center"}}>
                            <DayButton index={0} title={"Sun"}/>
                            <DayButton index={1} title={"Mon"}/>
                            <DayButton index={2} title={"Tue"}/>
                            <DayButton index={3} title={"Wed"}/>
                            <DayButton index={4} title={"Thu"}/>
                            <DayButton index={5} title={"Fri"}/>
                            <DayButton index={6} title={"Sat"}/>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => {
                                if (title == "") {alert('Missing Habit Title');}
                                else {props.editHabit(props.item.key.toString(),title,description, days);
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
    },
    selected: {
        backgroundColor:"#dfbf9f"
    }
  });