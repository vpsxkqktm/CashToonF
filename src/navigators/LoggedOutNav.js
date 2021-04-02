import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FirstRun from "../screens/FirstRun";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const Stack = createStackNavigator();

// 사용자가 로그아웃 상태일 때 보여줄 곳을 다룹니다
export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: false,
        // headerBackTitleVisible: false,
        headerTransparent: true,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="FirstRun"
        component={FirstRun}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
