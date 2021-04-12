import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import WebtoonView from "../components/webtoon/WebtoonView";
import phoneEnv from "../shared/phoneEnv";
import ScreenLayout from "../shared/ScreenLayout";

const SEE_WEBTOON_QUERY = gql`
  query seeWebtoon($id: Int!) {
    seeWebtoon(id: $id) {
      id
      files
    }
  }
`;

// const getUri = (route) => {
//   const { data, loading } = useQuery(SEE_WEBTOON_QUERY, {
//     variables: {
//       id: route?.params?.webtoonId,
//     },
//   });
//   const uri = data?.seeWebtoon?.files;

//   let setImageHeight = [];
//   for (var key in uri) {
//     Image.getSize(uri[key], (width, height) => {
//       setImageHeight.push(height);
//       // console.log(setImageHeight);
//     });
//   }
//   console.log(setImageHeight);
// };

export default function SeeWebtoon({ route }) {
  // const { width, height } = useWindowDimensions();

  const { data, loading } = useQuery(SEE_WEBTOON_QUERY, {
    variables: {
      id: route?.params?.webtoonId,
      offset: 0,
    },
  });

  const renderWebtoon = ({ item: webtoon, index }) => {
    // console.log(webtoon);
    return (
      <Image
        source={{ uri: webtoon }}
        resizeMode="contain"
        style={{ width: "100%", height: 100 }}
        key={webtoon.id}
      />
      // <WebtoonView {...webtoon} />
    );
  };

  return (
    <FlatList
      data={data?.seeWebtoon.files}
      keyExtractor={(webtoon) => "" + webtoon.id}
      renderItem={renderWebtoon}
      style={{ width: "100%" }}
    />
  );
}
