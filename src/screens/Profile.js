//refresh scrollview test

import React from "react";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Profile = ({ loading, refreshFunc }) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
