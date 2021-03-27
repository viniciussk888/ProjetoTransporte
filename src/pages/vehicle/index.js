import React, { useState } from "react";
import { TextInput, View, Text,Alert,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton, Button,ActivityIndicator, Colors } from "react-native-paper";
import api from '../../services/api'
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { RectButton } from 'react-native-gesture-handler';
import Firebase from '../../services/firebase'
import * as ImagePicker from 'expo-image-picker';

export default function Vehicle({route}) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const  user_id  = route.params.user_id;

  const [board, setBoard] = useState("");
  const [rntrc, setRntrc] = useState("");
  const [checked, setChecked] = useState("Próprio");//property
  const [board_cart, setBoard_cart] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [profileURL, setProfileURL] = useState("");


  const [stateVehicle, setStateVehicle] = useState({
    vehicle: "Selecione",
  });
  const [stateCarreta, setStateCarreta] = useState({
    carreta: "Selecione",
  });

  function navigateToLogin() {
  // navigation.navigate('login')
   navigation.reset({ 
    routes: [{
      name: 'login'
    }]
  })
   }

   function confirmRegister(){
    Alert.alert(
      "ATENÇÃO",
      "Confirma o cadastro do veiculo com os dados informados?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel register"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => registerNewVehicle() }
      ]
    );
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if(result.type!=="image"){
      return alert("Somente permitido a seleção de imagem!")
    }
  
    if (!result.cancelled) {
      setPhotoURL(result.uri);
    }
  };

  async function submiteImageVehicle(uri,name) {
    const response = await fetch(uri);
     const blob = await response.blob();
     var ref = Firebase.storage().ref().child("images/"+name);
     await ref.put(blob).then(async function (snapshot) {
      const url = await snapshot.ref.getDownloadURL()
      setPhotoURL(url)
    })
  }
  
  async function registerNewVehicle(){
  //  setLoading(true)
    if(photoURL===""||board===""||rntrc===""||stateVehicle==="Selecione"||board_cart===""||stateCarreta==="Selecione"){
      setLoading(false)
      return alert("INFORME TODOS OS DADOS DO VEICULO!")
    }
    submiteImageUser(user.profileURL,user.document)
    console.log(profileURL)
    submiteImageVehicle(photoURL,rntrc)
    console.log(photoURL)
    return
    //submiteImage(photoURL,rntrc)
    try {
      setBoard(board.toUpperCase())
      setBoard_cart(board_cart.toUpperCase())
      const response = await api.post("users-vechicle",{
      name:user.name,
      whatsapp:user.whatsapp,
      password:user.password,
      type:user.type,
      document:user.document,
      birthDate:user.birthDate,
      profileURL:urlProfile,
      board,
      rntrc,
      type_vehicle:stateVehicle.vehicle,
      property:checked,
      board_cart,
      type_cart:stateCarreta.carreta,
      photoURL:urlVehicle
      })
      if(response.status===226){
        setLoading(false)
        Alert.alert("ATENÇÃO",response.data.message)
      }else if(response.status===201){
        Alert.alert("ATENÇÃO","Dados cadastrados! Faça login na plataforma e aguarde sua aprovação.")
        setLoading(false)
        navigateToLogin()
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <>
      <View style={styles.container}>

      <RectButton onPress={pickImage}>
      <Image source={{ uri: photoURL }} style={{ width: 160, height: 160,borderRadius:100,borderColor:"#000",borderWidth:3 }}/>
      </RectButton>

        <View style={styles.buttonsContainer}>
          <Text style={styles.sectionText}>Cavalo</Text>

          <View style={styles.buttonShort}>
            <TextInput
              keyboardType="default"
              placeholder="Placa"
              placeholderTextColor="#000"
              style={styles.inputShort}
              onChangeText={(text) => setBoard(text)}
              value={board}
            />
            <TextInput
              keyboardType="numeric"
              placeholder="RNTRC"
              placeholderTextColor="#000"
              style={styles.inputShort}
              onChangeText={(text) => setRntrc(text)}
              value={rntrc}
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
              onChangeText={(text) => setBoard_cart(text)}
              value={board_cart}
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
        {loading ? (
            <ActivityIndicator
              size="large"
              animating={true}
              color={Colors.red800}
            />
          ) : (
          <Button 
          onPress={confirmRegister} 
          style={{ width: "100%" }} 
          color="#eb001b" 
          mode="contained">
            Cadastrar
          </Button>
          )}
        </View>
      </View>
    </>
  );
}
