import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

const RewardScreen = ({ navigation }) => {
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
      <Text>리워드페이지 변하는지 확인</Text>
    </View>
  );
};

export default RewardScreen;
