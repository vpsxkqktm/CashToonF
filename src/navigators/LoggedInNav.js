import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Shopping from "../screens/Shopping";
import Settings from "../screens/Settings";
import SharedStackNav from "./SharedStackNav";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        // activeTintColor: "blue",
        showLabel: false,
        style: {
          borderTopColor: "rgba(255,255,255,0.3)",
          backgroundColor: "white",
        },
        tabStyle: {},
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Home" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Profile" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Shopping"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Shopping" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Settings" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
