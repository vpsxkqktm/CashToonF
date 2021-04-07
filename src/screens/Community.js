import React, { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { gql, useQuery } from "@apollo/client";
import Post from "../components/community/Post";
import styled from "styled-components";
import ScreenLayout from "../shared/ScreenLayout";

const POST_BOARD_QUERY = gql`
  query seePostboard($offset: Int!) {
    seePostboard(offset: $offset) {
      id
      title
      author {
        id
        username
      }
      views
      likes
      createdAt
    }
  }
`;

const Header = styled.View`
  flex-direction: row;
  border: 1px solid;
  align-items: center;
`;
const Index = styled.Text`
  margin-right: 50px;
  text-align: center;
`;

export default function Community({ navigation }) {
  const { data, loading, error, refetch, fetchMore } = useQuery(
    POST_BOARD_QUERY,
    {
      variables: {
        offset: 0,
      },
    }
  );
  console.log(data);
  const renderPost = ({ item: post }) => {
    return <Post {...post} />;
  };
  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const [refreshing, setRefreshing] = useState(false);
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReached={() =>
          fetchMore({
            variables: {
              offset: data?.seePostboard?.length,
            },
          })
        }
        onEndReachedThreshold={0}
        refreshing={refreshing}
        onRefresh={refresh}
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%" }}
        data={data?.seePostboard}
        keyExtractor={(post) => "" + post.id}
        renderItem={renderPost}
      />
    </ScreenLayout>
  );
}
