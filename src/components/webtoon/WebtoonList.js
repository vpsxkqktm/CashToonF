import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

const Conatiner = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  flex-direction: row;
`;

// 버튼이라고 하기 좀 그런데 이름 뭐로 하지...
const WebtoonButton = styled.TouchableOpacity``;

export default function WebtoonList({ id, title }) {
  const navigation = useNavigation();
  return (
    <Conatiner>
      <Wrapper>
        <WebtoonButton
          onPress={() =>
            navigation.navigate("SeeWebtoon", {
              webtoonId: id,
            })
          }
        >
          <Image
            source={require("../../../assets/testimage1.png")}
            resizeMode="contain"
            style={{ width: 100, height: 100 }}
          />
        </WebtoonButton>
      </Wrapper>
      <Text>{title}</Text>
    </Conatiner>
  );
}
