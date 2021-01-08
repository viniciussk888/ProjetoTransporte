import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { requestPermissionsAsync, getCurrentPositionAsync, } from "expo-location";

import styles from "./styles";

function Locations() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const {granted} = await requestPermissionsAsync();

      if (granted) {
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const {latitude, longitude} = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      } else {
        alert("Essa função exige permissão de localização!");
      }
    }
    loadInitialPosition();
  }, []);

  return (
    <>
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.contentTitle}>
      <Text style={styles.textTitle}>Encontre aqui locais importantes.</Text>
      </View>
        
        <Text style={styles.textCategory}>Categorias</Text>

      </View>
      <MapView initialRegion={currentRegion} style={styles.map} />
    </View>
    </>
    );
}

export default Locations;
