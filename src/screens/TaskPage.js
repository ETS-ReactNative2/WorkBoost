import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import Modal from 'react-native-modal'
import Task from '../components/Task'
import AddButton from '../components/buttons/AddButton'
import AddTaskForm from '../screens/AddTaskPage'
const {saveTask, pullTaskData, removesTask, editsTask, updateComplete} = require('../../model/dbModel.js');

export default function TaskPage() {
    const [tasks, setTasks] = useState([])
    const [addModalVisible, setAddModalVisible] = useState(false)

    function setData(snapshot) {
        let arr = []
        snapshot.forEach(shot => {
            if(shot.key != "user") {
                obj = shot.val()
                obj.key = shot.key
                arr.push(obj)
            }
        })
        setTasks(arr)
    }

    //logic for "component did mount" first time organizing of state based on completion
    useEffect(() => {
            pullTaskData(setData)
            let tmpTasks = tasks.slice()
            tmpTasks.sort((a,b) => {return a.completed - b.completed})
            setTasks(tmpTasks)
    }, [])

    addTask = (title, description) => {
        saveTask(title, description)
        pullTaskData(setData)
    }

    remove = (key) => {
        removesTask(key, setData)
    }

    showAddForm = () => setAddModalVisible(prev => !prev);

    completedDb = (key) => {
        updateComplete(key)
        let tmpTasks = tasks.slice()
        tmpTasks.sort((a,b) => {return a.completed - b.completed})
        setTasks(tmpTasks)
    }

    handleCheck = (index) => {
        let tmpTasks = tasks.slice() 
        tmpTasks[index] = {...tmpTasks[index], completed: !tmpTasks[index].completed}
        tmpTasks.sort((a,b) => {return a.completed - b.completed}) 
        setTasks(tmpTasks)
    }

    editTask =(key, title, description) => {
        editsTask(key, title, description)
        pullTaskData(setData)
    }
    
    EmptyView = () => {
        return(
            <View>
                <Text>
                    There are no Tasks. Click the "plus" button to add a new task!
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
                <AddTaskForm showAddForm={this.showAddForm}
                             addTask={this.addTask}/>
            </Modal>
            <FlatList
                data = {tasks}
                ListEmptyComponent={this.EmptyView}
                renderItem = {({ item, index }) => <Task item={item} 
                                                         index={index}
                                                         editTask={this.editTask}
                                                         remove={this.remove}
                                                         completedDb={this.completedDb}
                                                         handleCheck={this.handleCheck}/>}   
                //to be used when firebase data comes in
                //keyExtractor={item => item.toString()}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AddButton showAddForm={this.showAddForm}
                               addTask={this.addTask}/>
            </View >
        </View> 

    )
}