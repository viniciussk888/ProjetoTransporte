import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from "react-native-maps";
import { requestPermissionsAsync, getCurrentPositionAsync, } from "expo-location";
import styles from "./styles";
import Header from '../../components/header';

function FreightDetails() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.10,
          longitudeDelta: 0.10,
        });
      } else {
        alert("Essa função exige permissão de localização!");
      }
    }
    loadInitialPosition();
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  return (
    <>
    <Header routeToBack="Main" title="Detalhes do frete"/>
    <View style={styles.container}>

      <View style={styles.mapContainer}>

      <View style={styles.containerRoute}>
            <Text style={styles.text}>Rota do frete</Text>
            </View>
            
        <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.text}>dados</Text>
      </View>
      
    </View>
    </>
    );
}

export default FreightDetails;
