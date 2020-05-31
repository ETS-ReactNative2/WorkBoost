import firebase from 'firebase'

// First time sign up data creation
export function addNewUser() {
  var username = firebase.database().ref('users');
  const user = firebase.auth().currentUser;
  var newUser = username.child(`${user.uid}`);
  var habitLists = firebase.database().ref('habitLists');
  var habitList = habitLists.child(`habits_${user.uid}`);
  habitList.set({
    'user': user.email
  })

  var tasksLists = firebase.database().ref('taskLists');
  var taskList = tasksLists.child(`tasks_${user.uid}`);
  taskList.set({
    'user': user.email
  })

  newUser.set({
      'email': user.email,
      'habit_list_id': habitList.key,
      'task_list_id': taskList.key
  });

}

export function deleteUser() {
      // remove data from database
      username = firebase.database().ref('users')
      const user = firebase.auth().currentUser;
      userId = username.child(`${user.uid}`)
  
      var habitLists = firebase.database().ref('habitLists');
      var habitListId = habitLists.child(`habits_${user.uid}`);

      var taskLists = firebase.database().ref('taskLists');
      var taskListId = taskLists.child(`tasks_${user.uid}`)
  
      habitListId.remove();
      taskListId.remove();
      userId.remove();
  
      //remove
      firebase.auth().currentUser.delete().then(() => {console.log('User deleted')});
}

//Habit CRUD
//CREATE
export function saveHabitModel(title, description) {
  let today = new Date()
  let date = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear()
  const user = firebase.auth().currentUser;
  var userId = firebase.database().ref(`habitLists/habits_${user.uid}`);
  var habitId = userId.push();
  habitId.set({
      'name': title,
      'description': description,
      'streak': 0,
      'completed': false,
      'dateCreated': date,
      'lastCompleted': date,
      'frequency': "daily"
  });
}
//READ
export function pullHabitDataModel(callBack) {
  return new Promise((resolve,reject) => {
    const user = firebase.auth().currentUser
    firebase.database()
      .ref(`habitLists/habits_${user.uid}`)
      .once('value')
      .then(snapshot => {
        callBack(snapshot)
      })
      .then(() => resolve())
  })
}
//UPDATE
export function editsHabitModel(key, title, description, frequency) {
  const user = firebase.auth().currentUser;
  var habit = firebase.database().ref(`habitLists/habits_${user.uid}/${key}`);
  habit.update({ name: title, description: description, frequency: frequency});
}
// updates streak and completion
export function completeHabitModel(key, streak, complete, date, callBack) {
  const user = firebase.auth().currentUser;
  var habit = firebase.database().ref(`habitLists/habits_${user.uid}/${key}`);
  habit.update({streak: streak, completed: complete, lastCompleted: date})
    .then(() => {
      pullHabitDataModel(callBack)
    })
}
// used when refreshing habits next day
export function refreshHabitModel(key, streak, complete) {
  const user = firebase.auth().currentUser;
  var habit = firebase.database().ref(`habitLists/habits_${user.uid}/${key}`);
  habit.update({streak: streak, completed: complete})
}

//DELETE
export function removesHabitModel(key, callBack) {
  const user = firebase.auth().currentUser;
  var habit = firebase.database().ref(`habitLists/habits_${user.uid}/${key}`);
  habit.remove()
    .then(function() {
      console.log("Remove succeeded.")
      pullHabitDataModel(callBack)
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
}

//TASK CRUD
//CREATE
export function saveTaskModel(title, description) {
  let today = new Date()
  let date = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear()
  const user = firebase.auth().currentUser;
  var userId = firebase.database().ref(`taskLists/tasks_${user.uid}`);
  var taskId = userId.push();

  taskId.set({
      'name': title,
      'description': description,
      'dateCreated': date,
      'completed': false
  });
}
//READ
export function pullTaskDataModel(callBack) {
  return new Promise((resolve,reject) => {
  const user = firebase.auth().currentUser
  firebase.database()
    .ref(`taskLists/tasks_${user.uid}`)
    .once('value')
    .then(snapshot => {
      callBack(snapshot)
    })
    .then(() => resolve())
  })
}
//UPDATE
export function editsTaskModel(key, title, description) {
  const user = firebase.auth().currentUser;
  var task = firebase.database().ref(`taskLists/tasks_${user.uid}/${key}`);
  task.update({ name: title, description: description});
}
export function completeTaskModel(key, complete, callBack) {
  const user = firebase.auth().currentUser;
  var task = firebase.database().ref(`taskLists/tasks_${user.uid}/${key}`);
  task.update({ completed: complete})
    .then(() => {
      pullTaskDataModel(callBack)
    })
}
//DELETE
export function refreshRemoveTaskModel(key) {
  const user = firebase.auth().currentUser;
  var task = firebase.database().ref(`taskLists/tasks_${user.uid}/${key}`);
  task.remove()
}

export function removesTaskModel(key, callBack) {
  const user = firebase.auth().currentUser;
  var task = firebase.database().ref(`taskLists/tasks_${user.uid}/${key}`);
  task.remove()
    .then(function() {
      console.log("Remove succeeded.")
      pullTaskDataModel(callBack)
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
}

module.exports = {addNewUser, saveHabitModel, saveTaskModel, pullHabitDataModel, pullTaskDataModel, 
                  editsTaskModel, editsHabitModel, removesHabitModel, removesTaskModel, deleteUser, 
                  completeTaskModel, completeHabitModel, refreshRemoveTaskModel, refreshHabitModel}

