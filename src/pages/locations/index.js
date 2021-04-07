import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { getCurrentPositionAsync } from "expo-location";
import mapStyle from "../../utils/mapStyle.json";
import VehicleModal from "../../components/vehicleModal";
import styles from "./styles";
import Companies from "../../components/companies";
import api from '../../services/api'
//icons
import PostoGasolina from "../../assets/images/marker-icons/gasolina.png";
import Semaforo from "../../assets/images/marker-icons/semaforo.png";
import Atencao from "../../assets/images/marker-icons/atencao.png";
import Radar from "../../assets/images/marker-icons/radar.png";
import Restaurante from "../../assets/images/marker-icons/restaurante.png";
import Hospital from "../../assets/images/marker-icons/hospital.png";

function Locations() {
  const [currentRegion, setCurrentRegion] = useState(null);

  const [locations, setLocations] = useState([]);
  const [companies, setCompanies] = useState([]);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

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

  useEffect(()=>{
    async function getLocations(){
      try {
        const response = await api.get('locations')
        setLocations(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getLocations()
  },[])

  useEffect(()=>{
    async function getCompanies(){
      try {
        const response = await api.get('companies')
        setCompanies(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCompanies()
  },[])

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
              {companies.map((company)=>(
                <Companies key={company.id} company={company} />
              ))}
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
          {locations.map(location=>(
            <Marker
            key={location.id}
            coordinate={{
              latitude: parseFloat(location.latitude),
              longitude: parseFloat(location.longitude),
            }}
          >
            <Image style={styles.avatar} source={PostoGasolina} />
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.Name}>{location.name}</Text>
                <Text style={styles.Bio}>{location.description}</Text>
              </View>
            </Callout>
          </Marker>
          ))}
          {companies.map(company=>(
            <Marker
            key={company.id}
            coordinate={{
              latitude: parseFloat(company.latitude),
              longitude: parseFloat(company.longitude),
            }}
          >
            <Image style={styles.avatarCompanies} source={{uri:company.imageURL}} />
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.Name}>{company.name}</Text>
                <Text style={styles.Bio}>{company.description}</Text>
                <Text style={styles.Name}>VER DETALHES</Text>
              </View>
            </Callout>
          </Marker>
          ))}
        </MapView>
        <VehicleModal />
      </View>
    </>
  );
}

export default Locations;
