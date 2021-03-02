import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from "./TabNavigation";

const MainNavigation = createStackNavigator();

export default () => (
  // 스택 네비게이션에 탭 네비게이션을 자식으로
  <MainNavigation.Navigator>
    <MainNavigation.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{ headerShown: false }}
    />
  </MainNavigation.Navigator>
);
