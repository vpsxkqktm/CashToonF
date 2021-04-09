import React, { useEffect, useState } from "react";
import { Text, Animated, BackHandler } from "react-native";
import { Easing } from "react-native-reanimated";
import styled from "styled-components";
import phoneEnv from "../shared/phoneEnv";

const FortuneContainer = styled.SafeAreaView`
  flex: 1;
`;
const BannverContainer = styled.View``;

const FortuneView = styled.View`
  flex: 6;
  background-color: yellow;
`;

const CookiePress = styled.TouchableOpacity``;

const FortuneText = styled.Text``;

const FortuneTitle = styled.View`
  flex: 1;
  background-color: aqua;
  justify-content: center;
  align-items: center;
`;

const FortuneContents = styled.View`
  flex: 6;
  background-color: olive;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Cookie = styled.View`
  width: ${phoneEnv.width / 3};
  height: ${(phoneEnv.height * 0.55) / 2};
  background-color: aqua;
  justify-content: center;
  align-items: center;
`;

const SentenceContainer = styled.View`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const SentenceBackground = styled.View`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 2;
`;

const custumBackButton = () => {
  navigation.navigate("Home");
};

export default function FortuneCookie({ navigation }) {
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

  const stretchHeight = stretchingHeight.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, phoneEnv.height * 0.2, phoneEnv.height * 0.5],
  });

  useEffect(() => {
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
        <Text>배너 광고</Text>
      </BannverContainer>
      {/* 포츈쿠키 뷰 */}
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
                source={require("../../assets/testimage1.png")}
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
                source={require("../../assets/testimage2.png")}
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
                source={require("../../assets/testimage3.png")}
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
                source={require("../../assets/testimage1.png")}
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
                source={require("../../assets/testimage2.png")}
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
                source={require("../../assets/testimage3.png")}
              />
            </CookiePress>
          </Cookie>
        </FortuneContents>
      </FortuneView>
      {/* 하단 배너 광고 */}
      <BannverContainer>
        <Text>하단 배너 광고</Text>
      </BannverContainer>

      {/* Modal */}
      {isOpen ? (
        <SentenceContainer>
          {marginAnimation.stop()}
          {changingHeight.start()}

          <SentenceBackground></SentenceBackground>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: "white",
              width: phoneEnv.width * 0.75,
              height: stretchHeight,
              zIndex: 2,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Animated.Text style={{ zIndex: 2, opacity: textInterpolation }}>
              asdfsdfasefsdfsdff
            </Animated.Text>
          </Animated.View>
        </SentenceContainer>
      ) : (
        marginAnimation.start()
      )}
    </FortuneContainer>
  );
}
