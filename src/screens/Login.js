import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function Login({ navigation }) {
  const { register, handleSubmit } = useForm();
  const passwordRef = useRef();

  const onNext = (event) => {
    event?.current?.focus();
  };
  const onDone = () => {
    alert("done");
  };

  return (
    <AuthLayout>
      <TextInput
        placeholder="아이디(닉네임)"
        placeholderTextColor="grey"
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="비밀번호"
        placeholderTextColor="grey"
        secureTextEntry={true}
        returnKeyType="done"
        onSubmitEditing={onDone}
      />
      <AuthButton
        text="로그인"
        disabled={true}
        onPress={() => handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
