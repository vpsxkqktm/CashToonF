import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import { colors } from "../shared/colors";
import AuthLayout from "../components/auth/AuthLayout";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`;

export default function FirstRun({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");
  return (
    <AuthLayout>
      <AuthButton
        text="새 계정 만들기"
        onPress={goToCreateAccount}
        disabled={false}
      />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>로그인</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
