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
const {saveHabit, pullData, editsHabit} = require('../../model/dbModel.js');

export default function HabitPage() {

    const [habits, setHabits] = useState([])
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    addHabit = (title, description) => {   
        saveHabit(title, description)
        pullData(setData) 
    }

    function setData(snapshot) {
        if(snapshot.numChildren() > 1) {
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
    }

    useEffect(() => {
        pullData(setData)
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
        removesHabit(key)
    }

    showAddForm = () => setAddModalVisible(prev => !prev);

    editHabit = (key, title, description, frequency) => {
        editsHabit(key, title, description, frequency)
        pullData(setData)
    }

    showEditForm = (index) => {
        setEditModalVisible(prev => !prev)
    }

    updateIndex = (index) => setCurrentIndex(index);

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
                              remove={this.remove}
                              editHabit={this.editHabit}/>
            </Modal>

            <FlatList
                data = {habits}
                ListEmptyComponent={this.EmptyView}
                renderItem = {({ item, index }) => <Habit item={item}
                                                          index={index}
                                                          showEditForm={this.showEditForm}
                                                          editHabit={this.editHabit}
                                                          remove={this.remove}
                                                          handleCheck={this.handleCheck}
                                                          updateIndex={this.updateIndex} />}   
                //to be used when firebase data comes in
                //keyExtractor={item => item.toString()}
            />

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AddButton showAddForm={this.showAddForm}
                                addHabit={this.addHabit}/>
            </View >
        </View>
    )
}