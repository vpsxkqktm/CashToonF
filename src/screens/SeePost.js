import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  useWindowDimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ScreenLayout from "../shared/ScreenLayout";

import { POST_FRAGMENT, USER_FRAGMENT } from "../../fragment";
import styled from "styled-components";

const POST_QUERY = gql`
  query seePost($id: Int!) {
    seePost(id: $id) {
      ...PostFragment
      file
      contents
      author {
        ...UserFragment
      }
    }
  }
  ${POST_FRAGMENT}
  ${USER_FRAGMENT}
`;

const File = styled.Image``;

export default function SeePost({ route }) {
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height - 300);
  useEffect(() => {
    Image.getSize(data?.seePost?.file, (width, height) => {
      setImageHeight(height);
    });
  }, [data?.seePost?.file]);
  const { data, loading } = useQuery(POST_QUERY, {
    variables: {
      id: route?.params?.postId,
    },
  });
  console.log(data);
  return (
    <ScreenLayout loading={loading}>
      <ScrollView style={{ flex: 1 }}>
        <Text>{data?.seePost?.title}</Text>
        <Image
          source={{ uri: data?.seePost?.file }}
          resizeMode="cover"
          style={{ width, height: imageHeight, maxHeight: 300 }}
        />
      </ScrollView>
    </ScreenLayout>
  );
}
