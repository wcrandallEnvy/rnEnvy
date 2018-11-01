import React, { Component } from "react";
import { AsyncStorage } from "react-native";

const LocalStorage = {
  loadUserData: async () => {
    var emptyUser = {
      userName: "",
      userId: 0,
      expires: "",
      token: ""
    };
    var arr = [];

    try {
      const userDataStr = await AsyncStorage.getItem("userData");

      var userData = emptyUser;

      if (userDataStr == null) {
        //not yet set
        await LocalStorage.saveUserData(emptyUser);
      } else {
        var tmpUserData = JSON.parse(userDataStr);

        if (
          tmpUserData == null ||
          tmpUserData.length == 0 ||
          typeof tmpUserData[0] === "undefined" ||
          typeof tmpUserData[0].userName === "undefined"
        ) {
          await LocalStorage.saveUserData(emptyUser);
        } else {
          userData = tmpUserData[0];
        }
      }

      global.userData = userData;

      return userData;
    } catch (e) {
      console.trace("LocalStorage load error: " + e.message);
    }
    return emptyUser;
  },

  saveUserData: async userData => {
    try {
      global.userData = userData;

      var arr = [];
      arr.push(userData);
      var jsonOfData = await AsyncStorage.setItem(
        "userData",
        JSON.stringify(arr)
      );
    } catch (e) {
      console.trace("LocalStorage save error: " + e.message);
      await AsyncStorage.setItem("userData", null);
    }
  },
  loadGlobalData: async () => {
    var emptyGlobal = {
      serverUrl: ""
    };
    var arr = [];

    try {
      const globalDataStr = await AsyncStorage.getItem("globalData");

      var globalData = emptyGlobal;

      if (globalDataStr == null) {
        //not yet set
        await LocalStorage.saveGlobalData(emptyGlobal);
      } else {
        var tmpGlobalData = JSON.parse(globalDataStr);

        if (
          tmpGlobalData == null ||
          tmpGlobalData.length == 0 ||
          typeof tmpGlobalData[0] === "undefined" ||
          typeof tmpGlobalData[0].serverUrl === "undefined"
        ) {
          await LocalStorage.saveGlobalData(emptyGlobal);
        } else {
          globalData = tmpGlobalData[0];
        }
      }

      global.globalData = globalData;

      return globalData;
    } catch (e) {
      console.trace("loadGlobalData load error: " + e.message);
    }
    return emptyGlobal;
  },

  saveGlobalData: async globalData => {
    try {
      global.globalData = globalData;

      var arr = [];
      arr.push(globalData);
      var jsonOfData = await AsyncStorage.setItem(
        "globalData",
        JSON.stringify(arr)
      );
    } catch (e) {
      console.trace("SaveGlobalData save error: " + e.message);
      await AsyncStorage.setItem("globalData", null);
    }
  }
};
export default LocalStorage;
