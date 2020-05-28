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
                    key={props.item.key}>
                <CardItem header key={props.item.key} style={{ height: 60, width: 419}}>
                    <Body>
                        <Text style={{fontWeight:"bold", fontSize:20}}>{props.item.name}</Text>
                        <View style = {{flexDirection: 'row'}}>
                            <Text style={{fontSize:13, paddingTop: 5}}>Streak: {props.item.streak}</Text>
                            <Image style = {{ width: 15, height: 15, marginTop: 3 }} source = {require('../pictures/fire.png')}/>
                            <Text style={{fontSize:13, paddingTop: 5}}> Frequency: {props.item.frequency}</Text>
                        </View>
                        {/*<Text style={{fontSize:13, paddingTop: 5}}>Streak: {props.item.completion_streak} days,
                                                                    Frequency: {props.item.freq} </Text>*/}
                    </Body>
                    <Right>
                        <EditButton editHabit={props.item.completed? ()=>{} : props.editHabit}
                                showEditForm={props.item.completed? ()=>{}: props.showEditForm}
                                index={props.index}
                                updateIndex={props.updateIndex}/>
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