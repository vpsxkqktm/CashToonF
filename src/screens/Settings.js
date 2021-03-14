import React, { useEffect } from "react";
import { Alert, BackHandler } from "react-native";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
