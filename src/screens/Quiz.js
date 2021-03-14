import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

const QuizScreen = ({ navigation }) => {
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
      <Text>가로세로</Text>
    </View>
  );
};

export default QuizScreen;
