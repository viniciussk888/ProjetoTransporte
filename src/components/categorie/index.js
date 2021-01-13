import React from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Ionicons } from '@expo/vector-icons';

import styles from './styles'
import { useNavigation } from '@react-navigation/native'


function Categorie() {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('login');
  }
  return (
    <View style={styles.container}>
      <Ionicons name="fast-food" size={30} color="#fff" />
      <Text style={styles.title}>Comida</Text>
    </View>
  )
}

export default Categorie