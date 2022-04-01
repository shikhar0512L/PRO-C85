import * as React from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashboardScreen from './screens/DashboardScreen';


import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}



const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  LoadingScreen:LoadingScreen,
  DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
<AppNavigator/>
  );
}