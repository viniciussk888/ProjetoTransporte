import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Picker } from 'react-native';
import styles from "./styles";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { Button, RadioButton } from "react-native-paper";
import { useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [editPessoal, setEditPessoal] = useState(false)
  const [editPessoalColor, setEditPessoalColor] = useState("#FFF")
  const [editVehicleColor, setEditVehicleColor] = useState("#FFF")
  const [editVehicle, setEditVehicle] = useState(false)

  const [checked, setChecked] = useState("Próprio");

  const [stateVehicle, setStateVehicle] = useState({
    vehicle: "Selecione",
  });
  const [stateCarreta, setStateCarreta] = useState({
    carreta: "Selecione",
  });

  function changeEditPessoal() {
    !editPessoal ? setEditPessoalColor("#eb001b") : setEditPessoalColor("#fff")
    setEditPessoal(!editPessoal)

  }
  function changeEditVehicle() {
    !editVehicle ? setEditVehicleColor("#eb001b") : setEditVehicleColor("#fff")
    setEditVehicle(!editVehicle)
  }

  function navigateToLogin() {
    navigate("login");
  }
function logout(){
  dispatch({
    type: "LOG_OUT"
  });
  navigateToLogin();
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
        <Text style={styles.titleText}>Dados do veículo</Text>
        <RectButton onPress={changeEditVehicle}>
        <FontAwesome5 name="edit" size={24} color={editVehicleColor} />
        </RectButton>
      </View>

      <View style={styles.buttonsContainer}>
      <Text style={styles.textSection}>Cavalo</Text>
          
<View style={styles.buttonShort}>
            <TextInput
    editable={editVehicle}
    value="oxy8181"
    underlineColorAndroid='transparent'
    keyboardType="default"
    placeholder="Placa"
    placeholderTextColor="#000"
    style={styles.inputShort}
    />
            <TextInput
    editable={editVehicle}
    value="12345678"
    underlineColorAndroid='transparent'
    keyboardType="numeric"
    placeholder="RNTRC"
    placeholderTextColor="#000"
    style={styles.inputShort}
    />
          </View>
          <View style={styles.PickerView}>
            <Picker
    enabled={editVehicle}
    mode={"dropdown"}
    style={styles.picker}
    selectedValue={stateVehicle.vehicle}
    onValueChange={(itemValue, itemIndex) => setStateVehicle({
      vehicle: itemValue
    })
    }
    >
              <Picker.Item label="Selecione o tipo do veículo" value="none" />
              <Picker.Item label="TRUCK 3 EX" value="TRUCK 3 EX" />
              <Picker.Item label="BI-TRUCK - 4 EX" value="BI-TRUCK - 4 EX" />
              <Picker.Item label="BI-TREM - 7 EX" value="BI-TREM - 7 EX" />
              <Picker.Item label="BI-TREM - 8 EX" value="BI-TREM - 8 EX" />
              <Picker.Item label="BI-TREM - 9 EX" value="BI-TREM - 9 EX" />
              <Picker.Item
    label="CAVALO 2 EX | VANDERLEIA 2 EX"
    value="CAVALO 2 EX | VANDERLEIA 2 EX"
    />

              <Picker.Item
    label="CAVALO 2 EX | VANDERLEIA 3 EX"
    value="CAVALO 2 EX | VANDERLEIA 3 EX"
    />

              <Picker.Item
    label="CAVALO 3 EX | VANDERLEIA 3 EX"
    value="CAVALO 3 EX | VANDERLEIA 3 EX"
    />

              <Picker.Item
    label="CAVALO 3 EX | VANDERLEIA 4 EX"
    value="CAVALO 3 EX | VANDERLEIA 4 EX"
    />

              <Picker.Item
    label="CAVALO 2 EX | CARRETA 3 EX"
    value="CAVALO 2 EX | CARRETA 3 EX"
    />

              <Picker.Item
    label="CAVALO 3 EX | CARRETA 3 EX"
    value="CAVALO 3 EX | CARRETA 3 EX"
    />

              <Picker.Item
    label="CAVALO 3 EX | CARRETA 4 EX"
    value="CAVALO 3 EX | CARRETA 4 EX"
    />

              <Picker.Item
    label="CAVALO 4 EX | CARRETA 3 EX"
    value="CAVALO 4 EX | CARRETA 3 EX"
    />

              <Picker.Item
    label="RODO-TREM 3X3 9 EX"
    value="RODO-TREM 3X3 9 EX"
    />

              <Picker.Item
    label="RODO-TREM DOLLY 9 EX"
    value="RODO-TREM DOLLY 9 EX"
    />

              <Picker.Item label="OUTRO" value="OUTRO" />
            </Picker>
          </View>

          <View style={styles.radioContainer}>
            <RadioButton
    value="first"
    color="#eb001b"
    label="Próprio"
    theme="#fff"
    status={checked === "Próprio" ? "checked" : "unchecked"}
    onPress={() => {
      setChecked("Próprio");
    }}
    />
            <Text style={{
      fontWeight: "bold",
      marginRight: 30,
      color: "#fff"
    }}>Próprio</Text>
            <RadioButton
    value="second"
    color="#eb001b"
    label="Terceiro"
    status={checked === "Terceiro" ? "checked" : "unchecked"}
    onPress={() => {
      setChecked("Terceiro");
    }}
    />
            <Text style={{
      fontWeight: "bold",
      color: "#fff"
    }}>Terceiro</Text>
          </View>

<Text style={styles.textSection}>Carreta</Text>

<View style={styles.buttonShort}>
            <TextInput
    keyboardType="default"
    editable={editVehicle}
    value="oxy8181"
    underlineColorAndroid='transparent'
    placeholder="Placa"
    placeholderTextColor="#000"
    style={styles.inputShort}
    />
            <View style={styles.PickerView2}>
              <Picker
    enabled={editVehicle}
    mode={"dropdown"}
    style={styles.picker2}
    selectedValue={stateCarreta.carreta}
    onValueChange={(itemValue, itemIndex) => setStateCarreta({
      carreta: itemValue
    })
    }
    >
                <Picker.Item label="Tipo de carreta/carroceria" value="none" />
                <Picker.Item label="BASCULANTE" value="BASCULANTE" />
                <Picker.Item label="BAU" value="BAU" />
                <Picker.Item label="BAU REFRIGERADO" value="BAU REFRIGERADO" />
                <Picker.Item label="CONTAINER" value="CONTAINER" />
                <Picker.Item label="GAIOLA" value="GAIOLA" />
                <Picker.Item label="GRADE BAIXA" value="GRADE BAIXA" />
                <Picker.Item label="GRANELEIRO" value="GRANELEIRO" />
                <Picker.Item label="HOPPER" value="HOPPER" />
                <Picker.Item label="PISO MOVEL" value="PISO MOVEL" />
                <Picker.Item label="SIDER" value="SIDER" />
                <Picker.Item label="TANQUE" value="TANQUE" />
              </Picker>
            </View>
          </View>

{editVehicle
    &&
    <Button
    style={{
      marginTop: 15,
      marginBottom: 100
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