import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";

import RewardScreen from "../screens/Reword";
import WebToonScreen from "../screens/Webtoon";
import MinigameScreen from "../screens/Minigame";
import LottoScreen from "../screens/Lotto";
import FortuneScreen from "../screens/FortuneCookie";
import CommunityScreen from "../screens/Community";
import QuizScreen from "../screens/Quiz";
import InfluScreen from "../screens/Influe";
import SearchScreen from "../screens/Search";
import Icon from "react-native-vector-icons/FontAwesome5";

const MainNavigation = createStackNavigator();
export const navigationRef = React.createRef();

export const navigate = (name) => {
  navigationRef.current?.navigate(name);
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
      options={{
        title: "웹툰",
        headerTitleAlign: "center",
      }}
    />
    <MainNavigation.Screen
      name="Lotto"
      component={LottoScreen}
      options={{ title: "복권", headerTitleAlign: "center" }}
    />
    <MainNavigation.Screen
      name="Fortune"
      component={FortuneScreen}
      options={{ title: "포츈쿠키", headerTitleAlign: "center" }}
    />
    <MainNavigation.Screen
      name="Quiz"
      component={QuizScreen}
      options={{ title: "가로세로퀴즈", headerTitleAlign: "center" }}
    />
    <MainNavigation.Screen
      name="Influ"
      component={InfluScreen}
      options={{ title: "인플루언서관", headerTitleAlign: "center" }}
    />
    <MainNavigation.Screen
      name="Community"
      component={CommunityScreen}
      options={{ title: "커뮤니티", headerTitleAlign: "center" }}
    />
    <MainNavigation.Screen
      name="Minigame"
      component={MinigameScreen}
      options={{ title: "심리테스트", headerTitleAlign: "center" }}
    />
    <MainNavigation.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: "검색창",
        headerTitleAlign: "center",
        headerShown: false,
      }}
    />
  </MainNavigation.Navigator>
);
