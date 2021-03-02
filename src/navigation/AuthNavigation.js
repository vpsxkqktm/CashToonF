import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

const AuthNavigation = createStackNavigator();

export default () => (
  <AuthNavigation.Navigator mode="card">
    <AuthNavigation.Screen
      name="Signup"
      component={Signup}
    ></AuthNavigation.Screen>
    <AuthNavigation.Screen
      name="Confirm"
      component={Confirm}
    ></AuthNavigation.Screen>
    <AuthNavigation.Screen
      name="Login"
      component={Login}
    ></AuthNavigation.Screen>
    <AuthNavigation.Screen
      name="AuthHome"
      component={AuthHome}
    ></AuthNavigation.Screen>
  </AuthNavigation.Navigator>
);
