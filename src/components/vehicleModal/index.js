import React, { useState, useEffect } from "react";
import {
  TextInput,
  Modal,
  StyleSheet,
  Text,
  View,
  Picker,
  Alert,
  Image,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import {
  Button,
  RadioButton,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { FAB } from "react-native-paper";

const VehicleModal = ({ sync }) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const user_id = useSelector((state) => state.id);
  const [board, setBoard] = useState("");
  const [rntrc, setRntrc] = useState("");
  const [board_cart, setBoard_cart] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [checked, setChecked] = useState("Próprio"); //property
  const [stateVehicle, setStateVehicle] = useState({
    vehicle: "Selecione",
  }); //type_vehicle
  const [stateCarreta, setStateCarreta] = useState({
    carreta: "Selecione",
  }); //type_cart

  return (
    <>
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
            <View style={styles.closeButonView}>
              <Button
                style={styles.closeButon}
                color="#eb001b"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign
                  style={styles.closeButon}
                  name="closecircle"
                  size={30}
                  color="red"
                />
              </Button>
            </View>

            <View style={styles.buttonsContainer}>
              <Text style={styles.textSection}>
                Adicione dados ao mapa para ajudar os companheiros de viagem
              </Text>

              <View style={styles.buttonsContainer}>

                <View style={styles.PickerView}>
                  <Picker
                    mode={"dropdown"}
                    style={styles.picker}
                    selectedValue={stateCarreta.carreta}
                    onValueChange={(itemValue, itemIndex) =>
                      setStateCarreta({
                        carreta: itemValue,
                      })
                    }
                  >
                    <Picker.Item label="Radar" value="Radar" />
                    <Picker.Item label="Semaforo" value="Semaforo" />
                    <Picker.Item
                      label="Acidente ou congestionamento"
                      value="Atencao"
                    />
                    <Picker.Item label="Restaurante" value="Restaurante" />
                    <Picker.Item label="Posto de Saúde" value="Hospital" />
                  </Picker>
                </View>
              </View>
              {loading ? (
                <ActivityIndicator
                  size="large"
                  animating={true}
                  color={Colors.red800}
                />
              ) : (
                <Button color="#eb001b" mode="contained">
                  GRAVAR
                </Button>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
    <FAB
    style={styles.fab}
    loading={false}
    icon="plus"
    onPress={() => setModalVisible(true)}
  />
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButonView: {
    alignSelf: "flex-end",
  },
  closeButon: {
    marginTop: -35,
    marginRight: -35,
  },
  modalView: {
    backgroundColor: "#afb7bd",
    margin: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    color: "#000",
    fontFamily: "Poppins_600SemiBold",
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
    marginBottom: 40,
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
  },
  fab: {
    backgroundColor: "#eb001b",
    position: "absolute",
    margin: 10,
    right: 0,
    bottom: 0,
  },
});

export default VehicleModal;
