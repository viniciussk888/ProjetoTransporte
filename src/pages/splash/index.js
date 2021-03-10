import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon, TitleText } from "./styles";
//import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync } from "expo-location";

import LogoApp from "../../assets/images/logo-transp.svg";

export default function Splash() {
  const navigation = useNavigation();

  async function getLocationPermission() {
    const {granted} = await requestPermissionsAsync();

    if (granted) {
      console.log("Permissão de localização concedida!")
    } else {
      alert("O APP precisa de acesso a localização para inicializar!")
      Splash();
    }
  }

  useEffect(() => {
    getLocationPermission();
    splash();
  }, []);

  function splash() {
    setTimeout(() => {
      navigation.navigate("login");
    }, 2000);
  }

  return (
    <Container>
      <LogoApp width="100%" height="260" />
      <TitleText>Transporta Ai!</TitleText>
      <LoadingIcon size="large" color="#fff" />
    </Container>
    );
}
