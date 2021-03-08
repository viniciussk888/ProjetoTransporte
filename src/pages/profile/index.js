import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import styles from "./styles";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { Button } from "react-native-paper";

function Profile() {
  const [editPessoal, setEditPessoal] = useState(false)
  const [editVehicle, setEditVehicle] = useState(false)

  function changeEditPessoal() {
    setEditPessoal(!editPessoal)
  }
  function changeEditVehicle() {
    setEditVehicle(!editVehicle)
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
    >
            Sair
          </Button>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Dados pessoais</Text>
        <RectButton onPress={changeEditPessoal}>
        <FontAwesome5 name="edit" size={24} color="#fff" />
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
        <Text style={styles.titleText}>Dados do veículo</Text>
        <RectButton onPress={changeEditVehicle}>
        <FontAwesome5 name="edit" size={24} color="#fff" />
        </RectButton>
      </View>

      <View style={styles.buttonsContainer}>
      <Text style={styles.textSection}>Nome</Text>
          <TextInput
    editable={editVehicle}
    underlineColorAndroid='transparent'
    keyboardType="default"
    placeholder="Nome"
    value="ALBERTO VINICIUS MARTINS ROCHA"
    placeholderTextColor="#000"
    style={styles.input}
    />

{editVehicle
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



    </ScrollView>
    );
}

export default Profile;
