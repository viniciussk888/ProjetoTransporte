import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  Platform,
  Image,
} from "react-native";
import styles from "./styles";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { Button, ActivityIndicator, Colors } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import VehicleCard from "../../components/vehicleCard";
import api from "../../services/api";
import { useSelector } from "react-redux";
import Firebase from "../../services/firebase";
import * as ImagePicker from "expo-image-picker";

function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [controlDelete, setControlDelete] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [editPessoal, setEditPessoal] = useState(false);
  const [editPessoalColor, setEditPessoalColor] = useState("#FFF");
  const user_id = useSelector((state) => state.id);
  const [image, setImage] = useState("");

  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

  function deleted() {
    setControlDelete(Math.random);
  }

  function navigateToVehicleRegister(id) {
    navigation.navigate("vehicle", {
      user_id: id,
      routeOrigin: "profile",
      sync: deleted,
    });
  }
 
  function changeEditPessoal() {
    !editPessoal ? setEditPessoalColor("#eb001b") : setEditPessoalColor("#fff");
    setEditPessoal(!editPessoal);
  }

  function navigateToLogin() {
    navigation.reset({
      routes: [
        {
          name: "login",
        },
      ],
    });
  }

  function logout() {
    dispatch({
      type: "LOG_OUT",
    });
    navigateToLogin();
  }

  async function updateUser() {
    setLoading(true);
    if (password === "") {
      const response = await api.put(
        `users/${user_id}`,
        {
          name,
          whatsapp,
        },
        config
      );
      setName(response.data.name);
      setWhatsapp(response.data.whatsapp);
      setEditPessoal(false);
      setEditPessoalColor("#fff");
      setLoading(false);
      Alert.alert("SUCESSO", "Dados alterados com sucesso!");
    } else {
      const response = await api.put(
        `users/${user_id}`,
        {
          name,
          whatsapp,
          password,
        },
        config
      );
      setName(response.data.name);
      setWhatsapp(response.data.whatsapp);
      setPassword("");
      setEditPessoal(false);
      setEditPessoalColor("#fff");
      setLoading(false);
      Alert.alert("SUCESSO", "Dados alterados com sucesso!");
    }
  }

  useEffect(() => {
    async function getVehicles() {
      const response = await api.get(`vehicles/${user_id}`);
      setVehicles(response.data);
    }
    getVehicles();
  }, [controlDelete]);

  useEffect(() => {
    async function getUserData() {
      const response = await api.get(`users/${user_id}`);
      setName(response.data.name);
      setWhatsapp(response.data.whatsapp);
      setImage(response.data.profileURL);
      setDocument(response.data.document)
    }
    getUserData();
  }, []);

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
      if(result.uri){
        submiteImageUser(result.uri,document)
      }
    }
  };

  async function submiteImageUser(uri, NameFile) {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = Firebase.storage()
      .ref()
      .child("images/" + NameFile);

    await ref.put(blob);

    const url = await ref.getDownloadURL();

    try {
      const response = await api.put(`users/${user_id}`, {
        profileURL: url,
      },config);
      if (response.status === 200) {
        setImage(url);
        Alert.alert(
          "SUCESSO",
          "Foto de perfil alterada!"
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert("ERRO",error);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignSelf: "flex-end" }}>
        <Button color="#fff" onPress={logout}>
          <MaterialIcons name="logout" size={24} color="#fff" />
        </Button>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <RectButton onPress={pickImage}>
          <Image
            source={{ uri: image }}
            style={{
              width: 160,
              height: 160,
              borderRadius: 100,
              borderColor: "#fff",
              borderWidth: 1,
            }}
          />
        </RectButton>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Dados pessoais</Text>
        <RectButton onPress={changeEditPessoal}>
          <FontAwesome5 name="edit" size={24} color={editPessoalColor} />
        </RectButton>
      </View>

      <View style={styles.buttonsContainer}>
        <Text style={styles.textSection}>Nome</Text>
        <TextInput
          editable={editPessoal}
          underlineColorAndroid="transparent"
          keyboardType="default"
          placeholder="Nome"
          value={name}
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.textSection}>Whatsapp</Text>
        <TextInput
          editable={editPessoal}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          placeholder="Whatsapp"
          value={whatsapp}
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={(text) => setWhatsapp(text)}
        />
        <Text style={styles.textSection}>Senha</Text>
        <TextInput
          editable={editPessoal}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          placeholder="Alterar senha atual"
          value={password}
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />

        {editPessoal ? (
          loading ? (
            <ActivityIndicator
              size="large"
              animating={true}
              color={Colors.red800}
            />
          ) : (
            <Button
              style={{
                marginTop: 15,
              }}
              color="#eb001b"
              mode="contained"
              onPress={updateUser}
            >
              SALVAR
            </Button>
          )
        ) : null}
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Veículos</Text>
        <RectButton
          onPress={() => {
            navigateToVehicleRegister(user_id);
          }}
        >
          <Ionicons name="add-circle-outline" size={30} color="#fff" />
        </RectButton>
      </View>
      <ScrollView horizontal>
        {vehicles.length > 0
          ? vehicles.map((vehicle) => (
              <VehicleCard
                deleted={deleted}
                config={config}
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))
          : null}
      </ScrollView>
    </ScrollView>
  );
}

export default Profile;
