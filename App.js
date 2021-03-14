import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { ThemeProvider } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./AuthContext";
import NavigationController from "./src/components/NavigationController";
import styles from "./styles";
import { navigationRef } from "./src/navigation/MainNavigation";

export default function App() {
  const [client, setClient] = useState(null); // backend랑 연결할 때 사용
  const [loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font,
      });
      await Asset.loadAsync([require("./assets/logo.png")]); // image preload
      /*
        // TODO: cache memory code 
      */
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (!isLoggedIn || isLoggedIn === "false") {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      // setClient(client)
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <ThemeProvider theme={styles}>
      <AuthProvider isLoggedIn={isLoggedIn}>
        <NavigationContainer>
          <NavigationController />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  ) : (
    <AppLoading />
  );
}
