import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ToggleNotifications() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={{flexDirection:'row'}}>
        <Text style={styles.normalText}>Notifications</Text> 
        <Switch
            trackColor={{ false: "#767577", true: "#006600" }} 
            thumbColor={isEnabled ? "#99ff99" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            buttonContent={isEnabled? "ON" : "OFF"} 
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    normalText: {
        fontSize: 21,
        textAlign: "left",
        marginLeft: 75,
        marginRight: 90,
        marginTop:0
    }
  });