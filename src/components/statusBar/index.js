import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatusBar() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>EM ANDAMENTO</Text>
        <Text style={styles.text}>|</Text>
        <Text style={styles.text}>CONCLUÍDOS</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderRadius: 8,
    height: 42,
    flexDirection: 'row', // row
    backgroundColor: '#eb001b',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 30,
    paddingRight: 30
  },
  text: {
    fontFamily: 'Poppins400_regular',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  }
});