import React, { useState } from "react";
import {
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

export default function Login() {
  //variaveis
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");

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
      alert(response.data.token);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
