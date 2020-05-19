import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import moment from 'moment';
import Habit from '../components/Habit'
import AddButton from '../components/AddButton'
import habitData from '../sample_habit_data.json'

export default function TaskPage() {
    //Our State : Array of Habits
    const [habits, setHabits] = useState(habitData)

    add = (text) => {
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

    showForm = () => {
        Alert.prompt(  
            'Enter  Text',     
             null,    
             text => this.add(text)); 
    }

    handleEdit = () => {
        //TODO Jason
        alert("Jason")
    }

    return(
        <View> 
            {
            <FlatList
                data = {habits}
                renderItem = {({ item, index }) => <Habit item={item}
                                                          handleEdit={this.handleEdit} />}   
                //to be used when firebase data comes in
                //keyExtractor={item => item.toString()}
            />
            }
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AddButton showForm={this.showForm}/>
            </View >
        </View>
    )
}