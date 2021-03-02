import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import styled from "styled-components/native";

import AuthButton from "../../components/Auth/AuthButton";
import AuthInput from "../../components/Auth/AuthInput";
import useInput from "../../hooks/useInput";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const emailInput = useInput("");
  const [requestSecret, setRequestSecret] = useState(false);

  const handleLogin = () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please check your Email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }
    /* try catch로 DB에 있는 정보와 비교 */
    try {
      setLoading(true);
      setRequestSecret(true);
      if (!requestSecret) {
        Alert.alert("Check your email");
        navigation.navigate("Confirm", { email: value });
        return;
      } else {
        Alert.alert("Account not found");
        navigation.navigate("Signup", { email: value });
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Can't log in now");
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...emailInput}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={handleLogin}
          autoCorrect={false}
        />
        <AuthButton loading={loading} onPress={handleLogin} text="Log in" />
      </View>
    </TouchableWithoutFeedback>
  );
};
