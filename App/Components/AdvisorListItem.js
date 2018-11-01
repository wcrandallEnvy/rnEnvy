import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "../Styles/BaseStyles";
import Moment from "moment";
import NumberFormat from "react-number-format";

class AdvisorListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  itemSelected() {
    if (this.props.onPress) {
      this.props.onPress(this.props.item);
    }
  }

  render() {
    var gradeClass =
      this.props.item.GradeLabel == "High"
        ? styles.advisorListItemGrade_High
        : styles.advisorListItemGrade_Low;

    return (
      <TouchableHighlight onPress={this.itemSelected.bind(this)}>
        <View style={styles.advisorListItem}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <View style={gradeClass}>
                <Text style={styles.advisorListItemGradeText}>
                  {this.props.item.GradeLabel == "High" ? "H" : "L"}
                </Text>
              </View>
            </View>
            <View
              style={{ flex: 1, flexDirection: "row", textAlighn: "right" }}
            >
              <Text>
                {Moment(this.props.item.DateCreated).format("MM/DD/YYYY")}
              </Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                  marginRight: 10
                }}
                source={require("../Img/ButtonDashboard.png")}
              />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.advisorListItemText}>Entity:</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.advisorListItemText}>
                {this.props.item.EntityName}
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.advisorListItemText}>Opportunity:</Text>
            </View>
            <View style={{ flex: 1 }}>
              <NumberFormat
                value={this.props.item.Score}
                decimalScale={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={value => (
                  <Text style={styles.advisorListItemText}>{value}</Text>
                )}
              />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10
                }}
                source={require("../Img/ButtonDashboard.png")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "red" }}>Expired</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
export default AdvisorListItem;
