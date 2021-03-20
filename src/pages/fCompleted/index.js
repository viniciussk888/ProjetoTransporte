import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";

import FreightCard from '../../components/freightCard'

function Completed() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>Fretes concluídos: 1</Text>
      <Text style={styles.text}>Nº 4589</Text>
      
      </ScrollView>
    </View>
    );
}

export default Completed;
