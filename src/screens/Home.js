import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  PixelRatio,
  Dimensions,
  Image,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import constants from "../../constants";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={stylesContainer.UserInfo}>
        <View>
          <Text>유저님 gd</Text>
        </View>
        <View>
          <Text>사용가능한 포인트:</Text>
        </View>
        <View>
          <Text>50000000원</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 13,
          }}
        >
          <Text>포인트 사용</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ height: 300 }}
        horizontal={true}
        scrollEventThrottle={30}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ width, height }}>
          <Image
            style={stylesContainer.imageStyle}
            source={require("../../assets/cat1.jpg")}
          />
          <Text>Screen1</Text>
        </View>
        <View style={{ width, height }}>
          <Image
            style={stylesContainer.imageStyle}
            source={require("../../assets/cat2.jpg")}
          />
          <Text>Screen2</Text>
        </View>
        <View style={{ width, height }}>
          <Image
            style={stylesContainer.imageStyle}
            source={require("../../assets/cat3.jpg")}
          />
          <Text>Screen3</Text>
        </View>
        <View style={{ width, height }}>
          <Image
            style={stylesContainer.imageStyle}
            source={require("../../assets/cat4.jpg")}
          />
          <Text>Screen4</Text>
        </View>
        <View style={{ width, height }}>
          <Image
            style={stylesContainer.imageStyle}
            source={require("../../assets/cat5.jpg")}
          />
          <Text>Screen5</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={stylesContainer.BannerButton}>
        <Text>배너 광고</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={stylesContainer.Category1}>
          <Text>리워드 페이지</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesContainer.Category2}>
          <Text>웹툰</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={stylesContainer.Category2}>
          <Text>심리테스트</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesContainer.Category1}>
          <Text>복권</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const stylesContainer = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: "100%",
  },
  view: {
    flexDirection: "column-reverse",
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 30,
    //alignItems: 'center',
    resizeMode: "contain",
  },
  BannerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 150,
    backgroundColor: "green",
  },
  HorizontalSlider: { alignSelf: "center", height: "50%", width: "100%" },
  paginationWrapper: {
    position: "absolute",
    //bottom: 430,
    top: 5,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "black",
    marginLeft: 10,
  },
  Category1: {
    height: 150,
    width: "50%",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  Category2: {
    height: 150,
    width: "50%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  UserInfo: { width: "100%", height: 150, backgroundColor: "yellow" },
  Products1: {
    width: "100%",
    height: 150,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  Products2: {
    width: "100%",
    height: 150,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
