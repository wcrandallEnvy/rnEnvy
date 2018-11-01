import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  WebView,
  Dimensions
} from "react-native";
import styles from "../Styles/BaseStyles";

class ReportViewerScreen extends React.Component {
  constructor(props) {
    super(props);

    const { width, height } = Dimensions.get("window");
    this.state = {
      isPortrait: height > width,
      url: this.props.navigation.getParam("url", "")
    };
  }

  static navigationOptions = {
    title: "Report Viewer"
  };

  render() {
    return <WebView source={{ uri: this.state.url }} />;
  }
}
export default ReportViewerScreen;
