import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Reward from "../screens/Reward";
import Settings from "../screens/Settings";
import Shopping from "../screens/Shopping";
import Webtoon from "../screens/Webtoon";

const Stack = createStackNavigator();

// Stack Nav와 Tab Nav를 결합합니다
// 여기에 스크린 Stack을 쌓으세요

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      {screenName === "Home" ? (
        <Stack.Screen name={"Home"} component={Home} />
      ) : null}
      {screenName === "Profile" ? (
        <Stack.Screen name={"Profile"} component={Profile} />
      ) : null}
      {screenName === "Shopping" ? (
        <Stack.Screen name={"Shopping"} component={Shopping} />
      ) : null}
      {screenName === "Settings" ? (
        <Stack.Screen name={"Settings"} component={Settings} />
      ) : null}
      <Stack.Screen name="Reward" component={Reward} />
      <Stack.Screen name="Webtoon" component={Webtoon} />
    </Stack.Navigator>
  );
}
