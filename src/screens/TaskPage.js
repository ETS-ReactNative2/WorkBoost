import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import Modal from 'react-native-modal'
import Task from '../components/Task'
import AddButton from '../components/buttons/AddButton'
import taskData from '../sample_task_data.json'
import AddTaskForm from '../screens/AddTaskPage'
import EditTaskForm from '../screens/EditTaskPage'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
const {saveTask, pullTaskData, removesTask, editsTask} = require('../../model/dbModel.js');

export default function TaskPage() {
    const [tasks, setTasks] = useState([])
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

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
            setTasks(arr)
        }
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
        removesTask(key)
    }

    showAddForm = () => setAddModalVisible(prev => !prev);

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

    showEditForm = (index) => {
        setEditModalVisible(prev => !prev)
    }

    updateIndex = (index) => setCurrentIndex(index);
     

    return(
        <View> 
            <Modal style={{margin:0, marginTop:60, backgroundColor:"#FFF"}}
                   isVisible={addModalVisible}
                   onSwipeComplete={() => showAddForm()}
                   swipeDirection="down">
                <AddTaskForm showAddForm={this.showAddForm}
                             addTask={this.addTask}/>
            </Modal>

            <Modal style={{margin:0, marginTop:60, backgroundColor:"#FFF"}}
                   isVisible={editModalVisible}
                   onSwipeComplete={() => showEditForm()}
                   swipeDirection="down">
                <EditTaskForm item={tasks[currentIndex]}
                              showEditForm={this.showEditForm}
                              remove={this.remove}
                              editTask={this.editTask}/>
            </Modal>

            <FlatList
                data = {tasks}
                renderItem = {({ item, index }) => <Task item={item} 
                                                         index={index}
                                                         showEditForm={this.showEditForm}
                                                         editTask={this.editTask}
                                                         remove={this.remove}
                                                         handleCheck={this.handleCheck}
                                                         updateIndex={this.updateIndex}/>}   
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