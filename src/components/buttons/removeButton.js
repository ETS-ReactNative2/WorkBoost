import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import { FontAwesome } from '@expo/vector-icons'

export default function removeButton(props) {
    return(
        <TouchableOpacity
            style={{ alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
            borderRadius: 5,
            borderColor: '#32CD32' }}
            onPress={() => props.remove(index)}>
            <FontAwesome name="minus" size={10} color='#32CD32' />
        </TouchableOpacity >
    )
}