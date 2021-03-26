import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import styles from "./styles";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { Button, ActivityIndicator,Colors } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import VehicleCard from '../../components/vehicleCard';
import VehicleModal from '../../components/vehicleModal';
import api from '../../services/api'
import {useSelector} from 'react-redux'

function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [controlDelete, setControlDelete] = useState('');
  const [vehicles, setVehicles] = useState([])
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [password, setPassword] = useState('')
  const [editPessoal, setEditPessoal] = useState(false)
  const [editPessoalColor, setEditPessoalColor] = useState("#FFF")
  const user_id = useSelector((state) => state.id);

  function deleted(){
    setControlDelete(Math.random)
  }

  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

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

async function updateUser(){
  setLoading(true)
  if(password===""){
    const response = await api.put(`users/${user_id}`,{
      name,
      whatsapp
    },config)
    setName(response.data.name)
    setWhatsapp(response.data.whatsapp)
    setEditPessoal(false)
    setEditPessoalColor("#fff")
    setLoading(false)
    Alert.alert("SUCESSO","Dados alterados com sucesso!")
  }else{
    const response = await api.put(`users/${user_id}`,{
      name,
      whatsapp,
      password
    },config)
    setName(response.data.name)
    setWhatsapp(response.data.whatsapp)
    setPassword("")
    setEditPessoal(false)
    setEditPessoalColor("#fff")
    setLoading(false)
    Alert.alert("SUCESSO","Dados alterados com sucesso!")
  }
}
useEffect(()=>{
  async function getVehicles(){
    const response = await api.get(`vehicles/${user_id}`)
    setVehicles(response.data)
  }
  getVehicles()
},[controlDelete])

useEffect(()=>{
  async function getUserData(){
    const response = await api.get(`users/${user_id}`)
    setName(response.data.name)
    setWhatsapp(response.data.whatsapp)
  }
  getUserData()
},[])

  return (
    <ScrollView style={styles.container}>
      <View style={{alignSelf:'flex-end'}}>
      <Button
    color="#fff"
    onPress={logout}
    >
            <MaterialIcons name="logout" size={24} color="#fff" />
          </Button>
      </View>
      <View style={{
      alignItems: 'center'
    }}>
      <MaterialIcons name="account-circle" size={150} color="#fff" />
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
    value={name}
    placeholderTextColor="#000"
    style={styles.input}
    onChangeText={(text) => setName(text)}
    />
    <Text style={styles.textSection}>Whatsapp</Text>
    <TextInput
    editable={editPessoal}
    underlineColorAndroid='transparent'
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
    underlineColorAndroid='transparent'
    secureTextEntry={true}
    placeholder="Alterar senha atual"
    value={password}
    placeholderTextColor="#000"
    style={styles.input}
    onChangeText={(text) => setPassword(text)}
    />

{editPessoal?
    loading ? (
      <ActivityIndicator
        size="large"
        animating={true}
        color={Colors.red800}
      />
    ) : (
    <Button
    style={{
      marginTop: 15
    }}
    color="#eb001b"
    mode="contained"
    onPress={updateUser}
    >
            SALVAR
          </Button>
    )
    :null
    }
</View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Veículos</Text>
        <View>
        <VehicleModal sync={deleted} />
        </View>
      </View>
      <ScrollView horizontal>
        {
        vehicles.length>0?vehicles.map((vehicle)=>(
          <VehicleCard deleted={deleted} config={config} key={vehicle.id} vehicle={vehicle} />
        )):null
      }
          </ScrollView>

    </ScrollView>
    );
}

export default Profile;