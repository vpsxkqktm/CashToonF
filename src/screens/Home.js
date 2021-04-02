import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Reward")}>
        <Text>Reward</Text>
      </TouchableOpacity>
    </View>
  );
}
