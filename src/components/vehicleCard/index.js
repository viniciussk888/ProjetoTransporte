import React from 'react'
import { View, Text,Image } from 'react-native'
import { FontAwesome5,AntDesign } from '@expo/vector-icons';

import styles from './styles'


export default function VehicleCard({vehicle}) {
  
  return (
    <View style={styles.container}>
      <Image resizeMode="stretch" style={{width:"100%",height:'40%',borderRadius:2,borderColor:'#000',borderWidth:1}} source={require("../../assets/images/caminhao.jpg")} />
      <Text style={styles.title}>CAVALO: BI TREM 3 EIXOS</Text>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.title}>PLACA: OXY8181-MA</Text>
      <Text style={styles.title}>RNTRC: 12345678</Text>
      </View>
      <Text style={styles.title}>PRÓPRIO</Text>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.title}>CARRETA: BAU</Text>
      <Text style={styles.title}>OXY8181-MA</Text>
      </View>

    <View style={{marginTop:5,flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.title}>PRÓPRIO</Text>
      <AntDesign name="delete" size={24} color="#fff" />
      </View>
    </View>
  )
}