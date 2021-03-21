import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

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
        fontFamily: "Archivo_400Regular"
      },
      indicatorStyle: {
        backgroundColor: "#fff",
        borderRadius: 100,
      },
      style: {
        backgroundColor: "#eb001b",
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
