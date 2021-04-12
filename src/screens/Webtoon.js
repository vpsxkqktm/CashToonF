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
import { gql, useQuery } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import WebtoonList from "../components/webtoon/WebtoonList";
import ScreenLayout from "../shared/ScreenLayout";

const WebtoonContainer = styled.SafeAreaView`
  flex: 1;
`;
const WebtoonView = styled.ScrollView`
  background-color: orange;
`;

const WebtoonListView = styled.View`
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

// TODO: 썸네일 불러오기
const WEBTOON_QUERY = gql`
  query seeWebtoonList {
    seeWebtoonList {
      id
      title
    }
  }
`;

// TODO: FlatList로 웹툰 리스트 보여주기
export default function Webtoon({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(true);
  const [checked, setChecked] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const { data, loading } = useQuery(WEBTOON_QUERY);
  console.log(data);

  const renderWebtoonList = ({ item: webtoon }) => {
    return <WebtoonList {...webtoon} />;
  };

  return (
    // 검색창은 개선해서 옮겨두겠습니다.
    // 아직 검색 관련 백엔드 처리가 하나도 없어서 일단 빼둘게요
    // 이전 코드 복붙은 해둠
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
      <ScreenLayout loading={loading}>
        <FlatList
          data={data?.seeWebtoonList}
          keyExtractor={(webtoon) => "" + webtoon.id}
          renderItem={renderWebtoonList}
          style={{ width: "100%" }}
        />
      </ScreenLayout>
      <View>
        <Text>1번 그림을 누르면 짧은 Webtoon 상세보기 페이지</Text>
        <Text>2번 그림을 누르면 아주 긴 장편 Webtoon 테스트 페이지</Text>
        <Text>모든 웹툰 이미지는 서버+DB에서 관리하기 때문에</Text>
        <Text>이미지가 있는 제 개발용 서버에서만 작동함</Text>
      </View>
    </WebtoonContainer>
  );
}
