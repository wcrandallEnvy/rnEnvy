import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  Switch,
  StatusBar,
  FlatList,
  View,
  Dimensions
} from "react-native";
import styles from "../Styles/BaseStyles";
import commonData from "../Lib/CommonDataManager";
import NotificationListItem from "../Components/NotificationListItem";

class NotificationsScreen extends React.Component {
  constructor(props) {
    super(props);

    const { width, height } = Dimensions.get("window");
    this.state = {
      isPortrait: height > width,
      dataList: [],
      isBusy: true,
      showAll: false
    };

    this.loadNotificationData(false);
  }

  static navigationOptions = {
    title: "Notifications"
  };

  loadNotificationData(showAll) {
    commonData.loadUserNotifications(showAll, results => {
      var dataList = [];
      if (results.isSuccess) {
        var data = JSON.parse(results.data);
        dataList = data.Data.NotificationInstances;

        var dataItems = dataList.map((item, index) => {
          item.Selected = false;
          return item;
        });
      }

      this.setState({
        isBusy: false,
        dataList: dataItems
      });
    });
  }

  selectAllSelected(value) {
    var dataItems = this.state.dataList.map((item, index) => {
      item.Selected = value;
      return item;
    });

    this.setState({ selectAll: value, dataList: dataItems });
  }

  showAllSelected(value) {
    this.setState({ showAll: value, selectAll: false });
    this.loadNotificationData(value);
  }

  notifSelected = item => {
    this.props.navigation.navigate("ReportViewer", {
      url:
        global.globalData.serverUrl +
        "/Report/ReportViewer?ReportGuid=" +
        item.NotificationInstanceGUID
    });
  };

  notifChecked = (itemId, value) => {
    var items = this.state.dataList.map((item, index) => {
      if (item.NotificationInstanceID == itemId) {
        item.Selected = value;
      }
      return item;
    });
    this.setState({ dataList: items });
  };

  render() {
    return (
      <View style={styles.notificationContainer}>
        <StatusBar barStyle="default" />
        <ActivityIndicator
          size="small"
          color="#000000"
          animating={this.state.isBusy}
        />
        <View style={{ height: 45, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.advisorListItemText}>{"Show All"}</Text>
          </View>
          <View style={{ width: 50 }}>
            <Switch
              value={this.state.showAll}
              onValueChange={this.showAllSelected.bind(this)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.advisorListItemText}>{"Select"}</Text>
          </View>
          <View style={{ width: 50 }}>
            <Switch
              value={this.state.selectAll}
              onValueChange={this.selectAllSelected.bind(this)}
            />
          </View>
        </View>
        <FlatList
          data={this.state.dataList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <NotificationListItem
              item={item}
              onPress={this.notifSelected.bind(this)}
              onSelect={this.notifChecked.bind(this)}
            />
          )}
          keyExtractor={item => item.NotificationInstanceID}
        />
      </View>
    );
  }
}
export default NotificationsScreen;
