import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
`;
const ListContainer = styled.View`
  flex-direction: row;
  border: 1px solid;
`;
const PostButton = styled.TouchableOpacity``;
const PostTitle = styled.Text`
  margin-right: 50px;
  font-size: 20px;
`;
const Username = styled.Text`
  margin-right: 50px;
  font-size: 20px;
`;
const ViewCounts = styled.Text`
  margin-right: 50px;
  font-size: 20px;
`;
const Likes = styled.Text`
  margin-right: 50px;
  font-size: 20px;
`;

export default function Post({ id, author, title, views, likes }) {
  const navigation = useNavigation();
  return (
    <Container>
      <ListContainer>
        <PostButton
          onPress={() =>
            navigation.navigate("SeePost", {
              postId: id,
            })
          }
        >
          <PostTitle>{title}</PostTitle>
        </PostButton>
        <Username>{author.username}</Username>
        <ViewCounts>{views}</ViewCounts>
        <Likes>{likes}</Likes>
      </ListContainer>
    </Container>
  );
}
