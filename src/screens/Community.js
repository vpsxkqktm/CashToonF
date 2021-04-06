import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { gql, useQuery } from "@apollo/client";

const POST_BOARD_QUERY = gql`
  query seePostboard($offset: Int!) {
    seePostboard(offset: $offset) {
      id
      title
      createdAt
      author {
        id
        username
      }
    }
  }
`;

export default function Community({ navigation }) {
  const { data, loading, error } = useQuery(POST_BOARD_QUERY, {
    variables: {
      offset: 0,
    },
  });
  const renderPost = ({ item: post }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text>{post.title}</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data?.seePostboard}
        keyExtractor={(post) => post.id}
        renderItem={renderPost}
      />
    </View>
  );
}
