import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import FreightCard from '../../components/freightCard';

function Progress() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>Aguardando aprovação: 1</Text>
      
      <Text style={styles.text}>Fretes em andamento: 1</Text>
      <Text style={styles.text}>Nº 4589</Text>
      
      </ScrollView>
    </View>
    );
}

export default Progress;
