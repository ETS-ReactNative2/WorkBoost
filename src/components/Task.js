import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import EditButton from '../components/EditButton'

export default function Task(props) {
    return(
        <Card key={props.item.key.toString()}>
            <CardItem header key={(props.item.key + 100).toString()} style={{ height: 55 }}>
                <Body>
                    <Text style={{fontWeight:"bold", fontSize:20}}>{props.item.name}</Text>
                </Body>
                <Right>
                    <CheckBox style = {{marginRight:11}}
                              onPress={props.handleCheck}
                              checked={props.item.completed} />
                </Right>
            </CardItem>
            <CardItem key={(props.item.key + 1000).toString()} style={{ height: 43 }}>
                <Body>
                    <Text>{props.item.description}</Text>
                </Body>
                <Right>
                    <EditButton handleEdit={props.handleEdit}/>
                </Right>
            </CardItem>
        </Card>
    )
}