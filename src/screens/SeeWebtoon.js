import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import phoneEnv from "../shared/phoneEnv";
import ScreenLayout from "../shared/ScreenLayout";

const SEE_WEBTOON_QUERY = gql`
  query seeWebtoon($id: Int!) {
    seeWebtoon(id: $id) {
      files
    }
  }
`;

export default function SeeWebtoon({ route }) {
  const { width, height } = useWindowDimensions();

  let setImageHeight = [];
  //   for (var key in uri) {
  //     Image.getSize(data?.seeWebtoon.files[key], (width, height) => {
  //       setImageHeight.push(height);
  //     });
  //   }
  //   console.log(setImageHeight);

  const { data, loading } = useQuery(SEE_WEBTOON_QUERY, {
    variables: {
      id: route?.params?.webtoonId,
    },
  });

  const uri = data?.seeWebtoon?.files;

  return (
    <ScreenLayout loading={loading}>
      <ScrollView style={{ flex: 1 }}>
        {uri ? (
          uri.map((item, index) => (
            <Image
              source={{ uri: item }}
              style={{ width, height }}
              resizeMode="contain"
              key={index}
            />
          ))
        ) : (
          <ActivityIndicator />
        )}
        {/* {console.log(uri)} */}
      </ScrollView>
    </ScreenLayout>
  );
}
