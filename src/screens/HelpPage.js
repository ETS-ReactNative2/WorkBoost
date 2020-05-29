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
            <Text>To begin timer, tap the ___ and enter the number of minutes you wish to work for, then tap start.
            </Text>

             <Text  style={{fontWeight: 'bold'}}>Pause Timer</Text>
             <Text>To pause the timer, tap the purple pause button. To un-pause, tap the purple pause button again.
             </Text>

             <Text  style={{fontWeight: 'bold'}}>Reset Timer</Text>
             <Text>To reset the timer to, tap the orange reset button on the timer page.
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
           <Text>Tap the plus sign at the bottom of the page and fill in each field for the habit, then click add. Tap the back button to cancel creating a Habit.
           </Text>

        <Text  style={{fontWeight: 'bold'}}>Check off Habit</Text>
        <Text>Tap the checkmark next to the Habit on the Habit Page.
        </Text>

         <Text  style={{fontWeight: 'bold'}}>Edit Habit</Text>
         <Text>Tap the pen icon on the Habit you wish to edit. Then change what is in each field. Once you have finished editing, tap done.
         </Text>

        <Text  style={{fontWeight: 'bold'}}>Delete Habit</Text>
        <Text>Tap the edit Habit icon and click delete on the edit page, deleting the habit.
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
                 <Text>Tap the plus sign at the bottom of the page and fill each field for the Task, then click add. Tap the back button to cancel creating the Task.
                 </Text>

        <Text  style={{fontWeight: 'bold'}}>Check off Task</Text>
                     <Text>Tap the checkmark next to the Task on the Task Page.
                     </Text>

        <Text  style={{fontWeight: 'bold'}}>Edit Task</Text>
                     <Text>Tap the pen icon on the Task that you wish to edit, then change what is in each of the fields. Once you have finished editing, tap done.
                     </Text>

        <Text  style={{fontWeight: 'bold'}}>Delete Task</Text>
                <Text>Tap the edit Task icon and click delete on the page, deleting the Task.
                 </Text>
            </View>
    <View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
                 <Text  style={{fontWeight: 'bold', fontSize:20}}>Friends</Text>
        </View>
        <View style={{flex:1, justifyContent:'left', alignItems: 'left', padding: 20}}>
        <Text  style={{fontWeight: 'bold'}}>Navigating to the Friends page</Text>
              <Text>Tap the Friends icon at the top left of the/your screen
              </Text>

        <Text  style={{fontWeight: 'bold'}}>Add Friend</Text>
               <Text>Tap the add friends icon on the bottom, then fill in the pop-up field with your friend’s name, then hit add. If you successfully added them, you will be notified.
               </Text>
       </View>
    </ScrollView>
    )
}