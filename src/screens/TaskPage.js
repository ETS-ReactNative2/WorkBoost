import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, } from "native-base";
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons'


export default function TaskPage() {
    //Our State : Array of Tasks
    const [names, setNames] = useState(["Laurent", "Christina", "Jason", "Amy"])

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
            <FlatList
                data={names}
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