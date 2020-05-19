import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, button, Card, CardItem, Body, Left, Right, IconNB, Footer, CheckBox } from "native-base";
import { FontAwesome } from '@expo/vector-icons'

export default function AddButton(props) {
    return(
        <TouchableOpacity style={{ backgroundColor: '#33ff64', alignItems: 'center', justifyContent: 'center', padding: 20, borderRadius: 100 }}
            onPress={() =>
            props.showForm()
            }>
            <FontAwesome name="plus" size={20} />
        </TouchableOpacity>
    )
}