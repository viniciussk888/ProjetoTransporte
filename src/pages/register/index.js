import React, { useState } from "react";
import { TextInput, View, Text,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton, Button } from "react-native-paper";

import Header from "../../components/header";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import Motora from "../../assets/images/motora.svg";
import { cpfMask } from "../../utils/cpfMask";
import { cnpjMask } from "../../utils/cnpjMask";
import { phoneMask } from "../../utils/phoneMask";
import { dateMask } from "../../utils/dateMask";

export default function Register() {
  const { navigate } = useNavigation();

  const [checked, setChecked] = useState("PF");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function navigateToVehicleRegister() {
    navigate("vehicle");
  }
  function mask(typeMask){
    if(typeMask==="cpf"){
      setCpfCnpj(cpfMask(cpfCnpj))
    }else if(typeMask==="cnpj"){
      setCpfCnpj(cnpjMask(cpfCnpj))
    }else if(typeMask==='phone'){
      setWhatsapp(phoneMask(whatsapp))
    }else if(typeMask==='date'){
      setBirthDate(dateMask(birthDate))
    }
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
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Whatsapp"
            placeholderTextColor="#000"
            value={whatsapp}
            style={styles.input}
            onChangeText={(text) => setWhatsapp(text)}
            onEndEditing={()=>mask('phone')}
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

          {checked === "PJ" ? 
          <TextInput
            keyboardType="numeric"
            value={cpfCnpj}
            placeholder={'CNPJ'}
            placeholderTextColor="#000"
            style={styles.input}
            onChangeText={(text) => setCpfCnpj(text)}
            onEndEditing={()=>mask('cnpj')}
          />
           : 
           <TextInput
            keyboardType="numeric"
            value={cpfCnpj}
            placeholder={'CPF'}
            placeholderTextColor="#000"
            style={styles.input}
            onChangeText={(text) => setCpfCnpj(text)}
            onEndEditing={()=>mask('cpf')}
          />
           }    

          {checked==="PF"? 
          <TextInput
            keyboardType="default"
            placeholder="Data de nascimento"
            placeholderTextColor="#000"
            style={styles.input}
            value={birthDate}
            onChangeText={(text) => setBirthDate(text)}
            onEndEditing={()=>mask('date')}
          />:
          null
          }
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
      </ScrollView>
    </>
  );
}
