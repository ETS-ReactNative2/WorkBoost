import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function AddButton(props) {
    return(
        <TouchableOpacity style={{ height:60, width: 60, borderColor:'black', alignItems: 'center', justifyContent: 'center', padding: 10 }}
            onPress={() =>
            props.showAddForm()
            }>
            <FontAwesome name="plus" color="#9f8574" size={35} />
        </TouchableOpacity>
    )
}