import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Community from "../screens/Community";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Reward from "../screens/Reward";
import SeePost from "../screens/SeePost";
import SeeWebtoon from "../screens/SeeWebtoon";
import Settings from "../screens/Settings";
import Shopping from "../screens/Shopping";
import Webtoon from "../screens/Webtoon";
import FortuneCookie from "../screens/FortuneCookie";

const Stack = createStackNavigator();

// Stack Nav와 Tab Nav를 결합합니다
// 여기에 스크린 Stack을 쌓으세요

export default function SharedStackNav({ screenName }) {
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
      <Stack.Screen name="SeeWebtoon" component={SeeWebtoon} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="SeePost" component={SeePost} />
      <Stack.Screen name="FortuneCookie" component={FortuneCookie} />
    </Stack.Navigator>
  );
}
