import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { trimText, screenScale } from "../../utils";

import WetoonThumbnail from "../components/Webtoon/Thumbnail";

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`;

const WetoonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

// 버튼? 버튼이 아닌데 이름 뭐로 하지
const WetoonButton = styled.TouchableOpacity``;

const TestText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: normal;
`;

const ActionToon = () => {
  return (
    <ScrollViewContainer>
      <WetoonContainer>
        <WetoonButton>
          <Image source={require("../../assets/iu1.jpg")} />
          <TestText>
            제목테스트를위해아주긴제목을했더니플렉스그리드를망치는현상에대하여
          </TestText>
        </WetoonButton>
        <WetoonButton>
          <Image source={require("../../assets/iu1.jpg")} />
          <TestText>{trimText("아주긴제목이나왔을때해결법1번", 10)}</TestText>
        </WetoonButton>
        <Image source={require("../../assets/iu2.jpg")} />
        <Image source={require("../../assets/iu2.jpg")} />
        <Image source={require("../../assets/iu2.jpg")} />
        <Image source={require("../../assets/iu3.jpg")} />
        <Image source={require("../../assets/iu3.jpg")} />
        <Image source={require("../../assets/iu3.jpg")} />
        <Image source={require("../../assets/iu4.jpg")} />
        <Image source={require("../../assets/iu4.jpg")} />
        <Image source={require("../../assets/iu4.jpg")} />
      </WetoonContainer>
    </ScrollViewContainer>
  );
};

export default ActionToon;
