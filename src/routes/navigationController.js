import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimerPage from '../screens/TimerPage';
import LoginPage from '../screens/LoginPage';
import SignupPage from '../screens/SignupPage';
import HabitPage from '../screens/HabitPage';
import TaskPage  from '../screens/TaskPage';
import FriendsPage from '../screens/FriendsPage';
import HelpPage from '../screens/HelpPage';
import SettingsPage from '../screens/SettingsPage';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import firebase from 'firebase'
// model calls
import {addNewUser, deleteUser} from "../../model/dbModel"
//import {Restart} from 'fiction-expo-restart';

const firebaseConfig = {
  apiKey: "AIzaSyC-9RLuVtRr2exJDAHjLqB4NoWg0P451XE",
  authDomain: "workboost-1b29a.firebaseapp.com",
  databaseURL: "https://workboost-1b29a.firebaseio.com",
  storageBucket: "workboost-1b29a.appspot.com"
}
firebase.initializeApp(firebaseConfig)

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Big = createStackNavigator();
const Drawer = createDrawerNavigator();

export function handleLogin(email, password, navigation) {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      //navigation.navigate('App')
      navigation.reset({
        index: 0,
        routes: [{ name: 'App' }],
      });
    })
    .catch(error => {
      if (error.code === 'auth/user-disabled')
        alert('This user has been disabled.');
      if (error.code === 'auth/user-not-found')
        alert('There does not seem to be a user corresponding to this email.');
      if (error.code === 'auth/wrong-password')
        alert('The password is invalid for the given email, or the account corresponding to the email does not have a password set.');
      if (error.code === 'auth/invalid-email')
        alert('That email address is invalid.');
      navigation.navigate('Login')
    })
}

export function handleSignUp(email, password, navigation) {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      addNewUser(user)
      navigation.navigate('Login')
      console.log('User account has been created!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use')
        alert('That email address is already in use.');
      if (error.code === 'auth/weak-password')
        alert('Your password is too weak.');
      if (error.code === 'auth/invalid-email')
        alert('That email address is invalid.');
        navigation.navigate('Signup')
    });
}

export function handleSignOut(navigation){
    firebase.auth().signOut().then(() => {console.log('user signed out')});
    navigation.navigate('Login')
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
}

export function handleDeleteAccount(navigation){
    //call to model
    deleteUser()
    //navigate
    navigation.navigate('Login')
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
}

export function navSignUp(navigation) {navigation.navigate('Signup')}
export function navLogin(navigation) {navigation.navigate("Login")}

function DrawerButton(props) {
  return(
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
      <Image
        style = {{ width: 30, height: 30, marginLeft:5, color: "#9f8574"}}
        source = {require('../pictures/menu.png')}
      />
    </TouchableOpacity>
  )
}

function LogoIcon(){
  return (<Image style = {{ width: 44, height: 44, marginBottom:10 }}
                 source = {require('../pictures/logo.png')}/>);
}

function BottomTabs() {
    return (
        <Tab.Navigator initialRouteName="Timer"
        tabBarOptions= {{
          labelStyle: { 
            color: "#9f8574",
            fontSize: 17,
            margin: 0,
            padding: 0,
          },
        }}>
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
          component={BottomTabs}
          options={{ headerTitle: () => <LogoIcon />,
                     headerLeft:  () => <DrawerButton navigation={navigation} />}}
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
          options={{ headerTitle: () => <LogoIcon />,
                      headerLeft:  () => <DrawerButton navigation={navigation} />}}
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
          options={{ headerTitle: () => <LogoIcon />,
                     headerLeft:  () => <DrawerButton navigation={navigation} />}}
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
          options={{ headerTitle: () => <LogoIcon />,
                      headerLeft: () => <DrawerButton navigation={navigation} />}}
        />
      </Stack.Navigator>
    );
  }

 
function MainDrawer({navigation}) {
  return (
    <Drawer.Navigator drawerStyle={{backgroundColor: "#f2e6d9"}} drawerContentOptions={{activeBackgroundColor:"#f8f2ec", activeTintColor:"#bd8242"}}>
      <Drawer.Screen name="Home" component={MyHome} />
      <Drawer.Screen name="Settings" component={Settings} navigation = {navigation}/>
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}   
export default function MyStack() {
  return (
    <Big.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Big.Screen name="Login" component={LoginPage} />
      <Big.Screen name="Signup" component={SignupPage} />
      <Big.Screen name="App" component={MainDrawer} />
    </Big.Navigator>
  );
}