import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, AsyncStorage, Image} from 'react-native'
import {handleLogin, navSignUp} from "../routes/navigationController"

export default function LoginPage(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Image style = {{ width: 200, height: 200, marginBottom:10 }}
                source = {require('../pictures/logo.png')}/>
      <Text style = {{fontSize: 20}}>Welcome to WorkBoost!</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <Button color = "#4d2600" title="Login" onPress={() => {
        //setPassword("")
        handleLogin(email, password, props.navigation)} 
        }/>
      <Button
        color = "#4d2600"
        title="Don't have an account? Sign Up"
        onPress={() => {
          setPassword("")
          setEmail("")
          navSignUp(props.navigation)}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})