import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimerPage from './src/screens/TimerPage';
import HabitPage from './src/screens/HabitPage';
import TaskPage  from './src/screens/TaskPage';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Habits" component={HabitPage} />  
            <Tab.Screen name="Timer"  component={TimerPage} />
            <Tab.Screen name="Tasks"  component={TaskPage}  />
        </Tab.Navigator>
    );
}

function FriendsButton(){
    return (
        <Image
            style = {{ width: 50, height: 50 }}
            source = 
        />
    )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
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
