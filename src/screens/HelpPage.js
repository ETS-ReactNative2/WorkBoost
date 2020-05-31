import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Header} from 'react-native-elements';

export default function HelpPage() {
    return(
    <ScrollView>
    <Header
    backgroundColor= '#fff'
    centerComponent= {{ text: 'Help Page', style:{color:'black', fontSize:30} }}
   />

    <View style = {{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10}}>
        <Text  style={{fontWeight: 'bold', fontSize:20}}>Timer</Text>
    </View>
        <View style={{flex:1, justifyContent:'left', alignItems: 'left', padding: 20}}>
                <Text  style={{fontWeight: 'bold'}}>Navigating to the timer page </Text>
                <Text>Upon login, you will automatically be redirected to the Timer screen.
                If you have navigated to a different tab, to go back simply tap the Timer tab at the bottom of the screen
                </Text>

            <Text  style={{fontWeight: 'bold'}}>Start Timer</Text>
            <Text>First adjust the number of minutes you want to work for by sliding left or right on the scrollbar.
                Then tap on the blue start button to start the timer. 
            </Text>

             <Text  style={{fontWeight: 'bold'}}>Reset Timer</Text>
             <Text>To reset the timer to, tap the red reset button. A popup will appear asking to confirm that you want to quit the timer early.
                 Tap on "yes" to reset the timer and no to resume.
             </Text>
        </View>

    <View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
             <Text  style={{fontWeight: 'bold', fontSize:20}}>Habits</Text>
    </View>
    <View style={{flex:1, justifyContent:'left', alignItems: 'left', padding: 20}}>
                 <Text  style={{fontWeight: 'bold'}}>Navigating to the Habits page</Text>
                 <Text>Tap the Habits tab at the bottom left of the screen
                 </Text>

           <Text  style={{fontWeight: 'bold'}}>Create Habit</Text>
           <Text>Tap the plus sign in the top right corner and fill in each field for the habit, then click save. Tap the x in the top left corner to cancel creating a Habit.
           </Text>

        <Text  style={{fontWeight: 'bold'}}>Check off Habit</Text>
        <Text>Tap the habit and a completion popup will appear. Tap on done to return to the habit page. 
        </Text>

        <Text  style={{fontWeight: 'bold'}}>Revert Completion</Text>
        <Text>If you did not mean to mark a habit as completed, you can revert the completion by tapping on the pen icon
            and then tapping the revert habit button.
        </Text>

        <Text  style={{fontWeight: 'bold'}}>Streaks</Text>
        <Text>You can complete a habit once a day and it will refresh per frequency. Since the default frequency is daily, this means that
            the habit will refresh every day. Every consecutive day that you complete the habit, the streak will increase by one.
            If you skip a day, the streak will reset back to 0 and you will have to start over again.
        </Text>

         <Text  style={{fontWeight: 'bold'}}>Edit Habit</Text>
         <Text>Tap the pen icon on the Habit you wish to edit. Then change what is in each field. Once you have finished editing, tap save.
         </Text>

        <Text  style={{fontWeight: 'bold'}}>Delete Habit</Text>
        <Text>Tap the pen icon and click remove habit on the edit page. 
        </Text>
    </View>

    <View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
             <Text  style={{fontWeight: 'bold', fontSize:20}}>Tasks</Text>
    </View>
<View style={{flex:1, justifyContent:'left', alignItems: 'left', padding: 20}}>
        <Text  style={{fontWeight: 'bold'}}>Navigating to the Tasks page</Text>
                 <Text>Tap the Tasks tab at the bottom right of the screen
                 </Text>

        <Text  style={{fontWeight: 'bold'}}>Create Task</Text>
                 <Text>Tap the plus sign at the top of the page and fill each field for the Task, then click save. 
                     Tap the x in the top left to cancel creating the Task.
                 </Text>

        <Text  style={{fontWeight: 'bold'}}>Check off Task</Text>
                     <Text>Tap the empty circle next to the Task on the Task Page and a checkmark should appear.
                     </Text>
                    
        <Text  style={{fontWeight: 'bold'}}>Uncheck a Task</Text>
        <Text>Tap the checkmark next to the Task to mark it as not completed.
        </Text>

        <Text  style={{fontWeight: 'bold'}}>Edit Task</Text>
                     <Text>Tap the pen icon on the Task that you wish to edit, then change what is in each of the fields. Once you have finished editing, tap save.
                     </Text>

        <Text  style={{fontWeight: 'bold'}}>Delete Task</Text>
                <Text>Tap the pen icon and click remove on the page.
                 </Text>
        
                 <Text  style={{fontWeight: 'bold'}}>Missing Tasks</Text>
                <Text>Tasks are daily so all tasks (regardless if you completed them or not) will be erased when a new day comes.
                    Thus you will have an empty list to add your new tasks to!
                 </Text>
            </View>
    </ScrollView>
    )
}