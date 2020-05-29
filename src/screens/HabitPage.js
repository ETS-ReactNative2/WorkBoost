import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Body, Left, Right, CheckBox } from "native-base";
import Modal from 'react-native-modal'
import Habit from '../components/Habit'
import AddButton from '../components/buttons/AddButton'
import habitData from '../sample_habit_data.json'
import AddHabitForm from '../screens/AddHabitPage'
import EditHabitForm from '../screens/EditHabitPage'
import CompHabitForm from '../screens/CompleteHabitPage'
import { removesHabit } from '../../model/dbModel';
const {saveHabit, pullHabitData, editsHabit} = require('../../model/dbModel.js');

export default function HabitPage() {

    const [habits, setHabits] = useState([])
    const [addModalVisible, setAddModalVisible] = useState(false)

    addHabit = (title, description) => {   
        saveHabit(title, description)
        pullHabitData(setData) 
    }

    function setData(snapshot) {
        let arr = []
        snapshot.forEach(shot => {
            if(shot.key != "user") {
                obj = shot.val()
                obj.key = shot.key
                arr.push(obj)
            }
        })
        setHabits(arr)
    }
    
    //On app startup, pull the data from db and sort it based on completion
    useEffect(() => {
        pullHabitData(setData)
        let tmpHabits = habits.slice()
        tmpHabits.sort((a,b) => {return a.completed - b.completed})
        setHabits(tmpHabits)
    }, [])

    handleCheck = (index) => {
        let tmpHabits = habits.slice() 
        tmpHabits[index] = {...tmpHabits[index], completed: !tmpHabits[index].completed}
        tmpHabits.sort((a,b) => {return a.completed - b.completed}) 
        setHabits(tmpHabits)
    }

    remove = (key) => {
        //call to model
        removesHabit(key, setData)
    }

    showAddForm = () => setAddModalVisible(prev => !prev);

    editHabit = (key, title, description, frequency) => {
        editsHabit(key, title, description, frequency)
        pullHabitData(setData)
    }

    EmptyView = () => {
        return(
            <View>
                <Text>
                    There are no habits. Click the "plus" button to add a new habit!
                </Text>
            </View>
        )
    }
     

    return(
        <View> 
            <Modal style={{margin:0, marginTop:60, backgroundColor:"#FFF"}}
                   isVisible={addModalVisible}
                   onSwipeComplete={() => showAddForm()}
                   swipeDirection="down">
                <AddHabitForm showAddForm={this.showAddForm}
                              addHabit={this.addHabit}/>
            </Modal>

            <Modal style={{margin:0, marginTop:60, backgroundColor:"#FFF"}}
                   isVisible={editModalVisible}
                   onSwipeComplete={() => showEditForm()}
                   swipeDirection="down">
                <EditHabitForm item={habits[currentIndex]}
                              showEditForm={this.showEditForm}
                              editHabit={this.editHabit}/>
            </Modal>

            <View style={styles.addTaskRow}>
                <View style={styles.textStyle}>
                    <Text style={styles.fontStyle}>
                        Habits
                    </Text>
                </View>
                <View style={styles.addButtonStyle}>
                    <AddButton style={styles.addButtonStyle} showAddForm={showAddForm}
                                addTask={this.addTask}/>
                </View>

            </View >

            <FlatList
                data = {habits}
                ListEmptyComponent={this.EmptyView}
                renderItem = {({ item, index }) => <Habit item={item}
                                                          index={index}
                                                          editHabit={this.editHabit}
                                                          remove={this.remove}
                                                          handleCheck={this.handleCheck}/>}   
                //to be used when firebase data comes in
                //keyExtractor={item => item.toString()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    addTaskRow:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    addButtonStyle: {
        flex: .5,
        alignContent: "center",
        paddingRight: '2%'
    },
    textStyle:{
        flex:3,
        paddingLeft: '3%'
    },
    fontStyle:{
        fontWeight: 'bold',
        fontSize: 32
    }
});