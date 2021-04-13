import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from './styles'

function Companies({company}) {

  return (
    <View style={styles.container}>
      <Image resizeMode='stretch' style={styles.logo} source={{uri:company.imageURL}} />
    </View>
  )
}

export default Companies