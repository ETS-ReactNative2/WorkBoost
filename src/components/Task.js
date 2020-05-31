import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import EditTaskForm from '../screens/EditTaskPage'
import EditButton from './buttons/EditButton'
import Modal from 'react-native-modal'

export default function Task(props) {
    const [editModalVisible, setEditModalVisible] = useState(false)

    showEditForm = () => setEditModalVisible(prev => !prev)

    return(
        <View>
            <Modal style={{margin:0, marginTop:60, backgroundColor:"#FFF"}}
                isVisible={editModalVisible}
                onSwipeComplete={() => showEditForm()}
                swipeDirection="down">
                <EditTaskForm item={props.item}
                            showEditForm={this.showEditForm}
                            remove={props.remove}
                            editTask={props.editTask}/>
            </Modal>
            <Card style={props.item.completed ? {opacity:0.5} : {}}
                key={props.item.key}>
                <CardItem header key={props.item.key + 100} style={{ height: 55, width: 419 }}>
                    <Body>
                        <Text style={{fontWeight:"bold", fontSize:20}}>{props.item.name}</Text>
                    </Body>
                    <Right style={{flex:0.2}}>
                        <CheckBox style = {{marginRight:11}}
                                onPress={() => {
                                    props.handleTaskCompletion(props.item.key)
                                }}
                                checked={props.item.completed} />
                    </Right>
                </CardItem>
                <CardItem key={props.item.key + 1000} style={{ height: 43, width: 419 }}>
                    <Body>
                        <Text>{props.item.description}</Text>
                    </Body>
                    <Right style={{flex:0.2}}>
                        <EditButton editTask={props.item.completed? ()=>{} : props.editTask}
                                    showEditForm={this.showEditForm}
                                    index={props.index}
                                    updateIndex={props.updateIndex}/>
                    </Right>
                </CardItem>
            </Card>
        </View>
    )
}