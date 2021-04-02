import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { AppearanceProvider } from "react-native-appearance";

import LoggedOutNav from "./src/navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { Appearance } from "react-native";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar } from "./apollo";
import LoggedInNav from "./src/navigators/LoggedInNav";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const preload = () => {
    const fontToLoad = [Ionicons.font];
    const fontPromises = fontToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/Logo.png")];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagePromises]);
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
  // dark / light mode (get user phone appearance setting)
  const subscription = Appearance.addChangeListener(({ colorScheme }) => {
    console.log(colorScheme);
  });
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}
