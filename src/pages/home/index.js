import React, { useEffect } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import {
  FontAwesome
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FreightCard from '../../components/freightCard'
import styles from "./styles";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";


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

  useEffect(()=>{
    let lat
    let long
    async function getCoords(){
      lat =  await AsyncStorage.getItem("latitude")
      long = await AsyncStorage.getItem("longitude")
    }
    getCoords()
    console.log(lat+" "+long)
  },[])
  

  return (
    <>
      <View style={styles.headerHomeContainer}>
        <Text style={styles.wellcomeText}>
          Bem vindo, {getSimpleName(useSelector((state) => state.name)||"Usuário")}
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
