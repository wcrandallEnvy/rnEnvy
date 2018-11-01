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

class WalkScreen extends React.Component {
  static navigationOptions = {
    title: "Footsteps"
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default WalkScreen;
