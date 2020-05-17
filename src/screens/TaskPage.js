import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, } from "native-base";
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons'


export default function TaskPage() {
    this.state = {
        text: '',
        data: [
        'Laurent', 'Christina', 'Jason', 'Amy'
        ]}
    add = (text) => {
        let notEmpty = text.trim().length > 0;
        if (notEmpty) {
        this.setState(
            prevState => {
            let { data } = prevState;
            return {
                data: data.concat(text),
                text: ""
            };
        });
        }
    }
    remove = (i) => {
        this.setState(
          prevState => {
             let data = prevState.data.slice();
             data.splice(i, 1);
             return { data };
         });
    }
    showForm = () => {
        AlertIOS.prompt(  
            'Enter  Text',     
             null,    
             text =>  this.add(text)    ); 
    }
    return(
        <View>
            <FlatList
                data={this.state.data}
                renderItem={({ item, index }) =>
                <Card key={index}>
                <CardItem key={index} style={{ height: 50 }}>
                    <Body>
                        <Text >
                        {item}
                        </Text>
                    </Body>
                    <Right>
                    <TouchableOpacity
                        style={{ alignItems: 'center',
                        justifyContent: 'center',
                        padding: 5,
                        borderRadius: 5,
                        borderColor: '#32CD32' }}
                        onPress={() => this.remove(index)}>
                        <FontAwesome name="minus" size={10} color='#32CD32' />
                    </TouchableOpacity >
                    </Right>
                </CardItem>
                </Card>
        }
        keyExtractor={item => item.toString()}
        />
                </View>
            )
}