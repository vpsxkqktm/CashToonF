import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

const MinigameScreen = ({ navigation }) => {
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
      <Text>심리테스트</Text>
    </View>
  );
};

export default MinigameScreen;
