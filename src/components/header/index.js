import React from "react";
import { View, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Header(props) {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate(props.routeToBack);
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </BorderlessButton>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View></View>
    </View>
  );
}

export default Header;
