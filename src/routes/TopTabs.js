import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from '../assets/colors'
import fonts from '../assets/fonts'

const Tab = createMaterialTopTabNavigator();

import Progress from "../pages/fProgress/";
import Completed from '../pages/fCompleted/'
import Wait from '../pages/fWait/'

export default function MyTopTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#fff",
      inactiveTintColor: "#fff9",
      labelStyle: {
        fontSize: 10,
        fontFamily: fonts.semiBold
      },
      indicatorStyle: {
        backgroundColor: "#fff",
        borderRadius: 100,
      },
      style: {
        backgroundColor: colors.green,
        borderRadius: 8,
      },
    }}
    >
      <Tab.Screen name="EM ANDAMENTO" component={Progress} />
      <Tab.Screen name="AGUARDANDO APROVAÇÃO" component={Wait} />
      <Tab.Screen name="CONCLUÍDO" component={Completed} />
    </Tab.Navigator>
    );
}
