// SignUp.js
import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import {handleSignUp, navLogin} from "../routes/navigationController"

export default function SignupPage(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 20}}>Register a new account!</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <TouchableOpacity 
          style = {styles.button}
          activeOpacity = { .5 }
          onPress={() => {handleSignUp(email, password, props.navigation)}}>
          <Text style = {styles.text}>
              Sign Up
          </Text>
        </TouchableOpacity>
      <Button
        color = "#4d2600"
        title="Already have an account? Login"
        onPress={() => {
          setPassword("")
          setEmail("")
          navLogin(props.navigation)}}
      />
    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2e6d9'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  text: {
    color:'#fff',
    fontSize:17,
    textAlign:'center',
  },
  button: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:10,
    marginRight:10,
    width:200,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#9f8574',
    backgroundColor: '#b7a295'
  }
})