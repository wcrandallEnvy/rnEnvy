import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  inputText: {
    margin: 10,
    height: 40,
    borderWidth: 0.5,
    borderColor: "gray",
    width: "70%"
  },
  inputLabel: {
    textAlign: "left",
    marginLeft: 5,
    fontWeight: "bold"
  },

  homeImagePos: {
    width: 170,
    marginLeft: 10,
    alignItems: "center",
    flex: 1
  },

  homeContainer: {
    flex: 1
  },
  homeImageTxtBotmRght: {
    fontSize: 30,
    width: 120,
    textAlign: "right",
    fontWeight: "bold",
    color: "red"
  },

  homeImageViewBotmRght: {
    position: "absolute",
    marginLeft: 150,
    marginTop: 90
  },

  advisorContainer: {
    paddingTop: 5,
    borderRadius: 2
  },

  advisorListItem: {
    justifyContent: "center",
    paddingTop: 5,
    marginLeft: 30,
    marginBottom: 5,
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "lightgray",
    paddingTop: 10
  },

  advisorListItemGrade_High: {
    height: 35,
    width: 35,
    borderRadius: 6,
    backgroundColor: "red"
  },

  advisorListItemGrade_Low: {
    height: 35,
    width: 35,
    borderRadius: 6,
    backgroundColor: "lightblue"
  },

  advisorListItemGradeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 4
  },

  advisorListItemText: {
    fontSize: 20
  },

  advisorName: {
    color: "red"
  },

  notificationTypeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 4
  },

  notificationBadge: {
    height: 35,
    width: 35,
    borderRadius: 6,
    backgroundColor: "blue"
  },

  mapsContainer: {
    flex: 1
  },

  mapsMarker_A: {
    height: 35,
    width: 35,
    borderRadius: 15,
    backgroundColor: "limegreen"
  },

  mapsMarker_B: {
    height: 35,
    width: 35,
    borderRadius: 15,
    backgroundColor: "mediumspringgreen"
  },

  mapsMarker_C: {
    height: 35,
    width: 35,
    borderRadius: 15,
    backgroundColor: "magenta"
  },

  mapsMarker_D: {
    height: 35,
    width: 35,
    borderRadius: 15,
    backgroundColor: "orange"
  },

  mapsMarker_E: {
    height: 35,
    width: 35,
    borderRadius: 15,
    backgroundColor: "salmon"
  },

  mapsMarker_F: {
    height: 35,
    width: 35,
    borderRadius: 15,
    backgroundColor: "red"
  },

  mapsCalloutParent: {
    backgroundColor: "white",
    width: 300,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "purple",
    padding: 10
  },

  mapsCalloutTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18
  },

  mapsCalloutAddress: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 18
  },

  mapsCalloutKPI: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10
  }
});
