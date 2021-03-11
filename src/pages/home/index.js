import React, { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import {
  FontAwesome
} from "@expo/vector-icons";
import Token from '../../utils/Token'
import { useNavigation } from "@react-navigation/native";
import FreightCard from '../../components/freightCard'
import styles from "./styles";
import { useSelector } from "react-redux";


export default function Home() {
  const {navigate} = useNavigation();

  function getSimpleName(fullName) {
    const name = fullName.split(" ");
    const firstName = name[0];
    return firstName;
  }

  function navigateToSearch(){
    navigate("search");
  }

  return (
    <>
      <View style={styles.headerHomeContainer}>
        <Text style={styles.wellcomeText}>
          Bem vindo, {getSimpleName(useSelector((state) => state.name))}
        </Text>
        <View style={{flexDirection:"column",alignItems:'center'}}>
        <FontAwesome onPress={navigateToSearch} name="search" size={26} color="#fff" />
        <Text style={{fontSize:12,color:"#fff",fontFamily:"Poppins_600SemiBold"}}>Buscar fretes</Text>
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
