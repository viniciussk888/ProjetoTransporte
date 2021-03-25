import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Picker } from 'react-native';
import styles from "./styles";
import { MaterialIcons, FontAwesome5,Ionicons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { Button, RadioButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import VehicleCard from '../../components/vehicleCard';
import VehicleModal from '../../components/vehicleModal';

function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [editPessoal, setEditPessoal] = useState(false)
  const [editPessoalColor, setEditPessoalColor] = useState("#FFF")
  const [modalVisible, setModalVisible] = useState(false);

  function changeEditPessoal() {
    !editPessoal ? setEditPessoalColor("#eb001b") : setEditPessoalColor("#fff")
    setEditPessoal(!editPessoal)

  }

  function navigateToLogin() {
    navigation.reset({
      routes: [{
        name: 'login'
      }]
    })
  }
function logout(){
  dispatch({
    type: "LOG_OUT"
  });
  navigateToLogin();
}
function showVehicleModal(){
  setModalVisible(!modalVisible)
}


  return (
    <ScrollView style={styles.container}>
      <View style={{
      alignItems: 'center'
    }}>
      <MaterialIcons name="account-circle" size={150} color="#fff" />
      <Button
    color="#eb001b"
    mode="contained"
    onPress={logout}
    >
            Sair
          </Button>
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
    underlineColorAndroid='transparent'
    keyboardType="default"
    placeholder="Nome"
    value="ALBERTO VINICIUS MARTINS ROCHA"
    placeholderTextColor="#000"
    style={styles.input}
    />
    <Text style={styles.textSection}>Whatsapp</Text>
    <TextInput
    editable={editPessoal}
    underlineColorAndroid='transparent'
    keyboardType="numeric"
    placeholder="Whatsapp"
    value="(99)981777152"
    placeholderTextColor="#000"
    style={styles.input}
    />
    <Text style={styles.textSection}>Senha</Text>
    <TextInput
    editable={editPessoal}
    underlineColorAndroid='transparent'
    secureTextEntry={true}
    placeholder="Senha"
    value="lokomania"
    placeholderTextColor="#000"
    style={styles.input}
    />

{editPessoal
    &&
    <Button
    style={{
      marginTop: 15
    }}
    color="#eb001b"
    mode="contained"
    >
            SALVAR
          </Button>
    }
</View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Veículos</Text>
        <RectButton onPress={showVehicleModal}>
        <VehicleModal />
        </RectButton>
      </View>
      <ScrollView horizontal>
            <VehicleCard/>
            <VehicleCard/>
            <VehicleCard/>
            <VehicleCard/>
          </ScrollView>

    </ScrollView>
    );
}

export default Profile;