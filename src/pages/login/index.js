import React, { useState } from "react";
import {
  Alert,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ActivityIndicator } from "react-native-paper";
import api from "../../services/api";
import styles from "./styles";
import Truck from "../../assets/animations/truck.json";
import Lottie from "lottie-react-native";
import { useDispatch } from "react-redux";

export default function Login() {
  //variaveis
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //navegação
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.reset({
      routes: [{
        name: 'Main'
      }]
    })
  }

  //funções
  async function signin() {
    setLoading(true);
    if (document === "" || password === "") {
      Alert.alert("ATENÇÃO","Preencha todas as credenciais!");
      setLoading(false);
      return;
    }
    try {
      const response = await api.post("sessions", {
        document,
        password,
      });
      if (response.data.token !== null || response.data.token !== "") {
        dispatch({
          type: "LOG_IN",
          token: response.data[0].token,
          id: response.data[1].id,
          name: response.data[1].name,
          profileURL: response.data[1].profileURL,
          auth: 1,
        });
        setLoading(false);
        navigateToHome();
      } else if (response.status === 200) {
        Alert.alert("AVISO:", "Ocorreu uma falha ao fazer login!");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status && error.response.status === 401) {
        Alert.alert("AVISO:", "Credenciais de acesso incorreta!");
        return;
      }
      Alert.alert("Error", "Ocorreu uma falha ao fazer login!");
      console.log(error.response);
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
       <Lottie
          source={Truck}
          autoPlay
          loop
          resizeMode="contain"
          autoSize
       />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Entre agora mesmo para encontrar os melhores fretes!
          </Text>
        </View>

        <TextInput
          maxLength={14}
          placeholderTextColor="#000"
          keyboardType="numeric"
          placeholder="CPF ou CNPJ"
          value={document}
          onChangeText={(text) => setDocument(text)}
          maxLength={14}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholderTextColor="#000"
          style={styles.input}
        />

          {loading ? (
            <ActivityIndicator
              size="large"
              animating={true}
              color="#fff"
            />
          ) : (
            <Button
              style={styles.buttonSignin}
              mode="contained"
              onPress={signin}
            >
              Entrar
            </Button>
          )}
          
      </KeyboardAvoidingView>
    </>
  );
}
