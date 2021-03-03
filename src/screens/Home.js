import React from "react";
import { StyleSheet, PixelRatio, Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";

import constants from "../../constants";

import Reword from "../screens/Reword";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const View = styled.ScrollView``;

const UserInfo = styled.View`
  width: 100%;
  height: ${constants.height / 8};
  background-color: yellow;
  align-items: center;
  justify-content: center;
`;

const PointBalance = styled.Text``;

const UsePointButton = styled.TouchableOpacity`
  width: 100;
  height: 30;
  background-color: red;
`;

const UsePointText = styled.Text`
  text-align: center;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${constants.height / 4};
`;

const SwiperView = styled.View`
  flex: 1;
  justify-content: center;
  background-color: green;
`;

const SwiperText = styled.Text`
  color: white;
  text-align: center;
`;

const MenuView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const MenuButton = styled.TouchableOpacity`
  width: 50%;
  height: 120px;
  background-color: gray;
`;

const MenuText = styled.Text`
  text-align: center;
`;

const Home = ({ navigation, point }) => {
  return (
    <Container>
      <View>
        <UserInfo>
          <PointBalance>{`사용 가능한 금액 :${point}`}</PointBalance>
          <UsePointButton>
            <UsePointText>포인트사용</UsePointText>
          </UsePointButton>
        </UserInfo>
        <SliderContainer>
          <Swiper
            loop
            timeout={20} // 루프 속도 (s)
            controlsProps={{ prevPos: false, nextPos: false }}
          >
            <SwiperView>
              <SwiperText>Scrren1</SwiperText>
            </SwiperView>
            <SwiperView>
              <SwiperText>Scrren2</SwiperText>
            </SwiperView>
          </Swiper>
        </SliderContainer>
        <MenuView>
          <MenuButton onPress={() => navigation.navigate("Reward")}>
            <MenuText>리워드페이지</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Webtoon")}>
            <MenuText>웹툰</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Minigame")}>
            <MenuText>심리테스트</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Lotto")}>
            <MenuText>복권</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Fortune")}>
            <MenuText>포츈쿠기</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Quiz")}>
            <MenuText>가로세로</MenuText>
          </MenuButton>
        </MenuView>
      </View>
    </Container>
  );
};

const stylesContainer = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: "100%",
  },
  view: {
    flexDirection: "column-reverse",
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 30,
    //alignItems: 'center',
    resizeMode: "contain",
  },
  BannerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 150,
    backgroundColor: "green",
  },
  HorizontalSlider: { alignSelf: "center", height: "50%", width: "100%" },
  paginationWrapper: {
    position: "absolute",
    //bottom: 430,
    top: 5,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "black",
    marginLeft: 10,
  },
  Category1: {
    height: 150,
    width: "50%",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  Category2: {
    height: 150,
    width: "50%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  UserInfo: { width: "100%", height: 150, backgroundColor: "yellow" },
  Products1: {
    width: "100%",
    height: 150,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  Products2: {
    width: "100%",
    height: 150,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
