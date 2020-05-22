import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimerPage from '../screens/TimerPage';
import LoginPage from '../screens/LoginPage';
import SignupPage from '../screens/SignupPage';
import HabitPage from '../screens/HabitPage';
import TaskPage  from '../screens/TaskPage';
import FriendsPage from '../screens/FriendsPage';
import HelpPage from '../screens/HelpPage';
import AddTask from '../screens/AddTaskPage';
import SettingsPage from '../screens/SettingsPage';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerButton(props) {
  return(
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
      <Image
        style = {{ width: 30, height: 30, marginLeft:5 }}
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

export default function SideMenu() {
  return (
    <Drawer.Navigator>
        {/* <Drawer.Screen name="Log In" component={LoginPage} />
        <Drawer.Screen name="Sign Up" component={SignupPage} />   */}
        <Drawer.Screen name="Home" component={MyHome} />
        <Drawer.Screen name="Friends" component={Friends} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
  );
}