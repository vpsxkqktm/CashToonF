import React, { useEffect, useState, Component } from "react";
import { View, Text, BackHandler, Animated } from "react-native";
import { Easing } from "react-native-reanimated";
import { ThemeConsumer } from "styled-components";
import styled from "styled-components/native";
import constants from "../../constants";
import { backAction } from "./Home";

const FortuneContainer = styled.SafeAreaView`
  flex: 1;
`;

const BannverContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

const FortuneView = styled.View`
  flex: 6;
  background-color: yellow;
`;
const CookiePress = styled.TouchableOpacity``;
const FortuneText = styled.Text``;

const FortuneTitle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: aqua;
`;

const FortuneContents = styled.View`
  flex: 6;
  background-color: olive;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Cookie = styled.View`
  align-items: center;
  justify-content: center;
  width: ${constants.width / 3};
  height: ${(constants.height * 0.55) / 2};
  background-color: aqua;
`;
const SentenceContainer = styled.View`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
const SentenceBackgournd = styled.View`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 2;
`;

const custumBackButton = () => {
  navigation.navigate("Home");
};

const FortuneScreen = ({ navigation }) => {
  const bouncingMargin = useState(new Animated.Value(0))[0];
  const stretchingHeight = useState(new Animated.Value(0))[0];
  const textOpacity = useState(new Animated.Value(0))[0];
  const [isOpen, setIsOpen] = useState(false);

  const changingHeight = Animated.sequence([
    Animated.timing(stretchingHeight, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }),
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }),
  ]);

  const marginAnimation = Animated.loop(
    Animated.timing(bouncingMargin, {
      toValue: 10,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    })
  );
  const textInterpolation = textOpacity.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1],
  });

  const strechHeight = stretchingHeight.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, constants.height * 0.2, constants.height * 0.5],
  });

  useEffect(() => {
    // marginAnimation.start();
    BackHandler.addEventListener("ReturnHome", custumBackButton);

    return () => {
      BackHandler.removeEventListener("ReturnHome", custumBackButton);
    };
  });

  const movingMargin = bouncingMargin.interpolate({
    inputRange: [0, 1, 1],
    outputRange: [0, 50, 0],
  });

  return (
    <FortuneContainer>
      {/* 상단 배너광고 */}
      <BannverContainer>
        <Text>배너광고</Text>
      </BannverContainer>
      {/* 포춘쿠키 뷰 */}
      <FortuneView>
        <FortuneContents>
          <Cookie>
            <CookiePress onPress={() => setIsOpen(true)}>
              <Animated.Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginBottom: movingMargin,
                }}
                source={require("../../assets/iu1.jpg")}
              />
            </CookiePress>
          </Cookie>

          <Cookie>
            <CookiePress onPress={() => setIsOpen(true)}>
              <Animated.Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginBottom: movingMargin,
                }}
                source={require("../../assets/iu2.jpg")}
              />
            </CookiePress>
          </Cookie>
          <Cookie>
            <CookiePress onPress={() => setIsOpen(true)}>
              <Animated.Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginBottom: movingMargin,
                }}
                source={require("../../assets/iu3.jpg")}
              />
            </CookiePress>
          </Cookie>
          <Cookie>
            <CookiePress onPress={() => setIsOpen(true)}>
              <Animated.Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginBottom: movingMargin,
                }}
                source={require("../../assets/iu4.jpg")}
              />
            </CookiePress>
          </Cookie>
          <Cookie>
            <CookiePress onPress={() => setIsOpen(true)}>
              <Animated.Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginBottom: movingMargin,
                }}
                source={require("../../assets/iu5.jpg")}
              />
            </CookiePress>
          </Cookie>
          <Cookie>
            <CookiePress onPress={() => setIsOpen(true)}>
              <Animated.Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginBottom: movingMargin,
                }}
                source={require("../../assets/iu6.jpg")}
              />
            </CookiePress>
          </Cookie>
        </FortuneContents>
      </FortuneView>

      {/* 하단 배너광고 */}
      <BannverContainer>
        <Text>배너광고</Text>
      </BannverContainer>

      {/* Modal */}
      {isOpen ? (
        <SentenceContainer>
          {marginAnimation.stop()}
          {changingHeight.start()}

          <SentenceBackgournd></SentenceBackgournd>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: "white",
              width: constants.width * 0.75,
              height: strechHeight,
              zIndex: 2,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Animated.Text style={{ zIndex: 2, opacity: textInterpolation }}>
              Hasdfsafsadfai asdfasfdasdf
            </Animated.Text>
          </Animated.View>
        </SentenceContainer>
      ) : (
        marginAnimation.start()
      )}
    </FortuneContainer>
  );
};

export default FortuneScreen;
