import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { getCurrentPositionAsync, } from "expo-location";
import mapStyle from '../../utils/mapStyle.json'

import styles from "./styles";

import Categorie from '../../components/categorie/index'

function Locations() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        });
    }
    loadInitialPosition();
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.contentTitle}>
            <Text style={styles.textTitle}>Encontre aqui locais e empresas</Text>
          </View>

          <Text style={styles.textCategory}>Categorias</Text>

          <SafeAreaView style={{ marginBottom: 5 }}>
            <ScrollView
              horizontal
              style={styles.scrolCategorie}
            >
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
            </ScrollView>
          </SafeAreaView>

        </View>
        <MapView
        showsUserLocation
        rotateEnabled={false}
        loadingEnabled
        showsBuildings={false}
        showsPointsOfInterest={false}
        customMapStyle={mapStyle}
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}>
        </MapView>
      </View>
    </>
  );
}

export default Locations;
