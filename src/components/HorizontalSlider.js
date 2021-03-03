import React from "react";
import { ScrollView, View } from "react-native";
import PropTypes from "prop-types";

const HorizontalSlider = ({ children }) => {
  return (
    <View>
      <ScrollView horizontal={true}>{children}</ScrollView>
    </View>
  );
};

export default HorizontalSlider;
