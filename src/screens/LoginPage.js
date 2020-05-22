import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, AsyncStorage } from 'react-native'
import auth, { firebase } from "@react-native-firebase/auth"
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class LoginPage extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => {
         if (error.code === 'auth/user-disabled')
           alert('This user has been disabled.');
         if (error.code === 'auth/user-not-found')
           alert('There does not seem to be a user corresponding to this email.');
         if (error.code === 'auth/wrong-password')
           alert('The password is invalid for the given email, or the account corresponding to the email does not have a password set.');
         if (error.code === 'auth/invalid-email')
           alert('That email address is invalid.');
         this.props.navigation.navigate('Log In')
        } )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    )
  }
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