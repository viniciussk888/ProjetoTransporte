import React, { useState } from "react";
import {
  TextInput,
  Modal,
  StyleSheet,
  Text,
  View,
  Picker,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button, ActivityIndicator, Colors } from "react-native-paper";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { FAB } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";

const LocationModal = ({ sync, coords }) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState({
    nameLocation: "Combustivel",
  });
  const [description, setDescription] = useState("");

  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

  async function createLocation() {
    if (
      name.nameLocation === "" ||
      name.nameLocation === null ||
      description === ""
    ) {
      return Alert.alert("ATENÇÂO", "Descreva o tipo e descrição do local!");
    }
    setLoading(true);
    const city = await AsyncStorage.getItem("city");
    const uf = await AsyncStorage.getItem("uf");

    try {
      const response = await api.post(
        "locations",
        {
          name: name.nameLocation,
          description,
          latitude: coords.latitude,
          longitude: coords.longitude,
          city,
          uf: uf.trim(),
        },
        config
      );
      if (response.status === 201) {
        sync();
        setLoading(false);
        return setModalVisible(!modalVisible);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("ERROR", error);
    }
  }

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
                      selectedValue={name.nameLocation}
                      onValueChange={(itemValue, itemIndex) =>
                        setName({
                          nameLocation: itemValue,
                        })
                      }
                    >
                      <Picker.Item
                        label="Posto de Combustivel"
                        value="Combustivel"
                      />
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
                  <TextInput
                    clearTextOnFocus={true}
                    maxLength={400}
                    autoCapitalize="characters"
                    keyboardType="default"
                    placeholder="Descrição do local"
                    placeholderTextColor="#000"
                    style={styles.input}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                  />
                </View>
                {loading ? (
                  <ActivityIndicator
                    size="large"
                    animating={true}
                    color={Colors.red800}
                  />
                ) : (
                  <Button
                    onPress={createLocation}
                    color="#eb001b"
                    mode="contained"
                  >
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
  textSection: {
    color: "#000",
    fontFamily: "Poppins_600SemiBold",
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
  input: {
    maxWidth: "100%",
    fontFamily: "Archivo_400Regular",
    fontSize: 14,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  fab: {
    backgroundColor: "#eb001b",
    position: "absolute",
    margin: 10,
    right: 0,
    bottom: 0,
  },
});

export default LocationModal;
