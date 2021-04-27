import React, {useState,useEffect} from 'react';
import { View, Text, ScrollView,Linking, Alert } from 'react-native';
import MapView,{Marker} from "react-native-maps";
import { Button, ActivityIndicator, Colors} from "react-native-paper";
import {FontAwesome,FontAwesome5} from '@expo/vector-icons'
import styles from "./styles";
import Header from '../../components/header';
import { RectButton } from 'react-native-gesture-handler';
import Directions from '../../components/directions'
import getPixelSize from '../../utils/getPixelSize'
import mapStyle from '../../utils/mapStyle.json'
import { useSelector } from "react-redux";
import api from '../../services/api'
import truckMarker from '../../assets/images/truck-marker.png'
import colors from '../../assets/colors'


function FreightDetails({ route }) {
  const [loading, setLoading] = useState(false);
  const [userPermited, setUserPermited] = useState(false);
  const [mapView,setMapView] = useState(null)
  const freight = route.params.freight;
  const issuer = route.params.issuer;

  const user_id = useSelector((state) => state.id);
  const issuer_id = issuer.id;
  const freight_id = freight.id;

  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

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

  async function CreateNewNegotiation(){
    setLoading(true)
    if(userPermited===false){
      setLoading(false)
      return Alert.alert("ATENÇÃO","Seus dados ainda precisam ser confirmados para iniciar frete! Aguarde.")
    }
    if(user_id===""||user_id===null||issuer_id===""||issuer_id===null||freight===""||freight===null){
      setLoading(false)
      return alert("Erro ao obter ID para fechar o frete!")
    }

    try {
      const response = await api.post('negotiations',{
        user_id,
        issuer_id,
        freight_id
      },config)
      if(response.status===226){
        setLoading(false)
        Alert.alert("ATENÇÃO", response.data.message);
      }
      if(response.status===201){
        setLoading(false)
        Alert.alert("SUCESSO", "Pedido de frete enviado! verifique nos seus fretes e atualize para verificar se o pedido foi aceito");
      }
    } catch (error) {
      setLoading(false)
      alert(erro)
    }
  }

  useEffect(()=>{
    async function checkStatus(){
      const response = await api.get(`users/${user_id}`,config)
      if(response.data.status==='AGUARDANDO'){
       return setUserPermited(false)
      }
      setUserPermited(true)
    }
    checkStatus()
  },[])

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
        showsBuildings={false}
        showsPointsOfInterest={false}
        customMapStyle={mapStyle}
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
      image={truckMarker}
    />
    <Marker
      coordinate={{
        latitude: parseFloat(freight.lat_destiny),
        longitude: parseFloat(freight.long_destiny)
      }}
      title={freight.city_destiny+"-"+freight.uf_destiny}
      description={"Destino do frete"}
      image={truckMarker}
    />
        </MapView>
      </View>

      <ScrollView style={styles.infoContainer}>
      <View style={styles.infoFrete}>
      <Text style={styles.text}>Frete Nº {freight.id}</Text>
        <View style={{flexDirection:'row'}}>
          <RectButton onPress={sendWhatsappMessage}>
          <FontAwesome5 style={{marginRight:10}} name="whatsapp-square" size={40} color="#34af23" />
          </RectButton>
          <RectButton onPress={sendPhoneCall}>
          <FontAwesome name="phone-square" size={43} color={colors.red} />
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

          {loading ? (
            <ActivityIndicator
              size="large"
              animating={true}
              color={Colors.red800}
            />
          ) : (
          <Button
          style={{marginTop:20,marginBottom:40}}
              color={colors.green}
              mode="contained"
              onPress={CreateNewNegotiation}
            >
              FAZER FRETE
            </Button>
            )}

      </ScrollView>
      
    </View>
    </>
    );
}

export default FreightDetails;