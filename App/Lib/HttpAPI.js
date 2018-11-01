import React, { Component } from "react";
import { NetInfo } from "react-native";
import localStorage from "../Lib/LocalStorage";
import LocalStorage from "../Lib/LocalStorage";

const HttpAPI = {
  helloWorld: async () => {
    try {
      var data = {
        Message: "Some Message",
        Successful: true,
        Data: "Some Data"
      };

      HttpAPI.ajaxPost(
        global.globalData.serverUrl + "/api/mobile/helloworld",
        data,
        result => {
          if (result.isSuccess) {
            var n = result.data;
          }
        }
      );

      return true;
    } catch (e) {
      console.trace("HttpAPI helloWorld error: " + e.message);
    }
    return false;
  },

  validateToken: async (token, fnctn) => {
    try {
      //If user object found then call server to validate
      if (
        !(
          global.userData == null ||
          global.userData.token === "undefined" ||
          global.userData.token == "" ||
          global.globalData === "undefined" ||
          global.globalData.serverUrl === "undefined" ||
          global.globalData.serverUrl == ""
        )
      ) {
        HttpAPI.ajaxGet(
          global.globalData.serverUrl + "/api/mobile/authenticatetoken",
          result => {
            fnctn(result.isSuccess);
          }
        );
      } else {
        fnctn(false);
      }
    } catch (e) {
      console.trace("HttpAPI validateToken error: " + e.message);
    }
  },

  validateLogin: async (userName, password, serverUrl, fnctn) => {
    try {
      var data = {
        Username: userName,
        Password: password
      };
      var jsonData = JSON.stringify(data);

      global.globalData.serverUrl = serverUrl;
      global.userData.token = "";

      HttpAPI.ajaxPost(serverUrl + "/api/mobile/token", jsonData, result => {
        if (result.isSuccess) {
          var pckg = JSON.parse(result.data);
          global.userData.token = pckg.Data;
          global.userData.userName = userName;
          var expires = new Date();
          expires.setDate(expires.getDate() + 5); //Set required login to every 5 days. In future make this a setting on the server
          global.userData.expires = expires;

          LocalStorage.saveUserData(global.userData);
          LocalStorage.saveGlobalData(global.globalData);

          fnctn(true);
        } else {
          fnctn(false);
        }
      });
    } catch (e) {
      console.trace("HttpAPI validateToken error: " + e.message);
    }
    return;
  },

  ajaxPost: async (url, data, fnctn) => {
    try {
      if (NetInfo.isConnected) {
        var token = "";
        if (
          !(
            global.userData == null ||
            global.userData.token === "undefined" ||
            global.userData.token == ""
          )
        ) {
          token = global.userData.token;
        }
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + token
          },
          body: data
        })
          .then(response => {
            var result = {
              data: "",
              isSuccess: false,
              requestStatus: response.status,
              isConnected: true
            };
            if (response.status == 200) {
              result.data = response._bodyText;
              result.isSuccess = true;
              fnctn(result);
            } else {
              if (response._bodyText != null) {
                result.data = response._bodyText;
              }
              fnctn(result);
            }
          })
          .catch(e => {
            console.trace(e.message);
          });
      }
    } catch (e) {
      console.trace("HttpAPI POST data error: " + e.message);
    }
  },

  ajaxGet: async (url, fnctn) => {
    try {
      if (NetInfo.isConnected) {
        var token = "";
        if (
          !(
            global.userData == null ||
            global.userData.token === "undefined" ||
            global.userData.token == ""
          )
        ) {
          token = global.userData.token;
        }
        fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + token
          }
        })
          .then(response => {
            var result = {
              data: "",
              isSuccess: false,
              requestStatus: response.status,
              isConnected: true
            };
            if (response.status == 200) {
              result.data = response._bodyText;
              result.isSuccess = true;
              fnctn(result);
            } else {
              if (response._bodyText != null) {
                result.data = response._bodyText;
              }
              fnctn(result);
            }
          })
          .catch(e => {
            console.trace(e.message);
          });
      }
    } catch (e) {
      console.trace("HttpAPI GET data error: " + e.message);
    }
  }
};

export default HttpAPI;
