import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, Modal, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Body, Left, Right, CheckBox } from "native-base";
import moment from 'moment';
import Habit from '../components/Habit'
import AddButton from '../components/AddButton'
import habitData from '../sample_habit_data.json'

export default function TaskPage() {
    //Our State : Array of Habits
    const [habits, setHabits] = useState(habitData)
    const [modalVisible, setModalVisible] = useState(false);

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
            <FlatList
                data = {habits}
                renderItem = {({ item, index }) => <Habit item={item}
                                                          handleEdit={this.handleEdit} />}   
                //to be used when firebase data comes in
                //keyExtractor={item => item.toString()}
            />

    {/* <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View> */}



            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AddButton showForm={this.showForm}/>
            </View >
        </View>
    )
}