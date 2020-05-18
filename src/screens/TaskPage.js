import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
//import { CheckBox } from 'react-native-elements'
import moment from 'moment';
import Task from '../components/Task'
import { FontAwesome } from '@expo/vector-icons'
import taskData from '../sample_task_data.json'
import editIcon from '../pictures/editIcon.png'


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

    return(
        <View>
            {
                <FlatList
                    data = {names}
                    renderItem = {({ item, index }) =>
                        <Card key={item.key.toString()}>
                            <CardItem header key={(item.key + 100).toString()} style={{ height: 55 }}>
                                <Body>
                                    <Text style={{fontWeight:"bold", fontSize:20}}>{item.name}</Text>
                                </Body>
                                <Right>
                                    <CheckBox 
                                    style = {{marginRight:11}}
                                    checked={item.completed} />
                                </Right>
                            </CardItem>
                            <CardItem key={(item.key + 1000).toString()} style={{ height: 43 }}>
                                <Body>
                                    <Text>{item.description}</Text>
                                </Body>
                                {/* <Right>
                                    <TouchableOpacity
                                        style={{ alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 5,
                                        borderRadius: 5,
                                        borderColor: '#32CD32' }}
                                        onPress={() => this.remove(index)}>
                                        <FontAwesome name="minus" size={10} color='#32CD32' />
                                    </TouchableOpacity >
                                </Right> */}
                                <Right>
                                    <TouchableOpacity
                                    style={{ alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5}}
                                    onPress={this.handleClick}>
                                        <Image style={{width:30,height:30}} source={editIcon}/>
                                    </TouchableOpacity>
                                </Right>
                            </CardItem>
                        </Card>
                    }   
                    //to be used when firebase data comes in
                    //keyExtractor={item => item.toString()}
                />
            }
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#33ff64', alignItems: 'center', justifyContent: 'center', padding: 20, borderRadius: 100 }}
                onPress={() =>
                this.showForm()
                }>
                <FontAwesome name="plus" size={20} />
            </TouchableOpacity>
            </View >
        </View>
    )
}