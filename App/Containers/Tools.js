import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import styles from "../Styles/BaseStyles";
import MapView, { Callout } from "react-native-maps";

const { width, height } = Dimensions.get("window");

class ToolsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPortrait: height > width,
      dataList: [],
      isBusy: true,
      region: {
        latitude: 45.52220671242907,
        longitude: -122.6653281029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.0401428117690068
      },
      markers: [
        {
          coordinate: {
            latitude: 45.524548,
            longitude: -122.6749817
          },
          title: "Store 1",
          rank: "A",
          id: 1
        },
        {
          coordinate: {
            latitude: 45.524698,
            longitude: -122.6655507
          },
          title: "Store 2",
          rank: "B",
          id: 2
        },
        {
          coordinate: {
            latitude: 45.5230786,
            longitude: -122.6501034
          },
          title: "Store 3",
          rank: "C",
          id: 3
        },
        {
          coordinate: {
            latitude: 45.5128786,
            longitude: -122.6901034
          },
          title: "Store 4",
          rank: "A",
          id: 4
        },
        {
          coordinate: {
            latitude: 45.5428786,
            longitude: -122.6601034
          },
          title: "Store 5",
          rank: "D",
          id: 5
        },
        {
          coordinate: {
            latitude: 45.5297986,
            longitude: -122.6701034
          },
          title: "Store 6",
          rank: "C",
          id: 6
        },
        {
          coordinate: {
            latitude: 45.534666,
            longitude: -122.6531034
          },
          title: "Store 7",
          rank: "B",
          id: 7
        },
        {
          coordinate: {
            latitude: 45.5377786,
            longitude: -122.6691034
          },
          title: "Store 8",
          rank: "F",
          id: 8
        },
        {
          coordinate: {
            latitude: 45.5409786,
            longitude: -122.6831034
          },
          title: "Store 9",
          rank: "E",
          id: 9
        },
        {
          coordinate: {
            latitude: 45.5081086,
            longitude: -122.6749817
          },
          title: "Store 10",
          rank: "B",
          id: 10
        }
      ]
    };
  }

  static navigationOptions = {
    title: "Maps"
  };

  loadLocationData() {}

  calculateRegion(points) {
    var maxLongitude = -180;
    var minLongitude = 180;
    var maxLatitude = -180;
    var minLatitude = 180;

    points.forEach(function(point) {
      if (point.coordinate.latitude < minLatitude) {
        minLatitude = point.coordinate.latitude;
      }
      if (point.coordinate.latitude > maxLatitude) {
        maxLatitude = point.coordinate.latitude;
      }
      if (point.coordinate.longitude < minLongitude) {
        minLongitude = point.coordinate.longitude;
      }
      if (point.coordinate.longitude > maxLongitude) {
        maxLongitude = point.coordinate.longitude;
      }
    });

    var scale = height / width;
    var deltaLatitude = maxLatitude - minLatitude;
    var deltaLongitude = maxLongitude - minLongitude;

    return {
      latitude: minLatitude + deltaLatitude / 2,
      longitude: minLongitude + deltaLongitude / 2,
      latitudeDelta: deltaLatitude * 1.1,
      longitudeDelta: deltaLongitude * 1.1
    };
  }

  render() {
    var locationPoints = this.state.markers;

    return (
      <MapView
        ref={map => (this.map = map)}
        initialRegion={this.calculateRegion(locationPoints)}
        style={styles.mapsContainer}
      >
        {locationPoints.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            pinColor={marker.color}
          >
            <View
              style={
                marker.rank == "A"
                  ? styles.mapsMarker_A
                  : marker.rank == "B"
                    ? styles.mapsMarker_B
                    : marker.rank == "C"
                      ? styles.mapsMarker_C
                      : marker.rank == "D"
                        ? styles.mapsMarker_D
                        : marker.rank == "E"
                          ? styles.mapsMarker_E
                          : styles.mapsMarker_F
              }
            >
              <Text style={styles.advisorListItemGradeText}>{marker.rank}</Text>
            </View>
            <Callout tooltip>
              <View style={styles.mapsCalloutParent}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.mapsCalloutTitle}>{marker.title}</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.mapsCalloutAddress}>
                      1423 S ThisStreet
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                    marginBottom: 5
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.mapsCalloutAddress}>
                      Portland, Oregon 45554-1112
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.mapsCalloutKPI}>Voids</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.mapsCalloutKPI}>Discounts</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Text style={{ borderBottomWidth: 1 }}>View Details</Text>
                  </View>
                </View>
              </View>
            </Callout>
          </MapView.Marker>
        ))}
      </MapView>
    );
  }
}
export default ToolsScreen;
