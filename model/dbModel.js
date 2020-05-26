import firebase from 'firebase'

export function addNewUser() {
  var username = firebase.database().ref('users');
  const user = firebase.auth().currentUser;
  var newUser = username.child(`${user.uid}`);
  // console.log(user.uid)
  newUser.set({
      'email': user.email
  });
}

export function saveHabit(title, description) {
  const user = firebase.auth().currentUser;
  var userId = firebase.database().ref(`users/${user.uid}`);
  const habitList = userId.child('habits')
  var habitId = habitList.push();
  // console.log(title)
  habitId.set({
      'name': title,
      'description': description
  });
  
}

  module.exports = {addNewUser, saveHabit}