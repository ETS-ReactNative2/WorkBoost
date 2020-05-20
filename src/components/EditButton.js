import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import editIcon from '../pictures/editIcon.png'

export default function EditButton(props) {
    return(
        <TouchableOpacity style={{ alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5}}
                        onPress={() => props.handleEdit()}>
            <Image style={{width:30,height:30}} source={editIcon}/>
        </TouchableOpacity>
    )
}