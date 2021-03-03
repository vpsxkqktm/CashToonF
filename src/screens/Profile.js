//refresh scrollview test

import React from "react";
import styled from "styled-components";

import ScrollViewContainer from "../components/ScrollViewContainer";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Profile = ({ loading, refreshFunc }) => {
  return (
    <ScrollViewContainer loading={loading} refreshFunc={refreshFunc}>
      <View>
        <Text>Profile</Text>
      </View>
    </ScrollViewContainer>
  );
};

export default Profile;
