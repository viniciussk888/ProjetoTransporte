import React, { useEffect } from "react";
import { Container, LoadingIcon, TitleText } from "./styles";
//import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync } from "expo-location";
import { BackHandler, Alert } from "react-native";
import Auth from "../../utils/Auth";
import Token from "../../utils/Token";

import TruckAnimation from "../../assets/animations/truck.json";
import Lottie from "lottie-react-native";

export default function Splash() {
  const navigation = useNavigation();

  async function getLocationPermission() {
    const { granted } = await requestPermissionsAsync();

    if (granted) {
      console.log("Permissão de localização concedida!");
    } else {
      Alert.alert(
        "Atenção",
        "O App precisa de permissão de localização para inicializar!",
        [
          {
            text: "SIM",
            onPress: () => BackHandler.exitApp(),
          },
        ]
      );
    }
  }

  function checkAuth() {
    if (Token && Auth === 1) {
      navigation.navigate("Main");
    } else {
      splash();
    }
  }

  useEffect(() => {
    getLocationPermission();
    checkAuth();
  }, []);

  function splash() {
    setTimeout(() => {
      navigation.navigate("login");
    }, 5000);
  }

  return (
    <Container>
      <Lottie
        source={TruckAnimation}
        autoPlay
        loop
        resizeMode="contain"
        autoSize
      />
      <TitleText>Transporta Ai!</TitleText>
      <LoadingIcon size="large" color="#fff" />
    </Container>
  );
}
