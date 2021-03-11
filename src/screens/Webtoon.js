import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

import constants from "../../constants";
import WebtoonNavigator from "../navigation/WebtoonCategoryNavigation";

// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// 일단은 top 쓸지 bottom 쓸지 정하고 봐야할듯
// 기본 네비게이터가 디자인이 안 예뼈서 디자인 넣을거면 react-navigation 만든 사람도 다른 라이브러리 쓰라고 해둠 ㅡㅡ
// 아마 보셨을텐데 createMaterialBottomTabNavigator / createMaterialTopTabNavigator react-navigation 문서 파트 참고

const WebtoonContainer = styled.SafeAreaView`
  flex: 1;
`;
const WebtoonView = styled.ScrollView`
  background-color: orange;
`;

const WebtoonSwiperView = styled.View`
  flex: 1;
  justify-content: center;
  background-color: green;
  align-items: center;
`;

const WebtoonSliderContainer = styled.View`
  width: 100%;
  height: ${constants.height / 2};
`;

const WebtoonSwiperImage = styled.Image`
  flex: 1;
  width: ${constants.width};
  height: ${constants.height};
`;

const WebtoonMainPic = styled.Image`
  width: ${constants.width / 3};
  height: ${constants.height / 4};
`;

const HeaderView = styled.View`
  height: ${constants.height / 15};
  border-bottom-width: 1;
  opacity: 2;
`;

const CheckContainer = styled.View`
  flex-direction: row;
`;

const CheckBoxView = styled.View`
  width: 50%;
  flex-direction: row;
  background-color: grey;
  justify-content: center;
  align-items: center;
`;

const ToggleView = styled.View`
  flex-direction: row-reverse;
  width: 50%;
  background-color: grey;
`;

const CloseModal = styled.TouchableOpacity`
  justify-content: center;
`;

const CloseText = styled.Text`
  margin-right: 20;
  font-size: 15;
`;

const ModalView = styled.View`
  background-color: black;
`;

const SearchButton = styled.TouchableOpacity`
  margin-right: 20;
  align-items: center;
  justify-content: center;
`;

const WebToonScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SearchButton
          style={{
            marginRight: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Search")}
        >
          <Ionicons name="search-outline" size={18}></Ionicons>
        </SearchButton>
      ),
    });
  });

  const [isModalVisible, setModalVisible] = useState(false); // 잠깐 꺼둠
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <WebtoonContainer>
      <WebtoonNavigator />

      <Modal isVisible={isModalVisible} coverScreen={false}>
        <ModalView>
          <WebtoonSliderContainer>
            <Swiper
              loop
              timeout={5} // 루프 속도 (s)
              controlsProps={{ prevPos: false, nextPos: false }}
            >
              <WebtoonSwiperView>
                <WebtoonSwiperImage source={require("../../assets/iu1.jpg")} />
              </WebtoonSwiperView>
              <WebtoonSwiperView>
                <WebtoonSwiperImage source={require("../../assets/iu2.jpg")} />
              </WebtoonSwiperView>
              <WebtoonSwiperView>
                <WebtoonSwiperImage source={require("../../assets/iu3.jpg")} />
              </WebtoonSwiperView>
              <WebtoonSwiperView>
                <WebtoonSwiperImage source={require("../../assets/iu4.jpg")} />
              </WebtoonSwiperView>
              <WebtoonSwiperView>
                <WebtoonSwiperImage source={require("../../assets/iu5.jpg")} />
              </WebtoonSwiperView>
            </Swiper>
          </WebtoonSliderContainer>
          <CheckContainer>
            <CheckBoxView>
              <Text>서버 되면 마무리</Text>
              <CheckBox
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              />
            </CheckBoxView>
            <ToggleView>
              <CloseModal onPress={toggleModal}>
                <CloseText>닫기</CloseText>
              </CloseModal>
            </ToggleView>
          </CheckContainer>
        </ModalView>
      </Modal>
    </WebtoonContainer>
  );
};

export default WebToonScreen;
