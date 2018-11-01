import React, { Component } from "react";
import { NetInfo } from "react-native";
import localStorage from "./LocalStorage";
import HttpAPI from "./HttpAPI";

const AdvisorDataManager = {
  loadOpportunities: async fnctn => {
    try {
      HttpAPI.ajaxGet(
        global.globalData.serverUrl + "/api/mobile/getadvisoropportunities",
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

export default AdvisorDataManager;
