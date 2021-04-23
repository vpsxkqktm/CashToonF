import React, { useEffect, useState } from "react";
import { Image, Text, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import phoneEnv from "../../shared/phoneEnv";

const Container = styled.View``;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const WebtoonImage = styled.Image``;

export default function WebtoonView({ files, index }) {
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(500);

  // if문으로 iamge height size에 따라 setimageheight가 다르게 적용되도록 조정하면 될 듯
  useEffect(() => {
    Image.getSize(files, (width, height) => {
      setImageHeight(height / 2);
    });
  }, [files]);

  return (
    <Container>
      <Wrapper>
        <WebtoonImage
          source={{ uri: files }}
          resizeMode="cover"
          style={{ width, height: imageHeight }}
        />
      </Wrapper>
    </Container>
  );
}
