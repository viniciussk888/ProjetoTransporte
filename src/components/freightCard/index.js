import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'
import api from "../../services/api";

export default function FreightCard(props) {
  //navegação
  const { navigate } = useNavigation();

  const [issuer, setIssuer] = useState([]);
  const freight = props.freight;

  function navigateToDetails() {
    navigate("freightDetails", {
      freight: freight,
      issuer: issuer,
    });
  }

  useEffect(() => {
    async function getIssuer() {
      try {
        const response = await api.get(`issuers/${freight.issuer_id}`);
        if(response.status===204){
          alert(response.data.message)
        }
        setIssuer(response.data);
      } catch (error) {
        alert(error);
      }
    }
    getIssuer();
  }, []);

  return (
    <RectButton>
      <View style={styles.item}>
        <View style={styles.cardTop}>
          <Text style={styles.cardOrigin}>
            {freight.city_origin}-{freight.uf_origin}
          </Text>
          <FontAwesome name="long-arrow-right" size={24} color="#fff" />
          <Text style={styles.cardDest}>
            {freight.city_destiny}-{freight.uf_destiny}
          </Text>
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>
            <AntDesign name="solution1" size={24} color="#fff" />{" "}
            {issuer.name || "Carregando..."}
          </Text>

          <Text style={styles.cardInfoText}>
            <MaterialCommunityIcons
              name="truck-delivery"
              size={24}
              color="#fff"
            />
            {"  "}
            {freight.load}
          </Text>
        </View>

        <View style={styles.cardInfo}>
          <RectButton onPress={navigateToDetails}>
            <Text style={styles.cardInfoTextDetail}>VER DETALHES</Text>
          </RectButton>
          <Text style={styles.cardInfoText}>
            <MaterialIcons name="attach-money" size={24} color="#fff" />
            {freight.value}
            {"\n"}
            {freight.type_value}
          </Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.green,
    margin: 5,
    borderRadius: 8,
    padding: 5,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },
  cardOrigin: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.white,
    marginRight: 10,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 5,
      height: 5,
    },
    textShadowRadius: 10,
  },
  cardDest: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
    fontFamily: fonts.bold,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 5,
      height: 5,
    },
    textShadowRadius: 10,
  },
  cardInfo: {
    fontFamily: fonts.semibold,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  cardInfoText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 5,
      height: 5,
    },
    textShadowRadius: 10,
    margin: 5,
  },
  cardInfoTextDetail: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 5,
      height: 5,
    },
    textShadowRadius: 10,
    margin: 5,
  },
});
