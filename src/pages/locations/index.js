import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { getCurrentPositionAsync } from "expo-location";
import mapStyle from "../../utils/mapStyle.json";
import LocationModal from "../../components/locationModal";
import styles from "./styles";
import Companies from "../../components/companies";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
//icons
import Combustivel from "../../assets/images/marker-icons/gasolina.png";
import Semaforo from "../../assets/images/marker-icons/semaforo.png";
import Atencao from "../../assets/images/marker-icons/atencao.png";
import Radar from "../../assets/images/marker-icons/radar.png";
import Restaurante from "../../assets/images/marker-icons/restaurante.png";
import Hospital from "../../assets/images/marker-icons/hospital.png";
import { RectButton } from "react-native-gesture-handler";

function Locations() {
  const [currentRegion, setCurrentRegion] = useState(null);
  const { navigate } = useNavigation();
  const [locations, setLocations] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reload, setReload] = useState(0);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  function sync() {
    setReload(Math.random);
  }

  function navigateToCompanyDetails(company) {
    navigate("companyDetails", {
      company: company,
    });
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
  }, [reload]);

  useEffect(() => {
    async function fetchData() {
      const uf = await AsyncStorage.getItem("uf");
      const city = await AsyncStorage.getItem("city");
      try {
        const response = await api.post("locations-region", {
          city,
          uf,
        });
        if (response.status === 200) {
          setLocations(response.data);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const response = await api.post("companies-region", {
          city,
          uf,
        });
        if (response.status === 200) {
          setCompanies(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [reload]);

  function dimamicAvatar(avatarName) {
    var result = "";
    switch (avatarName) {
      case "Combustivel":
        result = Combustivel;
        break;
      case "Radar":
        result = Radar;
        break;
      case "Semaforo":
        result = Semaforo;
        break;
      case "Atencao":
        result = Atencao;
        break;
      case "Restaurante":
        result = Restaurante;
        break;
      case "Hospital":
        result = Hospital;
        break;
      default:
        result = "Atencao";
        break;
    }
    return result;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.contentTitle}>
            <Text style={styles.textTitle}>
              Encontre aqui locais e empresas
            </Text>
          </View>

          <Text style={styles.textCategory}>
            Compre em empresas parceiras com desconto
          </Text>

          <View style={{ marginBottom: 5 }}>
            <ScrollView horizontal>
              {companies.map((company) => (
                <RectButton onPress={() => navigateToCompanyDetails(company)}>
                  <View>
                    <Companies key={company.id} company={company} />
                  </View>
                </RectButton>
              ))}
            </ScrollView>
          </View>
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
          {locations.map((location) => (
            <Marker
              key={location.id}
              coordinate={{
                latitude: parseFloat(location.latitude),
                longitude: parseFloat(location.longitude),
              }}
            >
              <Image
                style={styles.avatar}
                source={dimamicAvatar(location.name)}
              />
              <Callout>
                <View style={styles.callout}>
                  <Text style={styles.Name}>{location.name}</Text>
                  <Text style={styles.Bio}>{location.description}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
          {companies.map((company) => (
            <Marker
              key={company.id}
              coordinate={{
                latitude: parseFloat(company.latitude),
                longitude: parseFloat(company.longitude),
              }}
            >
              <Image
                style={styles.avatarCompanies}
                source={{ uri: company.imageURL }}
              />
              <Callout onPress={() => navigateToCompanyDetails(company)}>
                <View style={styles.callout}>
                  <Text style={styles.Name}>{company.name}</Text>
                  <Text style={styles.Bio}>{company.description}</Text>
                  <Text style={styles.Name}>VER DETALHES</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
        {currentRegion !== null && (
          <LocationModal sync={sync} coords={currentRegion} />
        )}
      </SafeAreaView>
    </>
  );
}

export default Locations;
