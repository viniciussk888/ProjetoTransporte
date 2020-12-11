import React from "react";
import { Text, View, Image, TextInput, KeyboardAvoidingView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

import styles from "./styles";

import LogoApp from "../../assets/images/icon.png";

export default function Login() {
  const {navigate} = useNavigation();

  function navigateToHome() {
    navigate("Main");
  }
  function navigateToRegister() {
    navigate("register");
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
    >
      <Image source={LogoApp} style={styles.banner} />

      <Text style={styles.titlePrimary}>Seja bem-vindo</Text>
      <Text style={styles.title}>
        A plataforma que vai revolucionar o conceito de transporte!
      </Text>

      <TextInput
    keyboardType="email-address"
    placeholder="email"
    placeholderTextColor="#000"
    keyboardType="numeric"
    placeholder="CPF ou CNPJ"
    maxLength={14}
    style={styles.input}
    />
      <TextInput
    placeholder="Senha"
    secureTextEntry={true}
    placeholderTextColor="#000"
    style={styles.input}
    />

      <View style={styles.buttonContainer}>
        <Button color="#eb001b" mode="contained" onPress={navigateToHome}>
          Entrar
        </Button>
        <RectButton style={styles.buttonRegister} onPress={navigateToRegister}>
          <Text style={styles.titleRegister}>CADASTRE-SE</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
    );
}
