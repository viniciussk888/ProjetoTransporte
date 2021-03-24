import React, { useEffect } from "react";
import styles from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { BackHandler, Alert, SafeAreaView,ActivityIndicator,Text } from "react-native";
import {useSelector } from "react-redux";

import TruckAnimation from "../../assets/animations/truck.json";
import Lottie from "lottie-react-native";

export default function Splash() {
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);

  async function getLocation(){
    try {
      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      const { latitude, longitude } = coords;
      await AsyncStorage.setItem('latitude', latitude.toString());
      await AsyncStorage.setItem('longitude', longitude.toString());
      
    } catch (error) {
      Alert.alert(
        "Atenção",
        "Ocorreu um erro ao obter a sua localização!",
        [
          {
            text: "OK",
            onPress: () => BackHandler.exitApp(),
          },
        ]
      );
    }
  }

  async function getLocationPermission() {
    const { granted } = await requestPermissionsAsync();

    if (granted) {
      getLocation();
    } else {
      Alert.alert(
        "Atenção",
        "O App precisa de permissão de localização para inicializar!",
        [
          {
            text: "OK",
            onPress: () => BackHandler.exitApp(),
          },
        ]
      );
    }
  }

  function checkAuth() {
    if (auth === 1) {
      navigation.reset({ //impede usuário voltar para tela login
        routes: [{
          name: 'Main'
        }]
      })
    } else {
      setTimeout(() => {
       navigation.reset({ 
        routes: [{
          name: 'login'
        }]
      })
      }, 3500);
    }
  }

  useEffect(() => {
    getLocationPermission();
    checkAuth();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Lottie
        source={TruckAnimation}
        autoPlay
        loop
        resizeMode="contain"
        autoSize
      />
      <Text style={styles.TitleText}>Transporta Ai!</Text>
      <ActivityIndicator size="large" color="#fff" />
    </SafeAreaView>
  );
}
