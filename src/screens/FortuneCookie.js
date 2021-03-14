import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

const FortuneScreen = () => {
  useEffect(() => {
    const custumBackButton = () => {
      navigation.navigate("Home");
    };
    BackHandler.addEventListener("ReturnHome", custumBackButton);

    return () =>
      BackHandler.removeEventListener("ReturnHome", custumBackButton);
  });
  return (
    <View>
      <Text>포츈쿠키</Text>
    </View>
  );
};

export default FortuneScreen;
