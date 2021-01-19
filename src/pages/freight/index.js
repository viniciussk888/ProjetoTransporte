import React from 'react';

import { View, Text } from 'react-native';

import StatusBar from '../../components/statusBar'

import styles from './styles'

function Freight() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
      <StatusBar/>
      </View>

      <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
    <Text style={styles.cargasText}>Total em andamento: 5</Text>
    </View>
    
    </View>
    );
}
;

export default Freight;
