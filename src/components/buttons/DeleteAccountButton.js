import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function DeleteAccountButton() {
    return(
        <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => Alert.alert('Deleting account')}
                underlayColor='#fff'>
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
        backgroundColor:'#cc3300',
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