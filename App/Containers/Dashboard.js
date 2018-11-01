import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Platform
} from "react-native";
import styles from "../Styles/BaseStyles";

class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: "Dashboard"
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default DashboardScreen;
