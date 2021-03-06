import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import FreightCard from '../../components/freightCard';
import { Searchbar } from "react-native-paper";

function Search() {
  return (
    <View style={styles.container}>
      <Searchbar
    placeholder="Digite sua busca..."
    //onChangeText={onChangeSearch}
    //value={searchQuery}
    />
    <Text style={styles.text}>Busque por cidade de origem e cidade de destino</Text>
      <ScrollView>
      <FreightCard/>
      </ScrollView>
    </View>
    );
}

export default Search;
