import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import Task from '../components/Task'
import AddButton from '../components/AddButton'
import taskData from '../sample_task_data.json'


export default function TaskPage() {
    //Our State : Array of Tasks
    const [tasks, setTasks] = useState(taskData)
    add = (text) => {
        let notEmpty = text.trim().length > 0
        if (notEmpty) {
            setTasks(tasks => [...tasks, text])
        }
    }

    remove = (i) => {
        let tmpTasks = tasks.slice()
        tmpTasks.splice(i,1)
        setTasks(tmpTasks)
    }

    showForm = () => {
        Alert.prompt(  
            'Enter  Text',     
             null,    
             text => this.add(text)); 
    }

    handleCheck = (index) => {
        let tmpTasks = tasks.slice() 
        tmpTasks[index] = {...tmpTasks[index], completed: !tmpTasks[index].completed} 
        setTasks(tmpTasks)
    }

    handleEdit = () => {
        //TODO Jaon
        alert("Jason")
    }

    return(
        <View> 
            <FlatList
                data = {tasks}
                renderItem = {({ item, index }) => <Task item={item} 
                                                         index={index}
                                                         handleEdit={this.handleEdit}
                                                         handleCheck={this.handleCheck}/>}   
                //to be used when firebase data comes in
                //keyExtractor={item => item.toString()}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AddButton showForm={this.showForm}/>
            </View >
        </View> 

    )
}