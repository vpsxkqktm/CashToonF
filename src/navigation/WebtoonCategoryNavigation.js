import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import actionTab from "../webtoonCategory/action";
import romanceTab from "../webtoonCategory/rommance";
import normalTab from "../webtoonCategory/normal";
import comedyTab from "../webtoonCategory/comedy";
import horrorTab from "../webtoonCategory/horror";
import dramaTab from "../webtoonCategory/drama";
import BLTab from "../webtoonCategory/BL";
import GLTab from "../webtoonCategory/GL";
import deductionTab from "../webtoonCategory/deduction";

const Tab = createMaterialTopTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      scrollEnabled: true,
      labelStyle: { fontSize: 12 },
      tabStyle: { width: 100 },
      style: { backgroundColor: "powderblue" },
    }}
  >
    <Tab.Screen name="액션" component={actionTab} />
    <Tab.Screen name="로맨스" component={romanceTab} />
    <Tab.Screen name="일상" component={normalTab} />
    <Tab.Screen name="코미디" component={comedyTab} />
    <Tab.Screen name="공포" component={horrorTab} />
    <Tab.Screen name="드라마" component={dramaTab} />
    <Tab.Screen name="BL" component={BLTab} />
    <Tab.Screen name="GL" component={GLTab} />
    <Tab.Screen name="추리" component={deductionTab} />
  </Tab.Navigator>
);
