import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal'
import Habit from '../components/Habit'
import AddButton from '../components/buttons/AddButton'
import AddHabitForm from '../screens/AddHabitPage'
const {removesHabitModel, saveHabitModel, pullHabitDataModel, editsHabitModel, completeHabitModel, refreshHabitModel} = require('../../model/dbModel.js');

export default function HabitPage() {

    const [habits, setHabits] = useState([])
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [fetching, setFetching] = useState(false)

    function refreshData(snapshot) {
        setFetching(true)
        let today = new Date()
        let curMonth = today.getMonth()+1
        let curDay = today.getDate()
        snapshot.forEach(shot => {
            if(shot.key != "user") {
                let prevDate = shot.val().lastCompleted.split("-")
                let prevMonth = prevDate[0]
                let prevDay = prevDate[1]
                //if next day
                if(curDay > prevDay || curMonth != prevMonth) {
                    //if not completed in prev day
                    if(!shot.val().completed) {
                        refreshHabitModel(shot.key, 0, false)
                    }
                    //if was completed in prev day
                    else {
                        refreshHabitModel(shot.key, shot.val().streak, false)
                    }
                }
            }
        })
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
        arr.sort((a,b) => {return a.completed - b.completed})
        setHabits(arr)
    }

    //On app startup, pull the data from db and sort it based on completion
    useEffect(() => {
        pullHabitDataModel(refreshData)
        .then(() => pullHabitDataModel(setData))
        .then(() => setFetching(false))
    }, [])

    //add habits
    addHabit = (title, description) => {   
        saveHabitModel(title, description)
        pullHabitDataModel(setData)
    }

    //update completion and streaks
    handleHabitCompletion = (key, streak, complete, date) => {
        completeHabitModel(key, streak, complete, date, setData)
    }

    //remove habit
    remove = (key) => {
        //call to model
        removesHabitModel(key, setData)
    }

    showAddForm = () => setAddModalVisible(prev => !prev);

    //edit habit
    editHabit = (key, title, description, frequency) => {
        editsHabitModel(key, title, description, frequency)
        pullHabitDataModel(setData)
    }

    EmptyView = () => {
        return(
            <View>
                <Text style={{textAlign: "center", fontSize: 20, padding:10}}>
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

            <FlatList
                data = {habits}
                ListEmptyComponent={this.EmptyView}
                onRefresh={() => {
                    pullHabitDataModel(refreshData)
                    .then(() => pullHabitDataModel(setData))
                    .then(() => setFetching(false))
                }}
                refreshing={fetching}
                renderItem = {({ item, index }) => <Habit item={item}
                                                          index={index}
                                                          editHabit={this.editHabit}
                                                          remove={this.remove}
                                                          handleHabitCompletion={this.handleHabitCompletion}/>}   
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