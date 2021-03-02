import React, { useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { useLogIn } from "../../../AuthContext";
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
  const confirmInput = useInput("");
  const logIn = useLogIn();
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    // const { value } = confirmInput;
    // if (value === "" || !value.includes(" ")) {
    //   return Alert.alert("Invalid secret");
    // }
    const confirmSecret = "1234";
    try {
      setLoading(true);
      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert("Wrong secret!");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Can't confirm secret");
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...confirmInput}
          placeholder="Secret"
          returnKeyType="send"
          onSubmitEditing={handleConfirm}
          autoCorrect={false}
        />
        <AuthButton loadin={loading} onPress={handleConfirm} text="Confirm" />
      </View>
    </TouchableWithoutFeedback>
  );
};
