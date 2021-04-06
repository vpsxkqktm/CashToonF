import React from "react";
import styled from "styled-components";
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
`;
const Username = styled.Text`
  margin-right: 50px;
`;
const ViewCounts = styled.Text`
  margin-right: 50px;
`;
const Likes = styled.Text`
  margin-right: 50px;
`;

export default function Post({ id, author, title, file, views, likes }) {
  const navigation = useNavigation();
  return (
    <Container>
      <ListContainer>
        <PostButton onPress={() => navigation.navigate("SeePost")}>
          <PostTitle>{title}</PostTitle>
        </PostButton>
        <Username>{author.username}</Username>
        <ViewCounts>{views}</ViewCounts>
        <Likes>{likes}</Likes>
      </ListContainer>
    </Container>
  );
}
