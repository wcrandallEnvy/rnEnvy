import React, { Component } from "react";
import {
  ActivityIndicator,
  List,
  StatusBar,
  FlatList,
  ListItem,
  Text,
  View,
  Dimensions
} from "react-native";
import styles from "../Styles/BaseStyles";
import advisorData from "../Lib/AdvisorDataManager";
import AdvisorListItem from "../Components/AdvisorListItem";

class AdvisorScreen extends React.Component {
  constructor(props) {
    super(props);

    const { width, height } = Dimensions.get("window");
    this.state = {
      isPortrait: height > width,
      dataList: [],
      isBusy: true
    };

    advisorData.loadOpportunities(results => {
      var dataList = [];
      if (results.isSuccess) {
        var data = JSON.parse(results.data);
        dataList = data.Data;
        if (data.Data.length > 0) {
          //     alert(JSON.stringify(data.Data[0]));
        } else {
          alert("no opportunities");
        }
      } else {
        alert(results.message);
      }
      this.setState({
        isBusy: false,
        dataList: dataList
      });
    });
  }

  static navigationOptions = {
    title: "Advisor"
  };

  oppSelected = item => {
    alert("Selected item " + JSON.stringify(item));
  };

  render() {
    return (
      <View style={styles.advisorContainer}>
        <StatusBar barStyle="default" />
        <ActivityIndicator
          size="small"
          color="#000000"
          animating={this.state.isBusy}
        />
        <FlatList
          data={this.state.dataList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <AdvisorListItem
              item={item}
              onPress={this.oppSelected.bind(this)}
            />
          )}
          keyExtractor={item => item.Guid}
        />
      </View>
    );
  }
}
export default AdvisorScreen;
