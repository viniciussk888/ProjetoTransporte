import React from 'react'
import { View, Text,Image,Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';


export default function VehicleCard({deleted,vehicle,config}) {

  async function deleteVehicle(){
    try {
      const response = await api.delete(`vehicles/${vehicle.id}`,config)
    if(response.status===200){
      deleted()
    Alert.alert("ATENÇÃO",response.data.message)
    }
    } catch (error) {
      alert(error)
    }
 }

   function confirmDeleteVehicle(){
    Alert.alert(
      "ATENÇÃO",
      `CONFIRMA A EXCLUSÃO DO ${vehicle.type_vehicle}?`,
      [
        {
          text: "NÃO",
          style: "cancel"
        },
        { text: "SIM", onPress: () => deleteVehicle() }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <Image resizeMode="stretch" style={{width:"100%",height:'40%',borderRadius:2,borderColor:'#000',borderWidth:1}} source={require("../../assets/images/caminhao.jpg")} />
      <Text style={styles.title}>{vehicle.type_vehicle}</Text>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.title}>PLACA: {vehicle.board}</Text>
      <Text style={styles.title}>RNTRC: {vehicle.rntrc}</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.title}>CARRETA: {vehicle.type_cart}</Text>
      <Text style={styles.title}>{vehicle.board_cart}</Text>
      </View>

    <View style={{marginTop:5,flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.title}>{vehicle.property}</Text>
    <RectButton onPress={confirmDeleteVehicle}>
      <AntDesign name="delete" size={24} color="#fff" />
      </RectButton>
      </View>
    </View>
  )
}