import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import moment from 'moment';
import Task from '../components/Task'
import AddButton from '../components/AddButton'
import taskData from '../sample_task_data.json'


export default function TaskPage() {
    //Our State : Array of Tasks
    const [names, setNames] = useState(taskData)

    add = (text) => {
        let notEmpty = text.trim().length > 0
        if (notEmpty) {
            setNames(names => [...names, text])
        }
    }

    remove = (i) => {
        let tmpNames = names.slice()
        tmpNames.splice(i,1)
        setNames(tmpNames)
    }

    showForm = () => {
        Alert.prompt(  
            'Enter  Text',     
             null,    
             text => this.add(text)); 
    }

    handleCheck = () => {
        //TODO Laurent
        alert("Laurent")
    }

    handleEdit = () => {
        //TODO Jaon
        alert("Jason")
    }

    return(
        <View> 
            {
            <FlatList
                data = {names}
                renderItem = {({ item, index }) => <Task item={item} 
                                                         handleEdit={this.handleEdit}
                                                         handleCheck={this.handleCheck}/>}   
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