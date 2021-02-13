import React, { useState } from "react";
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Button, ActivityIndicator, Colors } from "react-native-paper";

import api from "../../services/api";

import styles from "./styles";

import LogoApp from "../../assets/images/icon.png";
import { useDispatch } from "react-redux";

export default function Login() {
  //variaveis
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //navegação
  const { navigate } = useNavigation();

  function navigateToHome() {
    navigate("Main");
  }
  function navigateToRegister() {
    navigate("register");
  }

  //funções
  async function signin() {
    setLoading(true);
    if (document === "" || password === "") {
      alert("Preencha todas as credenciais de acesso!");
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
          profileUrl: response.data[1].profileUrl,
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
      Alert.alert("#catchError:", " Ocorreu uma falha ao fazer login!");
      console.log(error.response);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={LogoApp} style={styles.banner} />

      <View style={styles.titleContainer}>
        <Text style={styles.titlePrimary}>Seja bem-vindo</Text>
        <Text style={styles.title}>
          A plataforma que vai revolucionar o conceito de transporte!
        </Text>
      </View>

      <TextInput
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

      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator
            size="large"
            animating={true}
            color={Colors.red800}
          />
        ) : (
          <Button
            style={styles.buttonSignin}
            color="#eb001b"
            mode="contained"
            onPress={signin}
          >
            Entrar
          </Button>
        )}
        <RectButton style={styles.buttonRegister} onPress={navigateToRegister}>
          <Text style={styles.titleRegister}>CADASTRE-SE</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
}
