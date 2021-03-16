import React, { useState } from "react";
import { TextInput, View, Text,ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton, Button,ActivityIndicator, Colors } from "react-native-paper";
import api from '../../services/api'

import Header from "../../components/header";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import Motora from "../../assets/images/motora.svg";
import { cpfMask } from "../../utils/cpfMask";
import { cnpjMask } from "../../utils/cnpjMask";
import { dateMask } from "../../utils/dateMask";
import AsyncStorage from "@react-native-community/async-storage";

export default function Register() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState("PF");
  const [document, setDocument] = useState("");
  const [birthDate, setBirthDate] = useState("");

  function confirmRegister(){
    Alert.alert(
      "ATENÇÃO",
      "Confirma o seu cadastro com os dados informados?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel register"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => registerNewUser() }
      ]
    );
  }

  async function registerNewUser(){
    setLoading(true);
    if(name===""||whatsapp===""||password===""||document===""){
      setLoading(false);
      return alert("INFORME TODOS OS CAMPOS!")
    }else if(checked==="PF"&&birthDate===""){
      setLoading(false);
      return alert("INFORME A DATA DE NASCIMENTO!")
    }
    try {
      const response = await api.post('/users',{
        name,
        whatsapp,
        password,
        type:checked,
        document,
        birthDate,
      })
      let id = response.data.id;
      await AsyncStorage.setItem("register_user_id",id.toString())
      alert("Para finalizar o cadastro informe os dados do veiculo!")
      navigateToVehicleRegister()
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }
  

  function navigateToVehicleRegister() {
   // navigate("vehicle");
    navigation.reset({ 
      routes: [{
        name: 'vehicle'
      }]
    })
  }

  return (
    <>
      <Header routeToBack="login" title="Informe os dados" />
      <ScrollView style={styles.container}>
        <Motora width="100%" height="180" />
        <View style={styles.buttonsContainer}>
          <TextInput
            keyboardType="default"
            placeholder={checked === "PJ" ? "Razão Social" : "Nome"}
            placeholderTextColor="#000"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Whatsapp"
            placeholderTextColor="#000"
            value={whatsapp}
            style={styles.input}
            onChangeText={(text) => setWhatsapp(text)}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#000"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
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

          {checked === "PJ" ? 
          <TextInput
            keyboardType="numeric"
            value={cnpjMask(document)}
            placeholder={'CNPJ'}
            placeholderTextColor="#000"
            style={styles.input}
            onChangeText={(text) => setDocument(text)}
          />
           : 
           <TextInput
            keyboardType="numeric"
            value={cpfMask(document)}
            placeholder={'CPF'}
            placeholderTextColor="#000"
            style={styles.input}
            onChangeText={(text) => setDocument(text)}
          />
           }    

          {checked==="PF"? 
          <TextInput
            keyboardType="default"
            placeholder="Data de nascimento"
            placeholderTextColor="#000"
            style={styles.input}
            value={dateMask(birthDate)}
            onChangeText={(text) => setBirthDate(text)}
          />:
          null
          }
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
            mode="contained"
          >
            REGISTRAR
          </Button>
          )}
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
      </ScrollView>
    </>
  );
}
