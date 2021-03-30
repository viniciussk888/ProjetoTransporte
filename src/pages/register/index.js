import React, { useState, useEffect } from "react";
import { TextInput, View, Text, ScrollView, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  RadioButton,
  Button,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import api from "../../services/api";
import Firebase from "../../services/firebase";
import Header from "../../components/header";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { dateMask } from "../../utils/dateMask";

import * as ImagePicker from "expo-image-picker";

export default function Register() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState("PF");
  const [document, setDocument] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [profileURL, setProfileURL] = useState("");

  function confirmRegister() {
    Alert.alert("ATENÇÃO", "Confirma o seu cadastro com os dados informados?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel register"),
        style: "cancel",
      },
      { text: "Sim", onPress: () => registerNewUser() },
    ]);
  }

  async function submiteImageUser(uri, NameFile) {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = Firebase.storage()
      .ref()
      .child("images/" + NameFile);

    await ref.put(blob);

    const url = await ref.getDownloadURL();

    try {
      setName(name.toUpperCase());
      const response = await api.post("users", {
        name,
        whatsapp,
        password,
        type: checked,
        document,
        birthDate,
        profileURL: url,
      });
      if (response.status === 201) {
        Alert.alert(
          "ATENÇÃO",
          "Para finalizar o cadastro informe os dados do veiculo!"
        );
        navigateToVehicleRegister(response.data.id);
        setLoading(false);
      } else if (response.status === 226) {
        setLoading(false);
        Alert.alert("ATENÇÂO", response.data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function registerNewUser() {
    setLoading(true);

    if (
      profileURL === "" ||
      name === "" ||
      whatsapp === "" ||
      password === "" ||
      document === ""
    ) {
      setLoading(false);
      return alert("INFORME TODOS OS CAMPOS E IMAGEM!");
    } else if (checked === "PF" && birthDate === "") {
      setLoading(false);
      return alert("INFORME A DATA DE NASCIMENTO!");
    }
    const response = await api.post("check-users", {
      document,
    });
    if (response.status === 226) {
      setLoading(false);
      return Alert.alert("ATENÇÂO", response.data.message);
    } else submiteImageUser(profileURL, document);
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permissão de acesso a galeria é nescessaria!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.type !== "image") {
      return alert("Somente permitido a seleção de imagem!");
    }

    if (!result.cancelled) {
      setProfileURL(result.uri);
    }
  };

  function navigateToVehicleRegister(id) {
    navigation.navigate("vehicle", {
      user_id: id,
      routeOrigin: "register",
    });
  }

  return (
    <>
      <Header routeToBack="login" title="Informe os dados" />
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <RectButton onPress={pickImage}>
            <Image
              source={{ uri: profileURL }}
              style={{
                width: 160,
                height: 160,
                borderRadius: 100,
                borderColor: "#000",
                borderWidth: 3,
                backgroundColor: "#fff",
              }}
            />
          </RectButton>
          <Text>Selecione uma foto</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TextInput
            autoCapitalize="characters"
            keyboardType="default"
            placeholder={checked === "PJ" ? "Razão Social" : "Nome"}
            placeholderTextColor="#000"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            maxLength={11}
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

          {checked === "PJ" ? (
            <TextInput
              maxLength={14}
              keyboardType="numeric"
              value={document}
              placeholder={"CNPJ"}
              placeholderTextColor="#000"
              style={styles.input}
              onChangeText={(text) => setDocument(text)}
            />
          ) : (
            <TextInput
              maxLength={11}
              keyboardType="numeric"
              value={document}
              placeholder={"CPF"}
              placeholderTextColor="#000"
              style={styles.input}
              onChangeText={(text) => setDocument(text)}
            />
          )}

          {checked === "PF" ? (
            <TextInput
              maxLength={10}
              keyboardType="numeric"
              placeholder="Data de nascimento"
              placeholderTextColor="#000"
              style={styles.input}
              value={dateMask(birthDate)}
              onChangeText={(text) => setBirthDate(text)}
            />
          ) : null}
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
