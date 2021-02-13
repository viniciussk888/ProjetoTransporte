import React, { useState } from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RectButton } from "react-native-gesture-handler";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";

import styles from "./styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <RectButton>
    <View style={styles.item}>
      <View style={styles.cardTop}>
        <Text style={styles.cardOrigin}>BALSAS-MA</Text>
        <FontAwesome name="long-arrow-right" size={24} color="#fff" />
        <Text style={styles.cardDest}>IMPERATRIZ-MA</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardInfoText}>
          <MaterialCommunityIcons
            name="truck-delivery"
            size={24}
            color="#fff"
          />{" "}
          Milho
        </Text>
        <Text style={styles.cardInfoText}>
          <AntDesign name="solution1" size={24} color="#fff" /> BUNGE ALIMENTOS
          LTDA
        </Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardInfoText}>
          <MaterialIcons name="attach-money" size={24} color="#fff" /> 130,00
          p/t
        </Text>
        <RectButton>
          <Text style={styles.cardInfoTextDetail}>VER DETALHES</Text>
        </RectButton>
      </View>
    </View>
  </RectButton>
);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const renderItem = ({ item }) => <Item title={item.title} />;

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

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
}
