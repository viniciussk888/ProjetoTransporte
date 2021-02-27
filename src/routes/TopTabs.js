import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

import Profile from "../pages/profile";

export default function MyTopTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#fff9",
        labelStyle: { fontSize: 14, fontFamily: "Archivo_400Regular" },
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
      <Tab.Screen name="EM ANDAMENTO" component={Profile} />
      <Tab.Screen name="CONCLUÍDO" component={Profile} />
    </Tab.Navigator>
  );
}
