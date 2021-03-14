import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

const CommunityScreen = () => {
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
      <Text>커뮤니티</Text>
    </View>
  );
};

export default CommunityScreen;
