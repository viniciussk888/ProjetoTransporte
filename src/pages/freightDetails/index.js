import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import MapView, { Marker, Callout } from "react-native-maps";
import { getCurrentPositionAsync, } from "expo-location";
import { Button} from "react-native-paper";
import {FontAwesome,FontAwesome5} from '@expo/vector-icons'
import styles from "./styles";
import Header from '../../components/header';

function FreightDetails() {
  const [currentRegion, setCurrentRegion] = useState(null);

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
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
        />
      </View>

      <ScrollView style={styles.infoContainer}>
        <View style={styles.infoFrete}>
        <Text style={styles.text}>Frete Nº 1485</Text>
        <Text style={styles.text}>R$ 117,00 p/t</Text>
        <View style={{flexDirection:'row'}}>
        <FontAwesome5 style={{marginRight:10}} name="whatsapp-square" size={40} color="green" />
        <FontAwesome name="phone-square" size={43} color="blue" />
        </View>
        </View>

          <Text style={styles.text}>Origem: Balsas-MA</Text>
          <Text style={styles.text}>Destino: Imperatiz-MA</Text>
          
          <Text style={styles.text}>Endereço: Rua 13 de Maio,Centro, Nº 184</Text>

          <View style={styles.infoFrete}>
          <Text style={styles.text}>Pedágio: NÃO</Text>
          <Text style={styles.text}>Valor: R$ 00,00</Text>
          </View>

          <View style={styles.infoFrete}>
          <Text style={styles.text}>Carga: SOJA</Text>
          <Text style={styles.text}>Peso: TONELADA</Text>
          </View>

          <Text style={styles.text}>Obervação: nenhuma observação informada</Text>

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
