/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { Platform } from "react-native";

import WalkScreen from "./App/Containers/Walk";
import HomeScreen from "./App/Containers/Home";
import SignInScreen from "./App/Containers/SignIn";
import AuthLoadingScreen from "./App/Containers/AuthLoading";
import AdvisorScreen from "./App/Containers/Advisor";
import NotificationsScreen from "./App/Containers/Notifications";
import ToolsScreen from "./App/Containers/Tools";
import DashboardScreen from "./App/Containers/Dashboard";
import ReportViewerScreen from "./App/Containers/ReportViewer";

//const instructions = Platform.select({
//  ios: "Press Cmd+R to reload, ******* \n" + "Cmd+D or shake for dev menu",
//  android: "Double tap R on your keyboard to reload,\n" + ""
//});

//Define global variables used in the application
global.userData = {
  userName: "",
  expires: "",
  token: ""
};
global.globalData = {
  serverUrl: ""
};

//Navigation
const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Walk: WalkScreen,
    Advisor: AdvisorScreen,
    Notifications: NotificationsScreen,
    Tools: ToolsScreen,
    Dashboard: DashboardScreen,
    ReportViewer: ReportViewerScreen
  },
  {
    navigationOptions: {
      headerStyle: { height: 50, alignItems: "flex-end" }
    }
  }
);
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
