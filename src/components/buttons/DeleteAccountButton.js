import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function DeleteAccountButton(props) {
    return(
        <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => props.toggleDeleteModal()}
                underlayColor='#cfc0b7'>
                <Text style={styles.buttonText}>DELETE ACCOUNT</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deleteButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#9f8574',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#9f8574'
      },
      buttonText:{
        fontSize:19,
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
      }
  });