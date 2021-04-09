import React, { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import styled from "styled-components";
import Modal from "react-native-modal";
import phoneEnv from "../shared/phoneEnv";
import Swiper from "react-native-web-swiper";
import { Checkbox } from "react-native-paper";

const WebtoonContainer = styled.SafeAreaView`
  flex: 1;
`;
const WebtoonView = styled.ScrollView`
  background-color: orange;
`;

const WebtoonList = styled.View`
  flex-direction: row;
`;

const WebtoonSwiperView = styled.View`
  flex: 1;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

const WebtoonSwiperImage = styled.Image`
  flex: 1;
  width: ${phoneEnv.width};
  height: ${phoneEnv.height};
`;

const WebtoonSilderContainer = styled.View`
  width: 100%;
  height: ${phoneEnv.height / 2};
`;

const CheckContainer = styled.View`
  flex-direction: row;
`;

const CheckBoxView = styled.View`
  width: 50%;
  flex-direction: row;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.View`
  background-color: black;
`;

const ToggleView = styled.View`
  flex-direction: row-reverse;
  width: 50%;
  background-color: gray;
`;

const CloseModal = styled.TouchableOpacity`
  justify-content: center;
`;

const CloseText = styled.Text`
  margin-right: 20px;
  font-size: 15px;
`;

export default function Webtoon({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(true);
  const [checked, setChecked] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    // 검색창은 개선해서 다시 제작하겠습니다.
    <WebtoonContainer>
      <Modal isVisible={isModalVisible} coverScreen={false}>
        <ModalView>
          <WebtoonSilderContainer>
            <Swiper controlsProps={{ prevPos: false, nextPos: false }}>
              <WebtoonSwiperView>
                <WebtoonSwiperImage
                  source={require("../../assets/testimage1.png")}
                />
              </WebtoonSwiperView>
              <WebtoonSwiperView>
                <WebtoonSwiperImage
                  source={require("../../assets/testimage2.png")}
                />
              </WebtoonSwiperView>
              <WebtoonSwiperView>
                <WebtoonSwiperImage
                  source={require("../../assets/testimage3.png")}
                />
              </WebtoonSwiperView>
            </Swiper>
          </WebtoonSilderContainer>
          <CheckContainer>
            <CheckBoxView>
              <Text>오늘 하루 보지 않기</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => setChecked(!checked)}
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
      <WebtoonView>
        <WebtoonList>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() =>
              navigation.navigate("SeeWebtoon", {
                webtoonId: 8,
              })
            }
          >
            <Image
              resizeMode="center"
              source={require("../../assets/testimage1.png")}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Image
              resizeMode="center"
              source={require("../../assets/testimage1.png")}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Image
              resizeMode="center"
              source={require("../../assets/testimage1.png")}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
        </WebtoonList>
        <Text>1번 그림을 누르면 Webtoon 상세보기 페이지</Text>
      </WebtoonView>
    </WebtoonContainer>
  );
}
