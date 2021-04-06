import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Canvas, { Image } from "react-native-canvas";
import ScratchImageView from "react-native-scratch-view";

const LottoContainer = styled.SafeAreaView`
  flex: 1;
`;

const BannverContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

const LottoView = styled.View`
  flex: 5;
  background-color: yellow;
`;

const LottoText = styled.Text``;

const LottoTitle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: aqua;
`;

const LottoContents = styled.View`
  flex: 7;
  background-color: olive;
`;

const LottoButtonView = styled.View`
  flex: 1;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;

const LottoTryButton = styled.TouchableOpacity`
  border-radius: 6;
  background-color: aqua;
  width: 50%;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

const LottoScreen = () => {
  const canvasRef = useRef();

  return (
    <LottoContainer>
      {/* 상단 배너광고 */}
      <BannverContainer>
        <Text>배너광고</Text>
      </BannverContainer>
      {/* 복권 뷰 */}
      <LottoView>
        <LottoTitle>
          <LottoText>꽝 없는 복권</LottoText>
        </LottoTitle>
        <LottoContents>
          <Canvas ref={canvasRef}></Canvas>
        </LottoContents>
        <LottoButtonView>
          <LottoTryButton>
            <Text>이거슨 버튼이다</Text>
          </LottoTryButton>
        </LottoButtonView>
      </LottoView>

      {/* 하단 배너광고 */}
      <BannverContainer>
        <Text>배너광고</Text>
      </BannverContainer>
    </LottoContainer>
  );
};
export default LottoScreen;
