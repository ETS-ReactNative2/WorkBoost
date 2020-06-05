import React, {Component, useState, useEffect} from 'react';
import { Text, StyleSheet, SafeAreaView, Modal  } from 'react-native';
import DeleteAccountButton from '../components/buttons/DeleteAccountButton';
import SignOutButton from '../components/buttons/SignOutButton';
import ToggleNotifications from '../components/buttons/ToggleNotifications';
import LoginPage from './LoginPage';
import DeleteAccountPopup from './DeleteAccountPage';



export default function SettingsPage({navigation}) {

    const [deleteModalActive, setDeleteModalActive] = useState(false);

    toggleDeleteModal = () => {
        setDeleteModalActive(!deleteModalActive);
    }

    return(

        <SafeAreaView style={styles.container}>
            <Modal animationType="slide" transparent={true} visible={deleteModalActive}>
                <DeleteAccountPopup 
                               toggleDeleteModal={this.toggleDeleteModal}
                               navigation={navigation}/>
            </Modal>

            <Text style={styles.titleText}>Settings</Text>
            <SignOutButton navigation={navigation}/>
            <DeleteAccountButton 
                        toggleDeleteModal={this.toggleDeleteModal}/>
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