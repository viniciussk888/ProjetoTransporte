import React, { useState, useEffect } from "react";
import { TextInput, Modal, StyleSheet, Text, View,Picker,Alert  } from "react-native";
import { Ionicons,AntDesign } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { Button, RadioButton, ActivityIndicator,Colors } from "react-native-paper";
import api from '../../services/api'
import {useSelector} from 'react-redux'

const VehicleModal = ({sync}) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const user_id = useSelector((state) => state.id);
  const [board, setBoard] = useState("");
  const [rntrc, setRntrc] = useState("");
  const [board_cart, setBoard_cart] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [checked, setChecked] = useState("Próprio");//property
  const [stateVehicle, setStateVehicle] = useState({
    vehicle: "Selecione",
  });//type_vehicle
  const [stateCarreta, setStateCarreta] = useState({
    carreta: "Selecione",
  });//type_cart

  useEffect(()=>{
setStateCarreta("Selecione")
setStateVehicle("Selecione")
setChecked('Próprio')
  },[modalVisible])

  async function createNewVehicle(){
    setLoading(true)
    try {
      const response = await api.post('vehicles',{
      user_id,
      board,
      rntrc,
      type_vehicle:stateVehicle.vehicle,
      property:checked,
      board_cart,
      type_cart:stateCarreta.carreta,
      photoURL
      })
      if(response.status===201){
        setLoading(false)
        sync()
        Alert.alert("SUCESSO","Cadastrado com sucesso!")
        setModalVisible(!modalVisible)
      }else if(response.status===226){
        setLoading(false)
        return Alert.alert("ATENÇÃO",response.data.message)
      }
    } catch (error) {
      setLoading(false)
      alert(error)
    }
  }
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

<View style={styles.closeButonView}>
          <Button
          style={styles.closeButon}
    color="#eb001b"
    onPress={() => setModalVisible(!modalVisible)}
    >
            <AntDesign style={styles.closeButon} name="closecircle" size={30} color="red" />
          </Button>
          </View>


          <View style={styles.buttonsContainer}>
      <Text style={styles.textSection}>Cavalo</Text>
          
<View style={styles.buttonShort}>
            <TextInput
    value={board}
    onChangeText={(text) => setBoard(text)}
    underlineColorAndroid='transparent'
    keyboardType="default"
    placeholder="Placa"
    placeholderTextColor="#000"
    style={styles.inputShort}
    />
            <TextInput
    value={rntrc}
    onChangeText={(text) => setRntrc(text)}
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
    onChangeText={(text) => setBoard_cart(text)}
    value={board_cart}
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
{
  loading ? (
    <ActivityIndicator
      size="large"
      animating={true}
      color={Colors.red800}
    />
  ) : (
<Button
    color="#eb001b"
    mode="contained"
    onPress={createNewVehicle}
    >
            GRAVAR
          </Button>
  )
}
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
  closeButonView:{
    alignSelf:'flex-end',
  },
  closeButon:{
    marginTop:-35,
    marginRight:-35
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