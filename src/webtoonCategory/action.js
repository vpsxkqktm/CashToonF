import React from "react";
import { View, Image } from "react-native";

const ActionToon = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", flexShrink: 1, flexWrap: "wrap" }}>
        <Image source={require("../../assets/iu1.jpg")} />
        <Image source={require("../../assets/iu1.jpg")} />
        <Image source={require("../../assets/iu1.jpg")} />
        <Image source={require("../../assets/iu2.jpg")} />
        <Image source={require("../../assets/iu2.jpg")} />
        <Image source={require("../../assets/iu2.jpg")} />
        <Image source={require("../../assets/iu3.jpg")} />
        <Image source={require("../../assets/iu3.jpg")} />
        <Image source={require("../../assets/iu3.jpg")} />
        <Image source={require("../../assets/iu4.jpg")} />
        <Image source={require("../../assets/iu4.jpg")} />
        <Image source={require("../../assets/iu4.jpg")} />
      </View>
    </View>
  );
};

export default ActionToon;
