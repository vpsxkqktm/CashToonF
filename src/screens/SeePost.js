import React from "react";
import { useQuery, gql } from "@apollo/client";
import { View, Text, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ScreenLayout from "../shared/ScreenLayout";

import { POST_FRAGMENT, USER_FRAGMENT } from "../../fragment";

const POST_QUERY = gql`
  query seePost($id: Int!) {
    seePost(id: $id) {
      ...PostFragment
      contents
      author {
        ...UserFragment
      }
    }
  }
  ${POST_FRAGMENT}
  ${USER_FRAGMENT}
`;

export default function SeePost({ route }) {
  const { data, loading } = useQuery(POST_QUERY, {
    variables: {
      id: route?.params?.postId,
    },
  });
  console.log(route);
  console.log(data);
  return (
    <ScreenLayout loading={loading}>
      <ScrollView style={{ flex: 1 }}>
        <Text>{data?.seePost?.title}</Text>
      </ScrollView>
    </ScreenLayout>
  );
}
