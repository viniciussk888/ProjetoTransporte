import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import Header from '../../components/header';

function FreightDetails() {
  return (
    <>
    <Header routeToBack="Main" title="Detalhes do frete"/>
    <View style={styles.container}>
      
      <Text style={styles.text}>details</Text>
      
    </View>
    </>
    );
}

export default FreightDetails;
