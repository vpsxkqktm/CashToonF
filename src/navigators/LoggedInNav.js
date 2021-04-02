import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
}
