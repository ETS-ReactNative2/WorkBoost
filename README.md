# WorkBoost

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
   1. `npm i` in root directory
   2. `cd ios`
   3. `pod install --repo-update`
   4. `cd ..`
   5.`npx react-native run-ios`

  I added script for this, run : npm run Jason
  
---
## Windows setup

2. npm i
3. npx expo start

(Not sure)
