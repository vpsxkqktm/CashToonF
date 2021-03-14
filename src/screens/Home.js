import React, { useEffect } from "react";
import { Alert, BackHandler } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";

import constants from "../../constants";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const View = styled.ScrollView``;

const UserInfo = styled.View`
  width: 100%;
  height: ${constants.height / 4};
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

const backAction = () => {
  Alert.alert("종료하기", "정말 종료하시겠습니까?", [
    { text: "네", onPress: () => BackHandler.exitApp() },
    {
      text: "아니요",
      onPress: () => null,
    },
  ]);
  return true;
};
const Home = ({ navigation, point }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  return (
    <Container>
      {/* 유저 인포는 상단에 고정되있는게 좋을거 같다고 생각함 */}
      <UserInfo>
        <PointBalance>{`사용 가능한 금액 :${point}`}</PointBalance>
        <UsePointButton>
          <UsePointText>포인트사용</UsePointText>
        </UsePointButton>
      </UserInfo>
      <View>
        <SliderContainer>
          <Swiper
            loop
            timeout={5} // 루프 속도 (s)
            controlsProps={{ prevPos: false, nextPos: false }}
          >
            <SwiperView>
              <SwiperText>screen1</SwiperText>
            </SwiperView>
            <SwiperView>
              <SwiperText>Scrren2</SwiperText>
            </SwiperView>
            <SwiperView>
              <SwiperText>Scrren3</SwiperText>
            </SwiperView>
            <SwiperView>
              <SwiperText>Scrren4</SwiperText>
            </SwiperView>
          </Swiper>
        </SliderContainer>
        <MenuView>
          <MenuButton
            onPress={() => {
              navigation.navigate("Reward");
            }}
          >
            <MenuText>리워드페이지</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Webtoon")}>
            <MenuText>웹툰</MenuText>
          </MenuButton>
          <MenuButton onPress={() => navigation.navigate("Minigame")}>
            <MenuText>심리테스트</MenuText>
          </MenuButton>

          <MenuButton onPress={() => navigation.navigate("Quiz")}>
            <MenuText>가로세로</MenuText>
          </MenuButton>

          <MenuButton onPress={() => navigation.navigate("Fortune")}>
            <MenuText>포츈쿠기</MenuText>
          </MenuButton>

          <MenuButton onPress={() => navigation.navigate("Lotto")}>
            <MenuText>복권</MenuText>
          </MenuButton>
        </MenuView>
      </View>
    </Container>
  );
};

export default Home;
