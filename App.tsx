import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimerPage from './src/screens/TimerPage';
import HabitPage from './src/screens/HabitPage';
import TaskPage  from './src/screens/TaskPage';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Timer" component={TimerPage} />
            <Tab.Screen name="Habits" component={HabitPage} />
            <Tab.Screen name="Tasks" component={TaskPage} />
        </Tab.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
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
