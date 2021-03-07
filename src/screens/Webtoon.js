import { Assets } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import constants from "../../constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome5";
import CheckBox from "@react-native-community/checkbox";
import { Value } from "react-native-reanimated";

const Tab = createMaterialTopTabNavigator();
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
  width: 50%
  background-color: grey;
  
`;

const CloseModal = styled.TouchableOpacity`
  justify-content: center;
`;
const ActionToon = () => {
  return (
    <WebtoonView>
      <View style={{ flexDirection: "row", flexShrink: 1, flexWrap: "wrap" }}>
        <WebtoonMainPic source={require("../../assets/iu1.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu1.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu1.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu2.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu2.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu2.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu3.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu3.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu3.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu4.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu4.jpg")} />
        <WebtoonMainPic source={require("../../assets/iu4.jpg")} />
      </View>
    </WebtoonView>
  );
};
const ComedyToon = () => {
  return (
    <WebtoonView>
      <Text>asd</Text>
    </WebtoonView>
  );
};
const DeductionToon = () => {
  return (
    <WebtoonView>
      <Text>asd</Text>
    </WebtoonView>
  );
};
const HorrorToon = () => {
  return (
    <WebtoonView>
      <Text>asd</Text>
    </WebtoonView>
  );
};
const NormalToon = () => {
  return (
    <WebtoonView>
      <Text>asd</Text>
    </WebtoonView>
  );
};
const RomanceToon = () => {
  return (
    <WebtoonView>
      <Text>asd</Text>
    </WebtoonView>
  );
};
const BLTOON = () => {
  return (
    <WebtoonView>
      <Text>asd</Text>
    </WebtoonView>
  );
};
const GLTOON = () => {
  return (
    <WebtoonView>
      <Text>asd</Text>
    </WebtoonView>
  );
};
const DramaToon = () => {
  return (
    <WebtoonView>
      <Text>asd</Text>
    </WebtoonView>
  );
};

const WebToonScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Search")}
        >
          <Icon name="search" size={18}></Icon>
        </TouchableOpacity>
      ),
    });
  });

  const [isModalVisible, setModalVisible] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <WebtoonContainer>
      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          labelStyle: { fontSize: 12 },
          tabStyle: { width: 100 },
          style: { backgroundColor: "powderblue" },
        }}
      >
        <Tab.Screen name="액션" component={ActionToon} />
        <Tab.Screen name="로맨스" component={RomanceToon} />
        <Tab.Screen name="일상" component={NormalToon} />
        <Tab.Screen name="코미디" component={ComedyToon} />
        <Tab.Screen name="공포" component={HorrorToon} />
        <Tab.Screen name="드라마" component={DramaToon} />
        <Tab.Screen name="BL" component={BLTOON} />
        <Tab.Screen name="GL" component={GLTOON} />
        <Tab.Screen name="추리" component={DeductionToon} />
      </Tab.Navigator>

      <Modal isVisible={isModalVisible} coverScreen={false}>
        <View style={{ backgroundColor: "black" }}>
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
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
            </CheckBoxView>
            <ToggleView>
              <CloseModal onPress={toggleModal}>
                <Text style={{ marginRight: 20, fontSize: 15 }}>닫기</Text>
              </CloseModal>
            </ToggleView>
          </CheckContainer>
        </View>
      </Modal>
    </WebtoonContainer>
  );
};

export default WebToonScreen;
