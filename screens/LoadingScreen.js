import React, { Component } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


export default class LoadingScreen extends Component {

  componentDidMount() { 
    this.checkIfLoggedIn();
   }

   checkIfLoggedIn = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.navigation.navigate('DashboardScreen');
      }else{
        this.props.navigation.navigate('LoginScreen');
      }
    })
   }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
};