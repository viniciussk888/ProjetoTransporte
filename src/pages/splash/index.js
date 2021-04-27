import React, { useEffect, useCallback } from "react";
import styles from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { BackHandler, Alert, SafeAreaView,ActivityIndicator,Text } from "react-native";
import {useSelector } from "react-redux";
import Geocoder from 'react-native-geocoding';
import TruckAnimation from "../../assets/animations/truck.json";
import Lottie from "lottie-react-native";
import APIKEY from '../../../env'

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
      Geocoder.init(`${APIKEY}`, {language : "pt-br"});
      const response = await Geocoder.from({ latitude, longitude });

      const adressArray = response.results[0].formatted_address.split(',')
      const CityAndUfArray = adressArray[2].split('-');
      const cityFormated = CityAndUfArray[0].substring(1, CityAndUfArray[0].length-1);

      await AsyncStorage.setItem('city', cityFormated.toUpperCase());
      await AsyncStorage.setItem('uf', CityAndUfArray[1].trim());
      
    } catch (error) {
      Alert.alert(
        "Atenção",
        "Ocorreu um erro ao obter a sua localização!",
        [
          {
            text: "OK",
          //  onPress: () => BackHandler.exitApp(),
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
        "O App precisa de permissão de localização para funcionar perfeitamente!",
        [
          {
            text: "OK",
           // onPress: () => BackHandler.exitApp(),
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
          name: 'change'
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
