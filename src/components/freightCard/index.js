import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function FreightCard(props) {
  //navegação
  const {navigate} = useNavigation();

  function navigateToDetails() {
    navigate("freightDetails");
  }

  return (
    <RectButton>
    <View style={styles.item}>
      <View style={styles.cardTop}>
        <Text style={styles.cardOrigin}>BALSAS-MA</Text>
        <FontAwesome name="long-arrow-right" size={24} color="#fff" />
        <Text style={styles.cardDest}>IMPERATRIZ-MA</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardInfoText}>
          <AntDesign name="solution1" size={24} color="#fff" /> BUNGE ALIMENTOS
          LTDA
        </Text>

        <Text style={styles.cardInfoText}>
          <MaterialCommunityIcons
    name="truck-delivery"
    size={24}
    color="#fff"
    />
    {"Carga: "}
          Milho
        </Text>
      </View>

      <View style={styles.cardInfo}>
        <RectButton onPress={navigateToDetails}>
          <Text style={styles.cardInfoTextDetail}>VER DETALHES</Text>
        </RectButton>
        <Text style={styles.cardInfoText}>
          <MaterialIcons name="attach-money" size={24} color="#fff" />{'Valor: '} 130,00
          p/t
        </Text>
      </View>
    </View>
  </RectButton>
    );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#eb001b',
    margin: 5,
    borderRadius: 8,
    padding: 5
  },
  title: {
    fontSize: 10,
    color: '#fff'
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  },
  cardOrigin: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
    textShadowColor: '#000',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    textShadowRadius: 10,
  },
  cardDest: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'Archivo_700Bold',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    textShadowRadius: 10,
  },
  cardInfo: {
    fontFamily: 'Poppins_600SemiBold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  cardInfoText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 10,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    textShadowRadius: 10,
    margin: 5
  },
  cardInfoTextDetail: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    textShadowRadius: 10,
    margin: 5
  }
});