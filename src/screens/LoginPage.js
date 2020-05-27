import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, AsyncStorage, Image} from 'react-native'
import {handleLogin, navSignUp} from "../routes/navigationController"

export default function LoginPage(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Image style = {{ width: 200, height: 200, marginBottom:10 }}
                source = {require('../pictures/logo.png')}/>
      <Text>Welcome to WorkBoost!</Text>
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
      <Button title="Login" onPress={() => handleLogin(email, password, props.navigation)} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navSignUp(props.navigation)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})