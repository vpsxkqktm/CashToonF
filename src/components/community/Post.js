import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View``;

const ListContainer = styled.View`
  flex-direction: row;
`;

const PostButton = styled.TouchableOpacity`
  flex: 1;
  background-color: green;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// const PostId = styled.Text`
//   text-align: center;
//   margin-right: 10px;
//   font-size: 20px;
// `;

const PostTitleText = styled.Text`
  margin-left: 20px;
  font-size: 20px;
  text-align: center;
`;

const PostInfo = styled.View`
  width: 100%;
  background-color: yellow;
  flex-direction: row;
  justify-content: center;
`;

const Username = styled.Text`
  font-size: 20px;
`;

const ViewCounts = styled.Text`
  margin-right: 50px;
  font-size: 20px;
`;

const LikeCounterView = styled.View`
  background-color: red;
  padding: 0px 20px;
  justify-content: center;
`;

const Likes = styled.Text`
  font-size: 20px;
`;

export default function Post({ id, author, title, views, likes, createdAt }) {
  const navigation = useNavigation();
  return (
    <Container>
      <ListContainer>
        <LikeCounterView>
          <Likes>{likes}</Likes>
        </LikeCounterView>
        <PostButton
          onPress={() =>
            navigation.navigate("SeePost", {
              postId: id,
            })
          }
        >
          <PostTitleText>{title} [0]</PostTitleText>
          <Image
            source={require("../../../assets/testimage2.png")}
            style={{ width: 100, height: 100 }}
          />
        </PostButton>
      </ListContainer>
      <PostInfo>
        <Text style={{ fontSize: 20 }}>작성시간: {createdAt} | </Text>
        <Username>{author.username}</Username>
      </PostInfo>
    </Container>
  );
}
