import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Register from "../pages/register";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const {Navigator, Screen} = createBottomTabNavigator();

function MainTabs() {
  return (
    <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: "Archivo_700Bold",
        fontSize: 13,
      },
      inactiveBackgroundColor: "#ffff",
      activeBackgroundColor: "#ffff",
      inactiveTintColor: "#afb7bd",
      activeTintColor: "#eb001b",
    }}
    >
      <Screen
    name="Home"
    component={Home}
    options={{
      tabBarLabel: "Início",
      tabBarIcon: ({color, size, focused}) => {
        return (
          <Ionicons
          name="home"
          size={size}
          color={focused ? "#eb001b" : color}
          />
          );
      },
    }}
    />
      <Screen
    name="Fretes"
    component={Register}
    options={{
      tabBarLabel: "Fretes",
      tabBarIcon: ({color, size, focused}) => {
        return (
          <FontAwesome
          name="truck"
          size={size}
          color={focused ? "#eb001b" : color}
          />
          );
      },
    }}
    />
    <Screen
    name="Locais"
    component={Register}
    options={{
      tabBarLabel: "Locais",
      tabBarIcon: ({color, size, focused}) => {
        return (
          <MaterialIcons
          name="local-gas-station"
          size={size}
          color={focused ? "#eb001b" : color}
          />
          );
      },
    }}
    />
    <Screen
    name="Dados"
    component={Register}
    options={{
      tabBarLabel: "Dados",
      tabBarIcon: ({color, size, focused}) => {
        return (
          <FontAwesome
          name="user-circle"
          size={size}
          color={focused ? "#eb001b" : color}
          />
          );
      },
    }}
    />
    </Navigator>
    );
}

export default MainTabs;
