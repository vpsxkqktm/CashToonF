import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from "./TabNavigation";

const MainNavigation = createStackNavigator();

export default () => (
  // 스택 네비게이션 + 탭 네비게이션 결합
  <MainNavigation.Navigator>
    <MainNavigation.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{ headerShown: false }}
    />
  </MainNavigation.Navigator>
);
