import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import Modal from 'react-native-modal'
import Task from '../components/Task'
import AddButton from '../components/buttons/AddButton'
import taskData from '../sample_task_data.json'
import AddTaskForm from '../screens/AddTaskPage'
import EditTaskForm from '../screens/EditTaskPage'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


export default function TaskPage() {
    const [tasks, setTasks] = useState(taskData)
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    //logic for "component did mount" first time organizing of state based on completion
    useEffect(() => {
            let tmpTasks = tasks.slice()
            tmpTasks.sort((a,b) => {return a.completed - b.completed})
            setTasks(tmpTasks)
    }, [])

    addTask = (text) => {
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

    showAddForm = () => setAddModalVisible(prev => !prev);

    handleCheck = (index) => {
        let tmpTasks = tasks.slice() 
        tmpTasks[index] = {...tmpTasks[index], completed: !tmpTasks[index].completed}
        tmpTasks.sort((a,b) => {return a.completed - b.completed}) 
        setTasks(tmpTasks)
    }

    editTask =(text) => {
        //TODO
        alert("Todo")
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
                              editTask={this.editTask}/>
            </Modal>
            <View style={styles.addTaskRow}>
                <View style={styles.textStyle}>
                    <Text style={styles.fontStyle}>
                        Tasks
                    </Text>
                </View>
                <View style={styles.addButtonStyle}>
                    <AddButton style={styles.addButtonStyle} showAddForm={this.showAddForm}
                                addTask={this.addTask}/>
                </View>

            </View >
            <FlatList
                data = {tasks}
                renderItem = {({ item, index }) => <Task item={item} 
                                                         index={index}
                                                         showEditForm={this.showEditForm}
                                                         editTask={this.editTask}
                                                         handleCheck={this.handleCheck}
                                                         updateIndex={this.updateIndex}/>}   
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