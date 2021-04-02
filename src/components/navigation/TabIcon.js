import React from "react";
import { Ionicons } from "@expo/vector-icons";

// 원한다면 Tab bar icon을 바꿀 때 아래 컴포넌트를 불러와서 사용하세요.

export default function TabIcon({ iconName, color }) {
  return (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      color={color}
      size={22}
    />
  );
}
