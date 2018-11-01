import React, { Component } from "react";
import { Text, View, Switch, TouchableHighlight } from "react-native";
import styles from "../Styles/BaseStyles";
import Moment from "moment";

class NotificationListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  itemPressed() {
    if (this.props.onPress) {
      this.props.onPress(this.props.item);
    }
  }

  itemSelected(value) {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.item.NotificationInstanceID, value);
    }
  }

  selectRenderType() {
    if (this.props.item.NotificationTypeID == 4) {
      return this.renderReportItem();
    } else if (
      this.props.item.NotificationTypeID <= 2 ||
      this.props.item.NotificationTypeID == 10 ||
      this.props.item.NotificationTypeID == 12
    ) {
      return this.renderAdvisorItem();
    } else {
      return this.renderAlertItem();
    }
  }

  renderReportItem() {
    return (
      <View style={styles.advisorListItem}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationTypeText}>{"R"}</Text>
            </View>
          </View>
          <View style={{ width: 70 }}>
            <Switch
              value={this.props.item.Selected}
              onValueChange={this.itemSelected.bind(this)}
            />
          </View>
        </View>
        <TouchableHighlight onPress={this.itemPressed.bind(this)}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.advisorListItemText}>
                {this.props.item.NotificationDescription}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  renderAdvisorItem() {
    return (
      <View style={styles.advisorListItem}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ width: 60 }}>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationTypeText}>{"A"}</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Switch
              value={this.props.item.Selected}
              onValueChange={this.itemSelected.bind(this)}
            />
          </View>
        </View>
        <TouchableHighlight onPress={this.itemPressed.bind(this)}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.advisorListItemText}>
                {this.props.item.NotificationDescription}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  renderAlertItem() {
    return (
      <View style={styles.advisorListItem}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ width: 60 }}>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationTypeText}>{"M"}</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Switch
              value={this.props.item.Selected}
              onValueChange={this.itemSelected.bind(this)}
            />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.advisorListItemText}>
              {this.props.item.NotificationDescription}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return this.selectRenderType();
  }
}
export default NotificationListItem;
