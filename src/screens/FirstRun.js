import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../shared/colors";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 100%;
  height: 150px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.blue};
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`;

export default function FirstRun({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");
  return (
    <Container>
      <Logo resizeMode="center" source={require("../../assets/Logo.png")} />
      <CreateAccount onPress={goToCreateAccount}>
        <CreateAccountText>Create Account</CreateAccountText>
      </CreateAccount>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}
