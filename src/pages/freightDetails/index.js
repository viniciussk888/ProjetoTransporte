import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView,Linking } from 'react-native';
import MapView,{Marker} from "react-native-maps";
import { getCurrentPositionAsync, } from "expo-location";
import { Button} from "react-native-paper";
import {FontAwesome,FontAwesome5} from '@expo/vector-icons'
import styles from "./styles";
import Header from '../../components/header';
import { RectButton } from 'react-native-gesture-handler';
import Directions from '../../components/directions'
import getPixelSize from '../../utils/getPixelSize'


function FreightDetails({ route }) {
  const [mapView,setMapView] = useState(null)
  const [currentRegion, setCurrentRegion] = useState(null);
  const freight = route.params.freight;
  const issuer = route.params.issuer;
  const origin = {
    latitude:freight.lat_origin,
    longitude:freight.long_origin
  }
  const destination = {
    latitude:freight.lat_destiny,
    longitude:freight.long_destiny
  }
  
  function sendWhatsappMessage(){
    Linking.openURL(`whatsapp://send?text=Olá, vi seu frete Nº ${freight.id} no App Transporta AI e estou interessado, vamos conversar?&phone=+55${issuer.whatsapp}`);
  }

  function sendPhoneCall(){
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${issuer.phone}`;
    } else {
      phoneNumber = `telprompt:${issuer.phone}`;
    }

    Linking.openURL(phoneNumber);
  }

  useEffect(() => {
    async function loadInitialPosition() {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        if(coords){
          const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.10,
          longitudeDelta: 0.10,
        });
        }else{
          alert("Para esta funcionalidade ative a LOCALIZAÇÃO e abre o app novamente!")
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
            <Text style={styles.textRoute}>Rota do frete</Text>
            </View>
            
        <MapView
        loadingEnabled
        zoomEnabled={false}
        showsBuildings={false}
        showsPointsOfInterest={false}
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
        ref={el=>setMapView(el)}
        >
          <Directions
          origin={origin}
          destination={destination}
          onReady={(result)=>{
            mapView.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: getPixelSize(50),
                bottom: getPixelSize(80),
                left: getPixelSize(50),
                top: getPixelSize(10),
              }
            });
          }}
           />
           <Marker
      coordinate={{
        latitude: parseFloat(freight.lat_origin),
        longitude: parseFloat(freight.long_origin)
      }}
      title={freight.city_origin+"-"+freight.uf_origin}
      description={"Origem do frete"}
    />
    <Marker
      coordinate={{
        latitude: parseFloat(freight.lat_destiny),
        longitude: parseFloat(freight.long_destiny)
      }}
      title={freight.city_destiny+"-"+freight.uf_destiny}
      description={"Destino do frete"}
    />
        </MapView>
      </View>

      <ScrollView style={styles.infoContainer}>
      <View style={styles.infoFrete}>
      <Text style={styles.text}>Frete Nº {freight.id}</Text>
        <View style={{flexDirection:'row'}}>
          <RectButton onPress={sendWhatsappMessage}>
          <FontAwesome5 style={{marginRight:10}} name="whatsapp-square" size={40} color="green" />
          </RectButton>
          <RectButton onPress={sendPhoneCall}>
          <FontAwesome name="phone-square" size={43} color="blue" />
          </RectButton>
        </View>
      </View>

        <View style={styles.infoFrete}>
        
        <Text style={styles.text}>Valor: R$ {freight.value} {freight.type_value}</Text>
        
        </View>

          <Text style={styles.text}>Emitente: {issuer.name}</Text>
          
          <Text style={styles.text}>Origem: {freight.city_origin+"-"+freight.uf_origin}</Text>
          <Text style={styles.text}>Destino: {freight.city_destiny+"-"+freight.uf_destiny}</Text>
          
          <Text style={styles.text}>Endereço: {freight.adress_destiny}</Text>

          <View style={styles.infoFrete}>
          <Text style={styles.text}>Pedágio: {freight.toll}</Text>
          <Text style={styles.text}>Valor: R$ {freight.total_value_toll||'00,00'}</Text>
          </View>

          <View style={styles.infoFrete}>
          <Text style={styles.text}>Carga: {freight.load}</Text>
          </View>

          <Text style={styles.text}>Observação: {freight.obs}</Text>

          <Button
          style={{marginTop:20,marginBottom:40}}
              color="#eb001b"
              mode="contained"
            >
              FAZER FRETE
            </Button>

      </ScrollView>
      
    </View>
    </>
    );
}

export default FreightDetails;
