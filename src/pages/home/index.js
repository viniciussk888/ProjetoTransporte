import React, { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RectButton } from "react-native-gesture-handler";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";

import FreightCard from '../../components/freightCard'
import styles from "./styles";

import Search from "../../assets/images/search.svg";

export default function Home() {

  const config = {
    headers: { Authorization: `Bearer ${useSelector((state) => state.token)}` },
  };

  function getSimpleName(fullName) {
    const name = fullName.split(" ");
    const firstName = name[0];
    return firstName;
  }

  function navigateToSearch(){
    alert("navegou")
  }

  return (
    <>
      <View style={styles.headerHomeContainer}>
        <Text style={styles.wellcomeText}>
          Bem vindo, {getSimpleName(useSelector((state) => state.name))}
        </Text>
        <View style={{flexDirection:"column",alignItems:'center'}}>
        <FontAwesome onPress={navigateToSearch} name="search" size={26} color="#fff" />
        <Text style={{fontSize:14,color:"#fff"}}>Buscar</Text>
        </View>
      </View>

      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cargasText}>Cargas disponíveis na região</Text>
          <Text style={styles.cargasText}>Total: 5</Text>
        </View>

        <ScrollView>
          <FreightCard/>
          <FreightCard/>
          <FreightCard/>
          <FreightCard/>
          <FreightCard/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
