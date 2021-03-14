import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { getCurrentPositionAsync, } from "expo-location";

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
            <Text style={styles.textTitle}>Encontre aqui locais importantes.</Text>
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
        loadingEnabled
        zoomEnabled={false}
        showsBuildings={false}
        showsPointsOfInterest={false}
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}>
          <Marker
            coordinate={{
              latitude: -7.525774,
              longitude: -46.042129
            }}
            title={"Eu"}
            description={"Voce"}
          />
        </MapView>
      </View>
    </>
  );
}

export default Locations;
