import React, { Component } from "react";
import { NetInfo } from "react-native";
import localStorage from "./LocalStorage";
import HttpAPI from "./HttpAPI";

const CommonDataManager = {
  loadActionSummary: async fnctn => {
    try {
      HttpAPI.ajaxGet(
        global.globalData.serverUrl + "/api/mobile/loadactioncounts",
        result => {
          fnctn(result);
        }
      );
    } catch (e) {
      console.trace("CommonDataManager validateToken error: " + e.message);
    }
    return;
  },

  loadUserNotifications: async (showAll, fnctn) => {
    try {
      var jsonData = JSON.stringify({ showAll: showAll });

      HttpAPI.ajaxPost(
        global.globalData.serverUrl +
          "/api/mobile/loadusernotifications?showall=" +
          showAll.toString(),
        jsonData,
        result => {
          fnctn(result);
        }
      );
    } catch (e) {
      console.trace("CommonDataManager validateToken error: " + e.message);
    }
    return;
  },

  saveUserNotifications: async (notificationList, showAll, fnctn) => {
    try {
      var jsonData = JSON.stringify({
        viewedNotifications: JSON.stringify(data),
        showAll: showAll
      });

      HttpAPI.ajaxPost(
        global.globalData.serverUrl + "/api/mobile/saveviewedusernotifications",
        result => {
          fnctn(result);
        }
      );
    } catch (e) {
      console.trace("CommonDataManager validateToken error: " + e.message);
    }
    return;
  }
};

export default CommonDataManager;
