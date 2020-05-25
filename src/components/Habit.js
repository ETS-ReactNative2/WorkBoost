import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import EditButton from '../components/buttons/EditButton'
import Modal from 'react-native-modal'
import CompHabitForm from '../screens/CompleteHabitPage'


export default function Habit(props) {
    const [compModalVisible, setCompModalVisible] = useState(false)
    showCompForm = () => setCompModalVisible(prev => !prev);
    completeHabit = () => {
        props.handleCheck(props.index)
    }


    return(
        <View>
            <Modal style={{margin:0, marginTop:60, backgroundColor:"#FFF"}}
                   isVisible={compModalVisible}
                   onSwipeComplete={() => showCompForm()}
                   swipeDirection="down">
                <CompHabitForm showCompForm={this.showCompForm}
                              //index ={}
                              name={props.item.name}
                              streak={props.item.completion_streak + 1}
                              closeForm={this.showCompForm}
                              completeHabit={this.completeHabit}
                              />
            </Modal>
            <TouchableOpacity onPress={props.item.completed? ()=>{} : this.showCompForm}>
            <Card style={props.item.completed ? {opacity:0.5} : {}}
                    key={props.item.key.toString()}>
                <CardItem header key={(props.item.key + 100).toString()} style={{ height: 55 }}>
                    <Body>
                        <Text style={{fontWeight:"bold", fontSize:20}}>{props.item.name}</Text>
                    </Body>
                    <Right>
                        <EditButton handleEdit={props.item.completed? ()=>{} : props.handleEdit}/>
                    </Right>
                </CardItem>
                <CardItem key={(props.item.key + 1000).toString()} style={{ height: 43 }}>
                    <Body>
                        <Text>{props.item.description}</Text>
                    </Body>
                </CardItem>
            </Card>
            </TouchableOpacity>
        </View>
    )
}