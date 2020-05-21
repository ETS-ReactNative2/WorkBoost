import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import DeleteAccountButton from '../components/DeleteAccountButton';
import SignOutButton from '../components/SignOutButton';
import ToggleNotifications from '../components/ToggleNotifications';

export default function SettingsPage() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Settings</Text>
            <ToggleNotifications/>
            <SignOutButton/>
            <DeleteAccountButton/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:20,
        marginTop:20
    }
  });