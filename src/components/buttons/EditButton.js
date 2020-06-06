import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import editIcon from '../../pictures/editIcon.png'

export default function EditButton(props) {
    return(
        <TouchableOpacity style={{ alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5}}
                        onPress={() => props.showEditForm()}>
            <Image style={{width:23,height:23, padding:0}} source={editIcon}/>
        </TouchableOpacity>
    )
}