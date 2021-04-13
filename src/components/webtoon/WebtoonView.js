import React, { useEffect, useState } from "react";
import { Image, Text, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import phoneEnv from "../../shared/phoneEnv";

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const WebtoonImage = styled.Image``;

export default function WebtoonView({ files, index }) {
  const [imageHeight, setImageHeight] = useState(500);
  return (
    <Container>
      <Wrapper>
        <WebtoonImage
          source={{ uri: files }}
          resizeMode="contain"
          style={{ width: phoneEnv.width, height: imageHeight }}
        />
      </Wrapper>
    </Container>
  );
}
