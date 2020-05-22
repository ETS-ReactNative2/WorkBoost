import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Body, Left, Right, CheckBox } from "native-base";
import Modal from 'react-native-modal'
import Habit from '../components/Habit'
import AddHabitButton from '../components/buttons/AddHabitButton'
import habitData from '../sample_habit_data.json'
import AddHabitForm from '../screens/AddHabitPage'

export default function HabitPage() {

    const [habits, setHabits] = useState(habitData)
    const [addModalVisible, setAddModalVisible] = useState(false)

    addHabit = (text) => {
        let notEmpty = text.trim().length > 0
        if (notEmpty) {
            setHabits(names => [...names, text])
        }
    }

    remove = (i) => {
        let tmpNames = names.slice()
        tmpNames.splice(i,1)
        setHabits(tmpNames)
    }

    showAddForm = () => setAddModalVisible(prev => !prev);

    handleEdit = () => {
        //TODO Jason
        alert("Jason")
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
            <FlatList
                data = {habits}
                renderItem = {({ item, index }) => <Habit item={item}
                                                          handleEdit={this.handleEdit} />}   
                //to be used when firebase data comes in
                //keyExtractor={item => item.toString()}
            />

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AddHabitButton showAddForm={this.showAddForm}
                                addHabit={this.addHabit}/>
            </View >
        </View>
    )
}