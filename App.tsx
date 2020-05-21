import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimerPage from './src/screens/TimerPage';
import LoginPage from './src/screens/TimerPage';
import SignupPage from './src/screens/SignupPage';
import HabitPage from './src/screens/HabitPage';
import TaskPage  from './src/screens/TaskPage';
import FriendsPage from './src/screens/FriendsPage';
import HelpPage from './src/screens/HelpPage';
import AddTask from './src/screens/AddTaskPage';
import SettingsPage from './src/screens/SettingsPage';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Habits" component={HabitPage} />  
            <Tab.Screen name="Timer"  component={TimerPage} />
            <Tab.Screen name="Tasks"  component={TaskPage}  />
        </Tab.Navigator>
    );
  }

  function MyHome({navigation}) {
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
         options={{
           headerTitle: () => <LogoIcon />,
           headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image
                                    style = {{ width: 30, height: 30, marginLeft:5 }}
                                    source = {require('./src/pictures/menu.png')}
                                />
       </TouchableOpacity>
         }}
      />
    </Stack.Navigator>
    );
  }

  function Friends({navigation}) {
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="Friends"
        component={FriendsPage}
         options={{
           headerTitle: () => <LogoIcon />,
           headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image
                                    style = {{ width: 30, height: 30, marginLeft:5 }}
                                    source = {require('./src/pictures/menu.png')}
                                />
       </TouchableOpacity>
         }}
      />
    </Stack.Navigator>
    );
  }

  function Settings({navigation}) {
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsPage}
         options={{
           headerTitle: () => <LogoIcon />,
           headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image
                                    style = {{ width: 30, height: 30, marginLeft:5 }}
                                    source = {require('./src/pictures/menu.png')}
                                />
                              </TouchableOpacity>
         }}
      />
    </Stack.Navigator>
    );
  }

  function Help({navigation}) {
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="Help"
        component={HelpPage}
         options={{
           headerTitle: () => <LogoIcon />,
           headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image
                                    style = {{ width: 30, height: 30, marginLeft:5 }}
                                    source = {require('./src/pictures/menu.png')}
                                />
                              </TouchableOpacity>
         }}
      />
    </Stack.Navigator>
    );
  }

function LogoIcon(){
    return (
        <Image
            style = {{ width: 44, height: 44, marginBottom:10 }}
            source = {require('./src/pictures/logo.png')}
        />
    );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
        {/* <Drawer.Screen name="Log In" component={LoginPage} />
        <Drawer.Screen name="Sign Up" component={SignupPage} />   */}
        <Drawer.Screen name="Home" component={MyHome} />
        <Drawer.Screen name="Friends" component={Friends} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Add Task" component={AddTask} />
      </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>  
  );
}

