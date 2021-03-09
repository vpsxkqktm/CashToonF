/* top tabs로 바꿀 수도 있음 */

import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Shopping from "../screens/Shopping";

const Tab = createBottomTabNavigator();

// -outline 지우면 꽉찬 아이콘으로 변함
export default ({ navigation, route }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName = Platform.OS === "ios" ? "ios-" : "md-";
        if (route.name === "Home") {
          iconName += "home-outline";
        } else if (route.name === "Profile") {
          iconName += "person-outline";
        } else if (route.name === "Shopping") {
          iconName += "cart-outline";
        } else if (route.name === "Settings") {
          iconName += "settings-outline";
        }
        return (
          <Ionicons
            name={iconName}
            size={25}
            color={focused ? "grey" : "black"}
          />
        );
      },
    })}
    tabBarOptions={{ showLabel: false }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Shopping" component={Shopping} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
