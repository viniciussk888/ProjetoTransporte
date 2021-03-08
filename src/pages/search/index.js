import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import FreightCard from '../../components/freightCard';
import { Searchbar } from "react-native-paper";
import Header from '../../components/header';

function Search() {
  return (
    <>
    <Header routeToBack="Main" title="Procure por fretes"/>
    <View style={styles.container}>
      <Searchbar
    placeholder="Digite sua busca..."
    //onChangeText={onChangeSearch}
    //value={searchQuery}
    />
    <Text style={styles.text}>Busque por cidade de origem ou cidade de destino</Text>
      <ScrollView>
      <FreightCard/>
      <FreightCard/>
      <FreightCard/>
      <FreightCard/>
      <FreightCard/>
      </ScrollView>
    </View>
    </>
    );
}

export default Search;
