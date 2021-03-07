import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SegmentedControlIOSComponent } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  scrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import constants from "../../constants";

const SearchScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [SText, setSText] = useState("");
  const [result, setResult] = useState([]);
  const [Searched, setSearched] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((responseJson) => {
        setResult(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const updateSText = (x) => {
    setSText(x);
  };

  const SearchResult = () => {
    // ****sanitising****** 무조건, 스타일변경
    let count = 0;
    if (SText === "" && count === 0) {
      setSearched(result);
    } else {
      const newData = result.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = SText.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      count++;
      setSearched(newData);
      setSText("");
    }
  };

  return (
    <View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <SearchBar
          containerStyle={{ width: "85%" }}
          lightTheme={true}
          placeholder="작품 혹은 작가명 검색"
          value={SText}
          onChangeText={updateSText}
        />
        <TouchableOpacity
          style={{ width: "15%" }}
          style={{ justifyContent: "center", marginLeft: 20 }}
          onPress={SearchResult}
        >
          <Icon name="search" size={20}></Icon>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={Searched}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
