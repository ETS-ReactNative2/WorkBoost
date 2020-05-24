import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function AddHabitButton(props) {
    return(
        <TouchableOpacity style={{ backgroundColor: '#33ff64', alignItems: 'center', justifyContent: 'center', padding: 20, borderRadius: 100 }}
            onPress={() =>
            props.showAddForm()
            }>
            <FontAwesome name="plus" size={20} />
        </TouchableOpacity>
    )
}