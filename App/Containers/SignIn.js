import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Platform
} from "react-native";
import styles from "../Styles/BaseStyles";
import localStorage from "../Lib/LocalStorage";
import httpAPI from "../Lib/HttpAPI";

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "tony1",
      password: "tony11",
      serverUrl: "https://dev.sparkanalytics.com/envy",
      showServerUrl: true,
      isBusy: false
    };
  }
  static navigationOptions = {
    title: "Please sign in"
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="small"
          color="#000000"
          animating={this.state.isBusy}
        />

        <Text style={styles.inputLabel}>User Name</Text>
        <TextInput
          style={styles.inputText}
          value={this.state.userName}
          editable={!this.state.isBusy}
          onChangeText={userName => this.setState({ userName })}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          value={this.state.password}
          editable={!this.state.isBusy}
          onChangeText={password => this.setState({ password })}
        />
        <Text style={styles.inputLabel}>Server Url</Text>
        <TextInput
          style={styles.inputText}
          value={this.state.serverUrl}
          editable={!this.state.isBusy}
          onChangeText={serverUrl => this.setState({ serverUrl })}
          placeholder={"https://mysite.com/company"}
        />
        <Button
          title={"Sign in"}
          onPress={this._signInAsync.bind(this)}
          disabled={this.state.isBusy}
        />
      </View>
    );
  }

  _signInAsync() {
    this.setState({ isBusy: true });

    httpAPI.validateLogin(
      this.state.userName,
      this.state.password,
      this.state.serverUrl,
      isValid => {
        this.setState({ isBusy: false });
        if (isValid) {
          this.props.navigation.navigate("App");
        } else {
          alert("Invalid Username or Password.");
        }
      }
    );
  }
}
export default SignInScreen;
