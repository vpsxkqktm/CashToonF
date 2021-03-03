// 당겨서 새로고침 구현

import React, { useState } from "react";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import PropTypes from "prop-types";

const ScrollViewContainer = ({ loading, children, refreshFunc }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFunc();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          enabled={false}
        />
      }
    >
      {loading ? <ActivityIndicator size="small" /> : children}
    </ScrollView>
  );
};

export default ScrollViewContainer;
