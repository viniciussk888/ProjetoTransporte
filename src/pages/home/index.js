import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import styles from './styles'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
    <View style={styles.headerHomeContainer}>
      <Text style={styles.wellcomeText}>Bem vindo, usuário</Text>
      <Searchbar
    placeholder="Buscar frestes..."
    onChangeText={onChangeSearch}
    value={searchQuery}
    />
    </View>

    <View style={styles.container}>
    <Text style={styles.cargasText}>Cargas disponíveis na região</Text>
    </View>
    </>
    );
}

