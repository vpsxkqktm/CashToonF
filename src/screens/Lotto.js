import React, { useEffect, useRef, useState } from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";
import Canvas from "react-native-canvas";
import ScratchImageView from "react-native-scratch-view";

const WebtoonContainer = styled.SafeAreaView`
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
const lotteryScratch = (() => {
  /**
   * _lotteryScratch : function
   * @param element : 해당 Element.
   * @param width : 그려질 cnavas의 가로사이즈.
   * @param height : 그려질 cnavas의 세로사이즈.
   * @param circleRadius : 원의 크기만큼 지워진다.
   * @param topImageSrc : 덮어서 마우스 드래그 시 지워질 이미지의 주소.
   */
  var _lotteryScratch = function (
    element,
    width,
    height,
    circleRadius,
    topImageSrc
  ) {
    this.lotteryScratchElement = element;
    this.lotteryScratchWidth = width;
    this.lotteryScratchHeight = height;
    this.circleRadius = circleRadius;
    this.lotteryScratchStatus = false;
    this.lotteryScratchTopImageSrc = topImageSrc;
    this.callback = null;
  };

  _lotteryScratch.prototype = {
    constructor: "lotteryScratch",

    /**
     * _cutCircle : function
     * canvas에 마우스 드래그 evnet발생시 실행되는 함수
     * circle형태로 이미지를 지워나간다.
     * @param context : cavans.getContext(2d); 값.
     * @param pointX : 현재 마우스의 X 좌표 값.
     * @param pointY : 현재 마우스의 Y 좌표 값.
     * @param radius : 원의 크기 값 (클수록 크게 지워짐).
     */
    _cutCircle: function (context, pointX, pointY, radius) {
      context.globalCompositeOperation = "destination-out";
      context.beginPath();
      context.arc(pointX, pointY, radius, 0, Math.PI * 2, true);
      context.fill();
    },

    /**
     * LotteryScratchReadyAlert : function
     * 바로 canvas를 드래그하는 경우를 막을 때 사용됨,
     * ex) 긁기 start버튼을 클릭하지 않고 바로 드래그 시 alert뿜음
     * @param message : alert창에 입력될 message
     */
    LotteryScratchReadyAlert: function (message) {
      if (!this.lotteryScratchStatus) alert(message);
    },

    /**
     * LotteryScratchClear : function
     * LotteryScratch의 리셋을 위한 함수
     * ex) 버튼을 누를때마다 해당 함수를 호출하면 현재 진행중인 canvas를 리셋 시킴
     */
    LotteryScratchClear: function () {
      this.lotteryScratchElement.parentNode.style = "none";
      this.lotteryScratchElement = this.lotteryScratchElement.parentNode;
      this.lotteryScratchElement.removeChild(
        this.lotteryScratchElement.childNodes[0]
      );
      this.LotteryScratchInit();
      return this;
    },

    /**
     * LotteryScratchInit : function
     * 기본 크기 및 canvas Element를 생성함 Canvas를 imgCnavas로 변경
     */
    LotteryScratchInit: function () {
      var canvas = this.lotteryScratchElement; // canvas init
      var imageContext = canvas.getContext("2d"); // canvas.getContext('2d') for image
      var topImage = new Image(); // new image
      this.lotteryScratchElement.style.width = this.lotteryScratchWidth + "px";
      this.lotteryScratchElement.style.height =
        this.lotteryScratchHeight + "px";
      this.lotteryScratchElement.onmouseover = function () {
        canvas.style.cursor = "crosshair";
      };
      canvas.width = this.lotteryScratchWidth; // canvas image width
      canvas.height = this.lotteryScratchHeight; // canvas image height
      this.lotteryScratchElement.appendChild(canvas); // canvas append
      this.lotteryScratchElement = canvas;
      topImage.onload = function () {
        imageContext.drawImage(topImage, 0, 0);
      };
      topImage.src = this.lotteryScratchTopImageSrc;

      return this;
    },

    /**
     * LotteryScratch : function
     * 해당 Element의 id가 존재할 때 넘어온 param값에 따라 cavnas image 만들기 및 값을 세팅한다.
     * 마우스 down, up, move 이벤트를 통해 드래그와 같은 동작 event가 발생하며
     * _cutCircle 함수를 호출하여 이미지를 삭제시킨다.
     * _checkSupportUserAgent() 함수를 통해 모바일 인지를 체크하며,
     * mobile에서는 mousedown, mousemove, mouseup event가
     * touchstart, touchmove, touchend event로 변경된다.
     * 또한 e.pageX||Y 를 통하여 얻어오던 좌표값은
     * e.changedTouches[0].clientX||Y를 통해 얻어온다.
     * 배열인 이유는 멀티터치를 지원하기위한것으로 확인된다.
     */
    LotteryScratch: function () {
      this.lotteryScratchElement.ontouchstart = function (e) {
        e.preventDefault();
        var canvas = this.lotteryScratchElement;
        var radius = this.circleRadius;
        var cutCircle = this._cutCircle;
        this.callback !== null ? this.callback() : null;
        this.callback = null;
        var deleteMoveAction = function (e) {
          var rect = canvas.getBoundingClientRect(),
            context = canvas.getContext("2d"),
            scrollPosition =
              window.scrollY || document.documentElement.scrollTop,
            pointX = Math.round(e.changedTouches[0].clientX - rect.left),
            pointY = Math.round(
              e.changedTouches[0].clientY - rect.top - scrollPosition
            );
          cutCircle(context, pointX, pointY, radius);
        };
        document.addEventListener("touchmove", deleteMoveAction);
        document.ontouchend = function () {
          document.removeEventListener("touchmove", deleteMoveAction);
        };
      }.bind(this);

      this.lotteryScratchStatus = true;

      return this;
    },

    /**
     * LotteryScratchCallback : function
     * callback으로 들어온 함수를 this.callback에 저장 한 뒤 LotteryScratch 함수에서 실행
     */
    LotteryScratchCallback: function (callbackFunction) {
      this.callback = callbackFunction;
      return this;
    },
  };
  return _lotteryScratch;
})();
const LottoScreen = () => {
  var scratchRef = useRef();
  const { onRevealed, setOnRevealed } = useState(false);
  const { onRevealPercent, setOnRevealPercent } = useState(0);
  var lotteryScratchGo1 = new lotteryScratch(
    scratchRef.current,
    492,
    259,
    20,
    "./../../assets/iu1.jpg"
  );
  alert(Canvas);
  // Element 492,
  // width 259,
  // height 20,
  // 복권 긁는 circle의 size './images/img_cont02.jpg',
  // 당첨내용을 덮을 (복권이 긁힐) 이미지 주소 );

  return (
    <WebtoonContainer>
      {/* 상단 배너광고 */}
      <BannverContainer>
        <Text>배너광고</Text>
      </BannverContainer>

      {/* 복권 뷰 */}
      <LottoView>
        <LottoTitle>
          <LottoText>꽝 없는 복권</LottoText>
        </LottoTitle>
        <LottoContents ref={scratchRef}>
          <Text>onRevealPercentChanged: {onRevealPercent} %</Text>
          <Text>onRevealed: {onRevealed}</Text>
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
    </WebtoonContainer>
  );
};
export default LottoScreen;
