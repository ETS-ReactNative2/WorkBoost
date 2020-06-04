import React, { Component, useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Keyboard, TouchableOpacity, StyleSheet, Text, Button, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default function AddHabitPage(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [days, setDays] = useState([false,false,false,false,false,false,false])

    function closeModal() {
        //setDays([false,false,false,false,false,false,false])
        props.showAddForm()
    }

    function BackButton() {
        return(
            <TouchableOpacity onPress={() => closeModal()}>
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
                        onPress={() => {
                            let newDays = [...days]
                            newDays[props.index] = !days[props.index]
                            setDays(newDays)
                        }}
                />
            </TouchableOpacity>   
        )
    }

    return(
        <View style={styles.container}>
            <View>
                <Header containerStyle={{backgroundColor:'#ffff', paddingTop:0, marginTop:0}}
                        leftComponent={<BackButton />}
                        centerComponent={{text: 'Add Habit', style: {fontSize:35}}}
                />
            </View>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Habit Title"
                        onBlur={Keyboard.dismiss}
                        value={title}
                        maxLength={25}
                        onChangeText={title => setTitle(title)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Habit Description (Optional)"
                        onBlur={Keyboard.dismiss}
                        value={description}
                        maxLength={45}
                        onChangeText={description => setDescription(description)}
                    />
                    <View>
                        <Text style={{fontSize:20, textAlign:"center"}}>Repeat (Day of Week)</Text>
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
                                else {props.addHabit(title,description, days);
                                props.showAddForm()
                                }
                            }}
                        >
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
      backgroundColor:"#ffff",
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
    },
    selected: {
        backgroundColor:"#808080"
    }
  });