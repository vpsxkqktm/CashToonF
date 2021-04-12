import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

export default function WebtoonView({ webtoon }) {
  // 이거 왜 props 안 넘어와짐? 개어이없네 ㅡㅡ
  console.log(webtoon);
  return (
    <Container>
      <Text>asdf</Text>
    </Container>
  );
}
