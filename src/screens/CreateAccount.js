import React from "react";
import { useRef } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const usernameRef = useRef();
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
        placeholder="이메일"
        placeholderTextColor="grey"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        returnKeyType="next"
        autoFocus={true}
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="아이디(닉네임)"
        placeholderTextColor="grey"
        autoCapitalize="none"
        autoCorrect={false}
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
        lastOne={true}
      />
      <AuthButton text="계정 만들기" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
