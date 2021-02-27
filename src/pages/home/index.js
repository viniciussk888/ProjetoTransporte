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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const config = {
    headers: { Authorization: `Bearer ${useSelector((state) => state.token)}` },
  };

  function getSimpleName(fullName) {
    const name = fullName.split(" ");
    const firstName = name[0];
    return firstName;
  }

  return (
    <>
      <View style={styles.headerHomeContainer}>
        <Text style={styles.wellcomeText}>
          Bem vindo, {getSimpleName(useSelector((state) => state.name))}
        </Text>
        <Searchbar
          placeholder="Buscar fretes..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
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
