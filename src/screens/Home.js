import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

import { userLogout } from "../../apollo";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const MenuView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuButton = styled.TouchableOpacity`
  background-color: red;
  width: 50%;
  height: 100px;
  justify-content: center;
`;

const MenuText = styled.Text`
  text-align: center;
`;

export default function Home({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={userLogout} style={{ marginBottom: 50 }}>
        <Text>임시 LOG OUT</Text>
      </TouchableOpacity>
      <MenuView>
        <MenuButton>
          <MenuText>리워드</MenuText>
        </MenuButton>
        <MenuButton>
          <MenuText>웹툰</MenuText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Community")}>
          <MenuText>커뮤니티</MenuText>
        </MenuButton>
        <MenuButton>
          <MenuText>복권</MenuText>
        </MenuButton>
      </MenuView>
    </Container>
  );
}
