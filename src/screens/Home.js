import React, { useEffect } from "react";
import { View, Text, Alert, BackHandler, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";
import Swiper from "react-native-web-swiper";
import styled from "styled-components";

import { userLogout } from "../../apollo";
import phoneEnv from "../shared/phoneEnv";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const HomeView = styled.ScrollView``;

const UserInfo = styled.View`
  width: 100%;
  height: ${phoneEnv.height / 4};
  background-color: yellow;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${phoneEnv.height / 7};
`;

const SwiperView = styled.View`
  flex: 1;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

const MenuView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuButton = styled.TouchableOpacity`
  background-color: red;
  width: 50%;
  height: 100px;
  justify-content: center;
`;

const MenuText = styled.Text`
  text-align: center;
`;

const backAction = () => {
  Alert.alert("종료하기", "정말 종료하시겠습니까?", [
    { text: "네", onPress: () => BackHandler.exitApp() },
    { text: "아니요", onPress: () => null },
  ]);
  return true;
};

export default function Home({ navigation }) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <Container>
      <TouchableOpacity onPress={userLogout} style={{ marginBottom: 50 }}>
        <Text>임시 LOG OUT</Text>
      </TouchableOpacity>
      <UserInfo>
        <Text>포인트</Text>
      </UserInfo>
      <HomeView>
        <SliderContainer>
          <Swiper
            controlsProps={{ prevPos: false, nextPos: false }}
            loop
            timeout={10}
          >
            <SwiperView>
              <Image
                source={require("../../assets/swiperimage1.png")}
                resizeMode="cover"
                style={{ flex: 1, width: "100%", height: "100%" }}
              />
            </SwiperView>
            <SwiperView>
              <Image
                source={require("../../assets/swiperimage2.png")}
                resizeMode="cover"
                style={{ flex: 1, width: "100%", height: "100%" }}
              />
            </SwiperView>
            <SwiperView>
              <Image
                source={require("../../assets/swiperimage3.png")}
                resizeMode="cover"
                style={{ flex: 1, width: "100%", height: "100%" }}
              />
            </SwiperView>
          </Swiper>
        </SliderContainer>
        <MenuView>
          <MenuButton>
            <MenuText>리워드</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Webtoon")}>
            <MenuText>웹툰</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Community")}>
            <MenuText>커뮤니티</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("FortuneCookie")}>
            <MenuText>포츈쿠키</MenuText>
          </MenuButton>
          <MenuButton>
            <MenuText>복권</MenuText>
          </MenuButton>
        </MenuView>
      </HomeView>
    </Container>
  );
}
