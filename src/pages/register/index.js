import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton, Button } from "react-native-paper";

import Header from "../../components/header";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import Motora from "../../assets/images/motora.svg";

export default function Register() {
  const { navigate } = useNavigation();

  const [checked, setChecked] = useState("PF");

  function navigateToVehicleRegister() {
    navigate("vehicle");
  }

  return (
    <>
      <Header routeToBack="login" title="Informe os dados" />
      <View style={styles.container}>
        <Motora width="100%" height="180" />
        <View style={styles.buttonsContainer}>
          <TextInput
            keyboardType="default"
            placeholder="Nome"
            placeholderTextColor="#000"
            style={styles.input}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Celular"
            placeholderTextColor="#000"
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#000"
            style={styles.input}
          />

          <Text style={{ fontWeight: "bold" }}>Tipo de Frete</Text>

          <View style={styles.radioContainer}>
            <RadioButton
              value="first"
              color="#eb001b"
              label="PF"
              status={checked === "PF" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("PF");
              }}
            />
            <Text style={{ fontWeight: "bold", marginRight: 30 }}>PF</Text>
            <RadioButton
              value="second"
              color="#eb001b"
              label="PJ"
              status={checked === "PJ" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("PJ");
              }}
            />
            <Text style={{ fontWeight: "bold" }}>PJ</Text>
          </View>

          <TextInput
            keyboardType="numeric"
            placeholder={checked === "PJ" ? "CNPJ" : "CPF"}
            placeholderTextColor="#000"
            style={styles.input}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            onPress={navigateToVehicleRegister}
            style={{ width: "100%" }}
            color="#eb001b"
            mode="contained"
          >
            Proseguir
          </Button>
        </View>

        <View style={styles.termosContainer}>
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>
            Estou ciente de todos os termos.
          </Text>
          <RectButton>
            <Text style={{ fontWeight: "bold", color: "#7041EE" }}>
              Ler termos & condições
            </Text>
          </RectButton>
        </View>
      </View>
    </>
  );
}
