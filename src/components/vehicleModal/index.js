import React, { useState } from "react";
import { TextInput, Modal, StyleSheet, Text, Pressable, View,Picker  } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { Button, RadioButton } from "react-native-paper";

const VehicleModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [checked, setChecked] = useState("Próprio");

  const [stateVehicle, setStateVehicle] = useState({
    vehicle: "Selecione",
  });
  const [stateCarreta, setStateCarreta] = useState({
    carreta: "Selecione",
  });

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

          <View style={styles.buttonsContainer}>
      <Text style={styles.textSection}>Cavalo</Text>
          
<View style={styles.buttonShort}>
            <TextInput
    value="oxy8181"
    underlineColorAndroid='transparent'
    keyboardType="default"
    placeholder="Placa"
    placeholderTextColor="#000"
    style={styles.inputShort}
    />
            <TextInput
    value="12345678"
    underlineColorAndroid='transparent'
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
    onValueChange={(itemValue, itemIndex) => setStateVehicle({
      vehicle: itemValue
    })
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
    theme="#fff"
    status={checked === "Próprio" ? "checked" : "unchecked"}
    onPress={() => {
      setChecked("Próprio");
    }}
    />
            <Text style={{
      fontWeight: "bold",
      marginRight: 30,
      color: "#000"
    }}>Próprio</Text>
            <RadioButton
    value="second"
    color="#eb001b"
    label="Terceiro"
    status={checked === "Terceiro" ? "checked" : "unchecked"}
    onPress={() => {
      setChecked("Terceiro");
    }}
    />
            <Text style={{
      fontWeight: "bold",
      color: "#000"
    }}>Terceiro</Text>
          </View>

<Text style={styles.textSection}>Carreta</Text>

<View style={styles.buttonShort}>
            <TextInput
    keyboardType="default"
    
    value="oxy8181"
    underlineColorAndroid='transparent'
    placeholder="Placa"
    placeholderTextColor="#000"
    style={styles.inputShort}
    />
            <View style={styles.PickerView2}>
              <Picker
    mode={"dropdown"}
    style={styles.picker2}
    selectedValue={stateCarreta.carreta}
    onValueChange={(itemValue, itemIndex) => setStateCarreta({
      carreta: itemValue
    })
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

<Button
    color="#eb001b"
    mode="contained"
    onPress={() => setModalVisible(!modalVisible)}
    >
            GRAVAR
          </Button>
</View>
    

            
          </View>
        </View>
      </Modal>
      <RectButton onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle-outline" size={30} color="#fff" />
        </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor:'#afb7bd',
    margin: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonsContainer: {
    marginTop: 5,
    flexDirection: "column",
    padding: 10,
  },
  input: {
    borderRadius: 8,
    width: "100%",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    height: 38,
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  textSection: {
    color: '#000',
    fontFamily: "Poppins_600SemiBold"
  },
  inputShort: {
    borderRadius: 8,
    width: "50%",
    fontFamily: "Archivo_400Regular",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginRight: 5,
  },
  PickerView: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  picker: {
    width: "100%",
    fontFamily: "Archivo_400Regular",
    fontSize: 20,
    backgroundColor: "#fff",
  },
  PickerView2: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginBottom: 40
  },
  picker2: {
    width: "100%",
    fontFamily: "Archivo_400Regular",
    fontSize: 20,
    height: 40,
    backgroundColor: "#fff",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonShort: {
    flexDirection: "row",
  }
});

export default VehicleModal;