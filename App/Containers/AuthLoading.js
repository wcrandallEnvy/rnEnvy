import React, { Component } from "react";
import {
  ActivityIndicator,
  StatusBar,
  Text,
  View,
  NetInfo
} from "react-native";
import styles from "../Styles/BaseStyles";
import localStorage from "../Lib/LocalStorage";
import httpAPI from "../Lib/HttpAPI";

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    var isAuthenticated = true;

    const userData = await localStorage.loadUserData();
    const globalData = await localStorage.loadGlobalData();

    //No user information so need to login
    if (
      userData == null ||
      userData.token === "undefined" ||
      userData.token == "" ||
      userData.expires === "undefined" ||
      userData.expires == "" ||
      //     userData.userId === "undefined" ||
      //     userData.userId == 0 ||
      globalData === "undefined" ||
      globalData.serverUrl === "undefined" ||
      globalData.serverUrl == ""
    ) {
      this.props.navigation.navigate("Auth", {
        user: userData
      });
    } else {
      //Otherwise check the expires date. If older than now, no need to check server
      var exiresDate = new Date(userData.expires);
      var currentDate = new Date();
      if (exiresDate >= currentDate) {
        //If the device is currently not connected to internet but not expired then just allow connection
        if (NetInfo.isConnected) {
          httpAPI.validateToken(userData.token, isValid => {
            this.props.navigation.navigate(isValid ? "App" : "Auth", {
              user: userData
            });
          });
        } else {
          this.props.navigation.navigate("App", {
            user: userData
          });
        }
      } else {
        this.props.navigation.navigate("Auth", {
          user: userData
        });
      }
    }

    //   setTimeout(() => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    //     this.props.navigation.navigate(userToken.userId > 0 ? "App" : "Auth", {
    //       user: userToken
    //     });
    //   }, 2000);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <ActivityIndicator size="small" color="#000000" />
        <Text>Checking for valid credentials...</Text>
      </View>
    );
  }
}
export default AuthLoadingScreen;
