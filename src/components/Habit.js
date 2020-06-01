import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import EditButton from '../components/buttons/EditButton'
import Modal from 'react-native-modal'
import CompHabitForm from '../screens/CompleteHabitPage'
import EditHabitForm from '../screens/EditHabitPage'


export default function Habit(props) {
    const [compModalVisible, setCompModalVisible] = useState(false)
    const [editModalVisible, setEditModalVisible] = useState(false)

    showEditForm = () => setEditModalVisible(prev => !prev);
    showCompForm = () => setCompModalVisible(prev => !prev);

    return(
        <View>

            <Modal style={{margin:0, marginTop:60, backgroundColor:"#FFF"}}
                   isVisible={editModalVisible}
                   onSwipeComplete={() => showEditForm()}
                   swipeDirection="down">
                <EditHabitForm item={props.item}
                               showEditForm={this.showEditForm}
                               remove={props.remove}
                               editHabit={props.editHabit}
                               handleHabitCompletion={props.handleHabitCompletion}/>
            </Modal>


            <Modal style={{margin:0, marginTop:60, backgroundColor:"#FFF"}}
                   isVisible={compModalVisible}
                   onSwipeComplete={() => showCompForm()}
                   swipeDirection="down">
                <CompHabitForm showCompForm={this.showCompForm}
                               name={props.item.name}
                               streak={props.item.streak}
                               closeForm={this.showCompForm}
                               id={props.item.key}
                               handleHabitCompletion={props.handleHabitCompletion}
                              />
            </Modal>
            <TouchableOpacity onPress={props.item.completed? ()=>{} : this.showCompForm}>
            <Card style={props.item.completed ? styles.fadedCard : styles.card}
                    key={props.item.key}>
                <CardItem header key={props.item.key + 100} style={{ height: 60, width: 410}}>
                    <Body>
                        <Text style={{fontWeight:"bold", fontSize:20}}>{props.item.name}</Text>
                        <View style = {{flexDirection: 'row'}}>
                            <Text style={{fontSize:13, paddingTop: 5}}>Streak: {props.item.streak}</Text>
                            <Image style = {{ width: 15, height: 15, marginTop: 3 }} source = {require('../pictures/fire.png')}/>
                            <Text style={{fontSize:13, paddingTop: 5}}> Frequency: {props.item.frequency}</Text>
                        </View>
                    </Body>
                    <Right style={{flex: 0.2}}>
                        <EditButton editHabit={props.editHabit}
                                showEditForm={this.showEditForm}/>
                    </Right>
                </CardItem>
                <CardItem key={props.item.key + 1000} style={{ height: 43 }}>
                    <Body>
                        <Text>{props.item.description}</Text>
                    </Body>
                </CardItem>
            </Card>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor:"brown",
    },
    fadedCard: {
        borderColor:"brown",
        opacity: 0.5
    }
})