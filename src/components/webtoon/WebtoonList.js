import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

const Conatiner = styled.View`
  background-color: green;
`;

const WebtoonWrapper = styled.View`
  background-color: red;
  margin: 4px;
  padding: 5px;
`;

const WebtoonThumbnail = styled.TouchableOpacity`
  background-color: blue;
`;

const WebtoonTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export default function WebtoonList({ id, title }) {
  const navigation = useNavigation();
  return (
    <Conatiner>
      <WebtoonWrapper>
        <WebtoonThumbnail
          onPress={() =>
            navigation.navigate("SeeWebtoon", {
              webtoonId: id,
            })
          }
        >
          <Image
            source={require("../../../assets/testimage1.png")}
            resizeMode="contain"
            style={{ width: 120, height: 100 }}
          />
          <WebtoonTitle>{title}</WebtoonTitle>
        </WebtoonThumbnail>
      </WebtoonWrapper>
    </Conatiner>
  );
}
