import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function ScreenLayout({ loading, children }) {
  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      {loading ? <ActivityIndicator color="black" /> : children}
    </View>
  );
}
