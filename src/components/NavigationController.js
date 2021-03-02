import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsLoggedIn, useLogIn, useLogOut } from "../../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  // const isLoggedIn = true; // 강제로 로그인 상태로 전환
  const logIn = useLogIn();
  const logOut = useLogOut();

  return (
    <View style={{ flex: "1" }}>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};
