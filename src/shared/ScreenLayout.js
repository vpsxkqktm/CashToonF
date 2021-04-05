import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function ScrrenLayout({ loading, children }) {
  return <View>{loading ? <ActivityIndicator /> : children}</View>;
}
