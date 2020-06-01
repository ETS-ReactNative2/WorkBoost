import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import DeleteAccountButton from '../components/buttons/DeleteAccountButton';
import SignOutButton from '../components/buttons/SignOutButton';
import ToggleNotifications from '../components/buttons/ToggleNotifications';
import LoginPage from './LoginPage';


export default function SettingsPage({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Settings</Text>
            <ToggleNotifications/>
            <SignOutButton navigation={navigation}/>
            <DeleteAccountButton navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ebd9c6",
      flex: 1,
    },
    titleText: {
        fontSize: 30,
        textAlign: "center",
        marginBottom:20,
        marginTop:20
    }
  });