import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from './styles'
import { RectButton } from "react-native-gesture-handler";

function Companies({company}) {

  return (
    <View style={styles.container}>
      <Image resizeMode='stretch' style={styles.logo} source={{uri:"https://i.pinimg.com/originals/ce/a7/0b/cea70b697fe2ca6770876b7250638e47.jpg"}} />
      <RectButton>
      <Text style={styles.title}>Construção Moreira aguia filho junior marques sousa</Text>
      </RectButton>
    </View>
  )
}

export default Companies