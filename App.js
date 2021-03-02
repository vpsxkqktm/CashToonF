import 'react-native-gesture-handler';
import React, {useState, Component} from 'react';
import {
  PixelRatio,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
  sliderState,
  pageIndex,
  nativeEvent,
  contentOffset,
} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppIntroSlider from 'react-native-app-intro-slider';

const setSliderPage = () => {
  const currentPage = sliderState;
  const x = contentOffset;
  const indexOfNextScreen = Math.floor(x / width);
  if (indexOfNextScreen !== currentPage) {
    setSliderState({
      ...sliderState,
      currentPage: indexOfNextScreen,
    });
  }
};

// const user = () => {
//   <View style={styles.UserInfo}>
//     <View>
//       <Text>유저님 어서오시고</Text>
//     </View>
//     <View style={{flexDirection: 'row'}}>
//       <View>
//         <Text>사용가능한 포인트: </Text>
//       </View>
//       <View>
//         <Text>5000000원</Text>
//       </View>
//     </View>
//     <TouchableOpacity
//       style={{
//         width: 100,
//         height: 30,
//         backgroundColor: 'red',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 13,
//       }}>
//       <Text>포인트사용</Text>
//     </TouchableOpacity>
//   </View>;
// };
const {width, height} = Dimensions.get('window');
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.UserInfo}>
        <View>
          <Text>유저님 어서오시고</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>사용가능한 포인트: </Text>
          </View>
          <View>
            <Text>5000000원</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
          }}>
          <Text>포인트사용</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ScrollView
          style={{height: 300}}
          horizontal={true}
          scrollEventThrottle={30}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          // onScroll={() => {
          //   setSliderPage(); 아씨발 TS
          // }}
        >
          <View style={{width, height}}>
            <Image
              style={styles.imageStyle}
              source={require('./assets/iu19.jpg')}
            />
            <Text>Screen 1</Text>
          </View>
          <View style={{width, height}}>
            <Image
              style={{
                alignSelf: 'center',
                height: '50%',
                width: '100%',
              }}
              source={require('./assets/iu20.jpg')}
            />
            <Text>Screen 2</Text>
          </View>
          <View style={{width, height}}>
            <Image
              style={styles.imageStyle}
              source={require('./assets/iu18.jpg')}
            />
            <Text>Screen 3</Text>
          </View>
          <View style={{width, height}}>
            <Image
              style={styles.imageStyle}
              source={require('./assets/iu17.jpg')}
            />
            <Text>Screen 4</Text>
          </View>
          <View style={{width, height}}>
            <Image
              style={styles.imageStyle}
              source={require('./assets/iu16.jpg')}
            />
            <Text>Screen 5</Text>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.BannerButton}>
          <Text>배너 광고</Text>
        </TouchableOpacity>
        <View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.Category1}
              onPress={() => navigation.navigate('Reward')}>
              <Text>리워드페이지</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Category2}
              onPress={() => navigation.navigate('Webtoon')}>
              <Text>웹툰</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.Category2}
              onPress={() => navigation.navigate('Minigame')}>
              <Text>심리테스트</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Category1}
              onPress={() => navigation.navigate('Lotto')}>
              <Text>복권</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.Category1}
              onPress={() => navigation.navigate('Fortune')}>
              <Text>포츈쿠키</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Category2}
              onPress={() => navigation.navigate('Quiz')}>
              <Text>가로세로</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.Category2}
              onPress={() => navigation.navigate('Influ')}>
              <Text>인플루언서관</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Category1}
              onPress={() => navigation.navigate('Community')}>
              <Text>커뮤니티</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.Category1}>
              <Text>카테고리1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Category2}>
              <Text>카테고리2</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.Category2}>
              <Text>카테고리3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Category1}>
              <Text>카테고리4</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                {opacity: pageIndex === index ? 1 : 1},
              ]}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const ShoppingScreen = () => {
  // user();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.UserInfo}>
        <View>
          <Text>유저님 어서오시고</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>사용가능한 포인트: </Text>
          </View>
          <View>
            <Text>5000000원</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
          }}>
          <Text>포인트사용</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.Products1}>
          <Text>상품 1</Text>
        </View>
        <View style={styles.Products2}>
          <Text>상품 2</Text>
        </View>
        <View style={styles.Products1}>
          <Text>상품 3</Text>
        </View>
        <View style={styles.Products2}>
          <Text>상품 4</Text>
        </View>
        <View style={styles.Products1}>
          <Text>상품 5</Text>
        </View>
        <View style={styles.Products2}>
          <Text>상품 6</Text>
        </View>
        <View style={styles.Products1}>
          <Text>상품 7</Text>
        </View>
        <View style={styles.Products2}>
          <Text>상품 8</Text>
        </View>
        <View style={styles.Products1}>
          <Text>상품 9</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};
