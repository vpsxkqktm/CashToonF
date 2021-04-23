import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import styled from "styled-components";
import WebtoonView from "../components/webtoon/WebtoonView";
import ScreenLayout from "../shared/ScreenLayout";

const SEE_WEBTOON_QUERY = gql`
  query seeWebtoon($id: Int!) {
    seeWebtoon(id: $id) {
      id
      files
    }
  }
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const LIMIT = 3;

export default function SeeWebtoon({ route }) {
  const { data, loading } = useQuery(SEE_WEBTOON_QUERY, {
    variables: {
      id: route?.params?.webtoonId,
    },
  });

  const [offset, setOffset] = useState(0);
  const [prevData, setData] = useState([]);
  const [imageHeight, setImageHeight] = useState(700);

  // const getData = () => {
  //   if (loading) {
  //     <ActivityIndicator />;
  //   } else {
  //     setData(
  //       prevData.concat((data?.seeWebtoon?.files).slice(offset, offset + LIMIT))
  //     );
  //     setOffset(offset + LIMIT);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [loading]);

  // const fetchMore = () => {
  //   getData();
  // };

  const renderWebtoon = ({ item, index }) => {
    return (
      // <Wrapper>
      //   {!loading ? (
      //     <Image
      //       source={{ uri: item }}
      //       resizeMode="contain"
      //       style={{
      //         width: 300,
      //         height: imageHeight,
      //       }}
      //     />
      //   ) : (
      //     <ActivityIndicator />
      //   )}
      // </Wrapper>
      <WebtoonView files={item} index={index} />
    );
  };

  return (
    <FlatList
      data={data?.seeWebtoon.files}
      keyExtractor={(item, index) => item + index}
      renderItem={renderWebtoon}
      style={{
        width: "100%",
      }}
    />
  );
}
