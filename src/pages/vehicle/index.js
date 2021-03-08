import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton, Button } from "react-native-paper";

import Header from "../../components/header";

import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import Truck from "../../assets/images/truck.svg";

export default function Vehicle() {
  const { navigate } = useNavigation();
  const [checked, setChecked] = useState("Próprio");

  const [stateVehicle, setStateVehicle] = useState({
    vehicle: "Selecione",
  });
  const [stateCarreta, setStateCarreta] = useState({
    carreta: "Selecione",
  });

  // function navigateToLogin() {
  // navigate('login')
  // }

  return (
    <>
      <Header routeToBack="register" title="Dados do veículo" />
      <View style={styles.container}>
        <Truck width="100%" height="150" />
        <View style={styles.buttonsContainer}>
          <Text style={styles.sectionText}>Cavalo</Text>

          <View style={styles.buttonShort}>
            <TextInput
              keyboardType="default"
              placeholder="Placa"
              placeholderTextColor="#000"
              style={styles.inputShort}
            />
            <TextInput
              keyboardType="numeric"
              placeholder="RNTRC"
              placeholderTextColor="#000"
              style={styles.inputShort}
            />
          </View>
          <View style={styles.PickerView}>
            <Picker
              mode={"dropdown"}
              style={styles.picker}
              selectedValue={stateVehicle.vehicle}
              onValueChange={(itemValue, itemIndex) =>
                setStateVehicle({ vehicle: itemValue })
              }
            >
              <Picker.Item label="Selecione o tipo do veículo" value="none" />
              <Picker.Item label="TRUCK 3 EX" value="TRUCK 3 EX" />
              <Picker.Item label="BI-TRUCK - 4 EX" value="BI-TRUCK - 4 EX" />
              <Picker.Item label="BI-TREM - 7 EX" value="BI-TREM - 7 EX" />
              <Picker.Item label="BI-TREM - 8 EX" value="BI-TREM - 8 EX" />
              <Picker.Item label="BI-TREM - 9 EX" value="BI-TREM - 9 EX" />
              <Picker.Item
                label="CAVALO 2 EX | VANDERLEIA 2 EX"
                value="CAVALO 2 EX | VANDERLEIA 2 EX"
              />

              <Picker.Item
                label="CAVALO 2 EX | VANDERLEIA 3 EX"
                value="CAVALO 2 EX | VANDERLEIA 3 EX"
              />

              <Picker.Item
                label="CAVALO 3 EX | VANDERLEIA 3 EX"
                value="CAVALO 3 EX | VANDERLEIA 3 EX"
              />

              <Picker.Item
                label="CAVALO 3 EX | VANDERLEIA 4 EX"
                value="CAVALO 3 EX | VANDERLEIA 4 EX"
              />

              <Picker.Item
                label="CAVALO 2 EX | CARRETA 3 EX"
                value="CAVALO 2 EX | CARRETA 3 EX"
              />

              <Picker.Item
                label="CAVALO 3 EX | CARRETA 3 EX"
                value="CAVALO 3 EX | CARRETA 3 EX"
              />

              <Picker.Item
                label="CAVALO 3 EX | CARRETA 4 EX"
                value="CAVALO 3 EX | CARRETA 4 EX"
              />

              <Picker.Item
                label="CAVALO 4 EX | CARRETA 3 EX"
                value="CAVALO 4 EX | CARRETA 3 EX"
              />

              <Picker.Item
                label="RODO-TREM 3X3 9 EX"
                value="RODO-TREM 3X3 9 EX"
              />

              <Picker.Item
                label="RODO-TREM DOLLY 9 EX"
                value="RODO-TREM DOLLY 9 EX"
              />

              <Picker.Item label="OUTRO" value="OUTRO" />
            </Picker>
          </View>

          <View style={styles.radioContainer}>
            <RadioButton
              value="first"
              color="#eb001b"
              label="Próprio"
              status={checked === "Próprio" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("Próprio");
              }}
            />
            <Text style={{ fontWeight: "bold", marginRight: 30 }}>Próprio</Text>
            <RadioButton
              value="second"
              color="#eb001b"
              label="Terceiro"
              status={checked === "Terceiro" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("Terceiro");
              }}
            />
            <Text style={{ fontWeight: "bold" }}>Terceiro</Text>
          </View>

          <View>
            <Text style={styles.sectionText}>Carreta</Text>
          </View>

          <View style={styles.buttonShort}>
            <TextInput
              keyboardType="default"
              placeholder="Placa"
              placeholderTextColor="#000"
              style={styles.inputShort}
            />
            <View style={styles.PickerView2}>
              <Picker
                mode={"dropdown"}
                style={styles.picker2}
                selectedValue={stateCarreta.carreta}
                onValueChange={(itemValue, itemIndex) =>
                  setStateCarreta({ carreta: itemValue })
                }
              >
                <Picker.Item label="Tipo de carreta/carroceria" value="none" />
                <Picker.Item label="BASCULANTE" value="BASCULANTE" />
                <Picker.Item label="BAU" value="BAU" />
                <Picker.Item label="BAU REFRIGERADO" value="BAU REFRIGERADO" />
                <Picker.Item label="CONTAINER" value="CONTAINER" />
                <Picker.Item label="GAIOLA" value="GAIOLA" />
                <Picker.Item label="GRADE BAIXA" value="GRADE BAIXA" />
                <Picker.Item label="GRANELEIRO" value="GRANELEIRO" />
                <Picker.Item label="HOPPER" value="HOPPER" />
                <Picker.Item label="PISO MOVEL" value="PISO MOVEL" />
                <Picker.Item label="SIDER" value="SIDER" />
                <Picker.Item label="TANQUE" value="TANQUE" />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button style={{ width: "100%" }} color="#eb001b" mode="contained">
            Cadastrar
          </Button>
        </View>
      </View>
    </>
  );
}
