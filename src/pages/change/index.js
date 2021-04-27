import React from "react";
import {
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import styles from "./styles";
import TruckAnimation from "../../assets/animations/truck.json";
import Lottie from "lottie-react-native";
import colors from "../../assets/colors";

export default function Change() {

  //navegação
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("login");
  }
  function navigateToRegister() {
    navigation.navigate("register");
  }

  return (
    <>
      <View
        style={styles.container}
      >
        <Lottie
          source={TruckAnimation}
          autoPlay
          loop
          resizeMode="contain"
          autoSize
        />

        <View style={styles.titleContainer}>
          <Text style={styles.titlePrimary}>
            Olá, seja bem-vindo
          </Text>
          <Text style={styles.title}>
            A plataforma onde que vai revolucionar o conceito de transporte!
          </Text>
        </View>

        <View style={styles.buttonContainer}>
            <Button
              style={styles.buttonSignin}
              mode="contained"
              onPress={navigateToLogin}
            >
               <Text style={styles.textButton}>JÁ SOU CADASTRADO</Text>
            </Button>
            <Button
              style={styles.buttonRegister}
              mode="contained"
              onPress={navigateToRegister}
            >
             <Text style={[styles.textButton,{color:colors.background}]}>REALIZAR CADASTRO</Text>
            </Button>
        </View>
      </View>
    </>
  );
}
