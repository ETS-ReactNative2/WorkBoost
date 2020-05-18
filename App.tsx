import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimerPage from './src/screens/TimerPage';
import HabitPage from './src/screens/HabitPage';
import TaskPage  from './src/screens/TaskPage';
import FriendsPage from './src/screens/FriendsPage';
import SettingsPage from './src/screens/SettingsPage';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();



function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Habits" component={HabitPage} />  
            <Tab.Screen name="Timer" component={TimerPage} />
            <Tab.Screen name="Tasks" component={TaskPage} />
        </Tab.Navigator>
    );
}

function FriendsButton(){
    return (
        <TouchableOpacity onPress={() => alert("this is a button!")}>
            <Image
                style = {{ width: 50, height: 50 }}
                source = {require('./src/pictures/friends_icon.png')}
            />
        </TouchableOpacity>
        
    );
}

function LogoIcon(){
    return (
        <Image
            style = {{ width: 44, height: 44 }}
            source = {require('./src/pictures/logo.png')}
        />
    );
}

function SettingsButton(){
    return (
        <Image
            style = {{ width: 36, height: 36 }}
            source = {require('./src/pictures/settings_icon.png')}
        />
    );
}

function Test({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate(FriendsPage)}
        />
      </View>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
           options={{
             headerTitle: () => <LogoIcon />,
             headerLeft: () => <FriendsButton />,
             headerRight: () => <SettingsButton />,
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
