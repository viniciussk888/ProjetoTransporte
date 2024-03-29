import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//pages
import Change from "../pages/change";
import Login from "../pages/login";
import Home from "../pages/home";
import Register from "../pages/register";
import Vehicle from "../pages/vehicle";
import Splash from "../pages/splash";
import Search from "../pages/search";
import FreightDetails from "../pages/freightDetails";
import CompanyDetails from "../pages/companyDetails";

import MainTabs from "./MainTabs";

const {Navigator, Screen} = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
        <Screen name="splash" component={Splash} />
        <Screen name="change" component={Change} />
        <Screen name="login" component={Login} />
        <Screen name="home" component={Home} />
        <Screen name="register" component={Register} />
        <Screen name="vehicle" component={Vehicle} />
        <Screen name="freightDetails" component={FreightDetails} />
        <Screen name="search" component={Search} />
        <Screen name="companyDetails" component={CompanyDetails} />
        <Screen name="Main" component={MainTabs} />
      </Navigator>
    </NavigationContainer>
    );
}
