import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from './styles'
import { RectButton } from "react-native-gesture-handler";

function Companies({company}) {

  return (
    <View style={styles.container}>
      <Image resizeMode='stretch' style={styles.logo} source={{uri:company.imageURL}} />
      <RectButton>
      <Text style={styles.title}>{company.name}</Text>
      </RectButton>
    </View>
  )
}

export default Companies