const SettingScreen = () => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

const RewardScreen = () => {
  return (
    <View>
      <Text>리워드페이지</Text>
    </View>
  );
};
const WebToonScreen = () => {
  return (
    <View>
      <Text>웹툰</Text>
    </View>
  );
};

const MinigameScreen = () => {
  return (
    <View>
      <Text>심리테스트</Text>
    </View>
  );
};
const LottoScreen = () => {
  return (
    <View>
      <Text>하위</Text>
    </View>
  );
};
const FortuneScreen = () => {
  return (
    <View>
      <Text>포츈쿠키</Text>
    </View>
  );
};

const QuizScreen = () => {
  return (
    <View>
      <Text>가로세로</Text>
    </View>
  );
};
const CommunityScreen = () => {
  return (
    <View>
      <Text>커뮤니티</Text>
    </View>
  );
};
const InfluScreen = () => {
  return (
    <View>
      <Text>인플루언서관</Text>
    </View>
  );
};

const HomeStack = () => {};
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        iconStyle: {
          width: 'auto',
          height: 'auto',
        },
        indicatorStyle: {height: '100%', backgroundColor: 'orange'},
      }}>
      {/* <Tab.Screen name="stacks" component={HomeStack} /> */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (focused, tintColor) => (
            <Icon name="home" size={30} color={'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="shopping-cart" size={30} color={'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="user" size={30} color={'grey'} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: () => <Icon name="cog" size={30} color={'grey'} />,
        }}
      />
    </Tab.Navigator>
  );
};
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{headerShown: false, title: '리워드페이지'}}
          />
          <Stack.Screen
            name="Reward"
            component={RewardScreen}
            options={{title: '리워드페이지'}}
          />
          <Stack.Screen
            name="Webtoon"
            component={WebToonScreen}
            options={{title: '웹툰'}}
          />
          <Stack.Screen
            name="Lotto"
            component={LottoScreen}
            options={{title: '복권'}}
          />
          <Stack.Screen
            name="Fortune"
            component={FortuneScreen}
            options={{title: '포츈쿠키'}}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{title: '가로세로퀴즈'}}
          />
          <Stack.Screen
            name="Influ"
            component={InfluScreen}
            options={{title: '인플루언서관'}}
          />
          <Stack.Screen
            name="Community"
            component={CommunityScreen}
            options={{title: '커뮤니티'}}
          />
          <Stack.Screen
            name="Minigame"
            component={MinigameScreen}
            options={{title: '심리테스트'}}
          />
        </Stack.Navigator>

        {/* <Stack.Navigator>
          <Stack.Screen
            name="lotto"
            component={LottoScreen}
            options={{title: '복권'}}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
  },
  view: {
    flexDirection: 'column-reverse',
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 30,
    //alignItems: 'center',
    resizeMode: 'contain',
  },
  BannerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    backgroundColor: 'green',
  },
  HorizontalSlider: {alignSelf: 'center', height: '50%', width: '100%'},
  paginationWrapper: {
    position: 'absolute',
    //bottom: 430,
    top: 5,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'black',
    marginLeft: 10,
  },
  Category1: {
    height: 150,
    width: '50%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Category2: {
    height: 150,
    width: '50%',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UserInfo: {width: '100%', height: 150, backgroundColor: 'yellow'},
  Products1: {
    width: '100%',
    height: 150,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Products2: {
    width: '100%',
    height: 150,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
