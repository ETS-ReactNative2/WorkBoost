import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { handleDeleteAccount } from '../../routes/navigationController';

export default function DeleteAccountButton({navigation}) {
    return(
        <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteAccount(navigation)}
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
        borderColor: '#fff'
      },
      buttonText:{
        fontSize:19,
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
      }
  });