import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

const InfluScreen = () => {
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
      <Text>인플루언서관</Text>
    </View>
  );
};
export default InfluScreen;
