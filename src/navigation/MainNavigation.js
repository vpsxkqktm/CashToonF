import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from "./TabNavigation";

import RewardScreen from "../screens/Reword";

const MainNavigation = createStackNavigator();

const WebToonScreen = () => {
  return (
    <View>
      <Text>웹툰</Text>
    </View>
  );
};

const MinigameScreen = () => {
  return (
    <View>
      <Text>심리테스트</Text>
    </View>
  );
};
const LottoScreen = () => {
  return (
    <View>
      <Text>하위</Text>
    </View>
  );
};
const FortuneScreen = () => {
  return (
    <View>
      <Text>포츈쿠키</Text>
    </View>
  );
};

const QuizScreen = () => {
  return (
    <View>
      <Text>가로세로</Text>
    </View>
  );
};
const CommunityScreen = () => {
  return (
    <View>
      <Text>커뮤니티</Text>
    </View>
  );
};
const InfluScreen = () => {
  return (
    <View>
      <Text>인플루언서관</Text>
    </View>
  );
};

export default () => (
  // 스택 네비게이션 + 탭 네비게이션 결합
  <MainNavigation.Navigator>
    <MainNavigation.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{ headerShown: false }}
    />
    <MainNavigation.Screen
      name="Reward"
      component={RewardScreen}
      options={{ title: "리워드페이지" }}
    />
    <MainNavigation.Screen
      name="Webtoon"
      component={WebToonScreen}
      options={{ title: "웹툰" }}
    />
    <MainNavigation.Screen
      name="Lotto"
      component={LottoScreen}
      options={{ title: "복권" }}
    />
    <MainNavigation.Screen
      name="Fortune"
      component={FortuneScreen}
      options={{ title: "포츈쿠키" }}
    />
    <MainNavigation.Screen
      name="Quiz"
      component={QuizScreen}
      options={{ title: "가로세로퀴즈" }}
    />
    <MainNavigation.Screen
      name="Influ"
      component={InfluScreen}
      options={{ title: "인플루언서관" }}
    />
    <MainNavigation.Screen
      name="Community"
      component={CommunityScreen}
      options={{ title: "커뮤니티" }}
    />
    <MainNavigation.Screen
      name="Minigame"
      component={MinigameScreen}
      options={{ title: "심리테스트" }}
    />
  </MainNavigation.Navigator>
);
