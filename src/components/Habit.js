import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import EditButton from '../components/buttons/EditButton'

export default function Habit(props) {
    return(
        <Card key={props.item.key.toString()}>
            <CardItem header key={(props.item.key + 100).toString()} style={{ height: 55 }}>
                <Body>
                    <Text style={{fontWeight:"bold", fontSize:20}}>{props.item.name}</Text>
                </Body>
                <Right>
                    <EditButton handleEdit={props.handleEdit}/>
                </Right>
            </CardItem>
            <CardItem key={(props.item.key + 1000).toString()} style={{ height: 43 }}>
                <Body>
                    <Text>{props.item.description}</Text>
                </Body>
            </CardItem>
        </Card>
    )
}