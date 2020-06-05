# WorkBoost

## Introduction
---

Workboost is a iOS mobile application built on the React Native framework. It is designed to 
provide features that optimize at home productivity and includes features such as a productivity timer, and  habit tracking and task organization tools.

## Requirements
---
Our system requires that to run the application on a phone, the expo iOS application is installed.
To run on a computer, you will need to install the expo-cli via `npm` and the yarn package manager.


## iOS setup
https://reactnative.dev/docs/environment-setup

Run these two commands in terminal:
  brew install node
  brew install watchman
  npm install -s react-native-cli

Install XCode. You may need to update your Mac in order to be able to do that.
Go to XCode -> Preferences -> Location -> choose the most recent version under command line tools.
To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

Run this command in terminal to install cocoapods
  sudo gem install cocoapods

Clone the git repository if you have not done so already. Make sure you pull master as the other branches may have unresolved errors.

In order to run the simulation, run the following code:
   1. `yarn` in root directory
   2. `cd ios`
   3. `pod install --repo-update`
   4. `cd ..`
   5.`npx react-native run-ios`
  
---
## Windows setup

1. npm install firebase
2. npm install -g expo-cli
3. npm i OR yarn
4. npx expo start

