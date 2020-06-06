import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC-9RLuVtRr2exJDAHjLqB4NoWg0P451XE",
  authDomain: "workboost-1b29a.firebaseapp.com",
  databaseURL: "https://workboost-1b29a.firebaseio.com",
  storageBucket: "workboost-1b29a.appspot.com"
}
firebase.initializeApp(firebaseConfig)

export function loginModel(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => resolve())
    .catch(error => reject(error))
  })
}

export function signupModel(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => resolve(user))
      .catch(error => reject(error))
  })
}

export function signoutModel() {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut()
    .then(() => resolve())
  })
}

export function forgotPasswordModel(email) {
  return new Promise((resolve, reject) => {
    firebase.auth()
    .sendPasswordResetEmail(email)
    .then(() => resolve())
    .catch(error => reject(error))
  })
}

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

  var date = new Date();
  var month = date.getUTCMonth() + 1;
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  fullDate = month + "-" + day + "-" + year;
  var profiles = firebase.database().ref('profiles');
  var profile = profiles.child(`profile_${user.uid}`);
  profile.set({
    'user': user.email,
    'timeProductive': 0,
    'accountCreationDate': fullDate
  })

  newUser.set({
      'email': user.email,
      'habit_list_id': habitList.key,
      'task_list_id': taskList.key,
      'profile_id': profile.key
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

      var profiles = firebase.database().ref('profiles');
      var profile = profiles.child(`profile_${user.uid}`);
  
      habitListId.remove();
      taskListId.remove();
      profile.remove();
      userId.remove();
  
      //remove
      firebase.auth().currentUser.delete().then(() => {console.log('User deleted')});
}

//Account Creation Date Read
export function pullCreationDate(callBack) {
    return new Promise((resolve,reject) => {
      const user = firebase.auth().currentUser
      firebase.database()
        .ref(`profiles/profile_${user.uid}`)
        .child("accountCreationDate")
        .once('value')
        .then(snapshot => {
            callBack(snapshot.val())
        })
        .then(() => resolve())
    })
  }



//Total Time Read and Update
export function listenTotalTime(callBack) {
      const user = firebase.auth().currentUser
      firebase.database()
        .ref(`profiles/profile_${user.uid}`)
        .child("timeProductive")
        .on('value', snapshot => {
            callBack(snapshot.val())
        });
  }


export function pullTotalTime(callBack) {
    return new Promise((resolve,reject) => {
      const user = firebase.auth().currentUser
      firebase.database()
        .ref(`profiles/profile_${user.uid}`)
        .child("timeProductive")
        .once('value')
        .then(snapshot => {
            callBack(snapshot.val())
        })
        .then(() => resolve())
    })
  }

export function addTotalTime(time) {
    const user = firebase.auth().currentUser;
    var profile = firebase.database().ref(`profiles/profile_${user.uid}`);
    profile.update({ timeProductive: time});
  }


//Habit CRUD
//CREATE
export function saveHabitModel(title, description, frequency, callBack) {
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
      'prevLastCompletion': date,
      'lastCompletion': date,
      'lastRefresh': date,
      'frequency': frequency
  })
  .then(() => pullHabitDataModel(callBack))
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
export function completeHabitModel(key, streak, complete, revert, callBack) {
  const user = firebase.auth().currentUser;
  var habit = firebase.database().ref(`habitLists/habits_${user.uid}/${key}`);
  let dbLastCompletion, dbPrevLastCompletion
  habit.once('value')
    .then(snapshot => {
      dbLastCompletion = snapshot.val().lastCompletion
      dbPrevLastCompletion = snapshot.val().prevLastCompletion
    })
    .then(() => {
      if(revert) {
        habit.update({streak: streak, completed: complete, lastCompletion: dbPrevLastCompletion})
        .then(() => {
          pullHabitDataModel(callBack)
        })
      }
      else {
        let date = new Date()
        let today = date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear()
        habit.update({streak: streak, completed: complete, lastCompletion: today, prevLastCompletion: dbLastCompletion})
        .then(() => {
          pullHabitDataModel(callBack)
        })
      }
    })
}
// used when refreshing habits next day
export function refreshHabitModel(key, streak, date, complete) {
  const user = firebase.auth().currentUser;
  var habit = firebase.database().ref(`habitLists/habits_${user.uid}/${key}`);
  habit.update({streak: streak, completed: complete, lastRefresh: date})
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
export function saveTaskModel(title, description, dueDate) {
  let today = new Date()
  let date = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear()
  const user = firebase.auth().currentUser;
  var userId = firebase.database().ref(`taskLists/tasks_${user.uid}`);
  var taskId = userId.push();

  taskId.set({
      'name': title,
      'description': description,
      'dateCreated': date,
      'dueDate': dueDate,
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
export function editsTaskModel(key, title, description, dueDate) {
  const user = firebase.auth().currentUser;
  var task = firebase.database().ref(`taskLists/tasks_${user.uid}/${key}`);
  task.update({ name: title, description: description, dueDate: dueDate});
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
                  completeTaskModel, completeHabitModel, refreshRemoveTaskModel, refreshHabitModel,
                  listenTotalTime, pullTotalTime, addTotalTime, pullCreationDate, loginModel,
                  signupModel, signoutModel, forgotPasswordModel}

