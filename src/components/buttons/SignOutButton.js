import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { handleSignOut } from '../../routes/navigationController';

export default function SignOutButton({navigation}) {
    return(
        <TouchableOpacity
                style={styles.signOutButton}
                onPress={() => handleSignOut(navigation)} 
                underlayColor='#fff'>
                <Text style={styles.buttonText}>SIGN OUT</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    signOutButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#996633',
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