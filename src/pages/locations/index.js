import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { getCurrentPositionAsync } from "expo-location";
import mapStyle from "../../utils/mapStyle.json";
import VehicleModal from '../../components/vehicleModal'
import styles from "./styles";
import Companies from "../../components/companies";
//icons
import PostoGasolina from "../../assets/images/marker-icons/gasolina.png";
import Semaforo from "../../assets/images/marker-icons/semaforo.png";
import Atencao from "../../assets/images/marker-icons/atencao.png";
import Radar from "../../assets/images/marker-icons/radar.png";
import Restaurante from "../../assets/images/marker-icons/restaurante.png";
import Hospital from "../../assets/images/marker-icons/hospital.png";

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
            <Text style={styles.textTitle}>
              Encontre aqui locais e empresas
            </Text>
          </View>

          <Text style={styles.textCategory}>
            Compre em empresas parceiras com desconto
          </Text>

          <SafeAreaView style={{ marginBottom: 5 }}>
            <ScrollView horizontal>
              <Companies />
              <Companies />
              <Companies />
              <Companies />
              <Companies />
              <Companies />
            </ScrollView>
          </SafeAreaView>
        </View>
        <MapView
          showsUserLocation
          loadingEnabled
          showsBuildings={false}
          showsPointsOfInterest={false}
          customMapStyle={mapStyle}
          onRegionChangeComplete={handleRegionChanged}
          initialRegion={currentRegion}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: -7.5248189,
              longitude: -46.0487098,
            }}
          >
            <Image style={styles.avatar} source={PostoGasolina} />
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.Name}>POSTO DO JOSE maravilha lucas</Text>
                <Text style={styles.Bio}>Ver mais</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
        <VehicleModal />
      </View>
    </>
  );
}

export default Locations;
