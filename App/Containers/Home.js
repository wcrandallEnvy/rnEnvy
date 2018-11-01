import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  TouchableHighlight,
  View,
  Image,
  Text,
  Dimensions
} from "react-native";
import styles from "../Styles/BaseStyles";
import commonData from "../Lib/CommonDataManager";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    const { width, height } = Dimensions.get("window");
    this.state = {
      isPortrait: height > width,
      advisorCount: 0,
      notificationCount: 0,
      footstepCount: 0,
      isBusy: true
    };

    commonData.loadActionSummary(results => {
      if (results.isSuccess) {
        var data = JSON.parse(results.data);
        this.setState({
          advisorCount: data.Data.AdvisorCount,
          notificationCount: data.Data.NotificationCount,
          footstepCount: data.Data.WalkCount,
          isBusy: false
        });
      } else {
        alert(results.message);
      }
    });
  }

  static navigationOptions = {
    title: "Home"
  };

  render() {
    const user = global.userData;
    var styleImage = styles.homeImagePos;

    if (this.state.isPortrait) {
      return (
        <View
          style={styles.homeContainer}
          onLayout={this._layoutChange.bind(this)}
        >
          <View style={{ flex: 1, flexDirection: "row", marginTop: 25 }}>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Notifications")}
              >
                <Image source={require("../Img/ButtonNotifications.png")} />
              </TouchableHighlight>
              <View style={styles.homeImageViewBotmRght} pointerEvents={"none"}>
                <Text style={styles.homeImageTxtBotmRght}>
                  {this.state.notificationCount}
                </Text>
              </View>
            </View>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Advisor")}
              >
                <Image source={require("../Img/ButtonAdvisor.png")} />
              </TouchableHighlight>
              <View style={styles.homeImageViewBotmRght} pointerEvents={"none"}>
                <Text style={styles.homeImageTxtBotmRght}>
                  {this.state.advisorCount}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Dashboard")}
              >
                <Image source={require("../Img/ButtonDashboard.png")} />
              </TouchableHighlight>
            </View>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Walk")}
              >
                <Image source={require("../Img/ButtonFootsteps.png")} />
              </TouchableHighlight>
              <View style={styles.homeImageViewBotmRght} pointerEvents={"none"}>
                <Text style={styles.homeImageTxtBotmRght}>
                  {this.state.footstepCount}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Tools")}
              >
                <Image source={require("../Img/ButtonTools.png")} />
              </TouchableHighlight>
            </View>
            <View style={styleImage}>
              <TouchableHighlight onPress={this._signOutAsync}>
                <Image source={require("../Img/ButtonLogout.png")} />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 0.5, flexDirection: "row" }}>
            <ActivityIndicator
              size="small"
              color="#000000"
              animating={this.state.isBusy}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={styles.homeContainer}
          onLayout={this._layoutChange.bind(this)}
        >
          <View style={{ flex: 1, flexDirection: "row", marginTop: 25 }}>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Notifications")}
              >
                <Image source={require("../Img/ButtonNotifications.png")} />
              </TouchableHighlight>
              <View style={styles.homeImageViewBotmRght} pointerEvents={"none"}>
                <Text style={styles.homeImageTxtBotmRght}>
                  {this.state.notificationCount}
                </Text>
              </View>
            </View>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Advisor")}
              >
                <Image source={require("../Img/ButtonAdvisor.png")} />
              </TouchableHighlight>
              <View style={styles.homeImageViewBotmRght} pointerEvents={"none"}>
                <Text style={styles.homeImageTxtBotmRght}>
                  {this.state.advisorCount}
                </Text>
              </View>
            </View>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Dashboard")}
              >
                <Image source={require("../Img/ButtonDashboard.png")} />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Walk")}
              >
                <Image source={require("../Img/ButtonFootsteps.png")} />
              </TouchableHighlight>
              <View style={styles.homeImageViewBotmRght} pointerEvents={"none"}>
                <Text style={styles.homeImageTxtBotmRght}>
                  {this.state.footstepCount}
                </Text>
              </View>
            </View>
            <View style={styleImage}>
              <TouchableHighlight
                onPress={this._showMoreApp.bind(this, "Tools")}
              >
                <Image source={require("../Img/ButtonTools.png")} />
              </TouchableHighlight>
            </View>
            <View style={styleImage}>
              <TouchableHighlight onPress={this._signOutAsync}>
                <Image source={require("../Img/ButtonLogout.png")} />
              </TouchableHighlight>
            </View>
          </View>
          <ActivityIndicator
            size="small"
            color="#000000"
            animating={this.state.isBusy}
          />
        </View>
      );
    }
  }

  _layoutChange = () => {
    const { width, height } = Dimensions.get("window");
    this.setState({ isPortrait: height > width });
  };

  _showMoreApp = pageName => {
    this.props.navigation.navigate(pageName);
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}
export default HomeScreen;
